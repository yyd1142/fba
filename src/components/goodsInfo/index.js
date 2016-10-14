require("../../style/inquiry.less");
var _isOriginatingAddressItems = [];
var _isDestinationAddressItems = [];
var _isOriginatingAddressItemsUpdate = true;
var _isDestinationAddressItemsUpdate = true;

module.exports = {
    template: require('./template.html'),
    props: ['item'],
    data() {
        return {
            notData: false,
            goodsTypeNotdata: false,
            shuangQing: false,
            kuaiDi: false,
            logisticsShow: false,
            goodsTypeItems: [],
            fbaItems: [],
            originatingAddressItems: [],
            destinationAddressItems: [],
            provinces: [],
            cities: [],
            towns: [],
            streets: []
        }
    },
    ready() {
        if (sessionStorage.getItem('startAddress')) {
            this.item.startAddress = JSON.parse(sessionStorage.getItem('startAddress'));
        }
        if (sessionStorage.getItem('endAddress')) {
            this.item.endAddress = JSON.parse(sessionStorage.getItem('endAddress'));
        }
        if (this.item.isPlaceOrder) {
            this.cityList();
            this.townList();
            this.streetList();
        }
        this.provinceList();
        this.goodsTypeList();
        this.logisticsType();
        this.originatingAddressList();
        this.destinationAddressList();
    },
    methods: {
        // 起运地列表
        originatingAddressList() {
            if (!_isOriginatingAddressItemsUpdate) {
                this.originatingAddressItems = _isOriginatingAddressItems;
                return false;
            }
            let self = this;
            let params = {
                m: 'list',
                type: 1
            }
            this.$httpGet('order', params, function (code, data) {
                if (code == 0) {
                    self.originatingAddressItems = data.response;
                    _isOriginatingAddressItems = data.response;
                    _isOriginatingAddressItemsUpdate = false;
                }
            });
        },
        // 目的地列表
        destinationAddressList() {
            if (!_isDestinationAddressItemsUpdate) {
                this.destinationAddressItems = _isDestinationAddressItems;
                return false;
            }
            let self = this;
            let params = {
                m: 'list',
                type: 2
            }
            this.$httpGet('order', params, function (code, data) {
                if (code == 0) {
                    self.destinationAddressItems = data.response;
                    _isDestinationAddressItems = data.response;
                    _isDestinationAddressItemsUpdate = false;
                }
            });
        },
        provinceList() {
            let self = this;
            let params = {
                m: 'province',
                countryID: '100000'
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.provinces = data.response;
                }
            });
        },
        cityList() {
            let self = this;
            let params = {
                m: 'city',
                provinceID: this.item.provinceID
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.cities = data.response;
                }
            });
        },
        townList() {
            let self = this;
            let params = {
                m: 'town',
                cityID: this.item.cityID
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.towns = data.response;
                }
            });
        },
        streetList() {
            let self = this;
            let params = {
                m: 'street',
                townID: this.item.townID
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.streets = data.response;
                }
            });
        },
        // FBA仓库
        findFBA() {
            if (this.item.endAddress.countryID == null) {
                return false;
            }
            let self = this;
            let params = {
                m: 'list',
                type: 3,
                countryID: this.item.endAddress.countryID
            }
            this.$httpGet('order', params, function (code, data) {
                if (code == 0) {
                    self.fbaItems = data.response;
                }
            });
        },
        // 选择FBA仓库
        chooseFBA(data) {
            this.item.fbaAddress = data.fullAddress;
            this.item.FBAWarehouseID = data.id;
            this.item.hasData = false;
        },
        // 品名列表
        goodsTypeList() {
            if (this.item.startAddress.id == null || this.item.endAddress.id == null) {
                return false;
            }
            this.findFBA();
            let self = this;
            let params = {
                m: 'list',
                type: 4,
                startID: this.item.startAddress.id,
                endID: this.item.endAddress.id
            }
            this.$httpGet('order', params, function (code, data) {
                if (code == 0) {
                    if (data.response.length != 0) {
                        self.goodsTypeItems = data.response;
                        self.goodsTypeNotdata = false;
                    } else {
                        self.goodsTypeNotdata = true;
                    }

                } else { }
            });
        },
        // 物流方式
        logisticsType() {
            if (this.item.startAddress.id == null || this.item.endAddress.id == null || this.item.goodsTypeID == null) {
                return false;
            }
            let self = this;
            let params = {
                m: 'list',
                type: 5,
                startID: this.item.startAddress.id,
                endID: this.item.endAddress.id,
                goodsTypeID: this.item.goodsTypeID
            }
            this.$httpGet('order', params, function (code, data) {
                if (code == 0) {
                    let result = data.response;
                    if (result.length != 0) {
                        self.logisticsShow = true;
                        if (result.length == 1) {
                            if (result[0] == 1) {
                                self.shuangQing = true;
                                self.kuaiDi = false;
                            }else{
                                self.shuangQing = false;
                                self.kuaiDi = true;
                            }
                        }else{
                            self.shuangQing = true;
                            self.kuaiDi = true;
                        }
                    }
                } else { }
            });
        },
        // 添加货物信息
        addGoodsInfo() {
            this.item.goodsInfo.push({
                weight: "",
                long: "",
                wide: "",
                high: "",
                number: ""
            });
        },
        // 删除货物信息
        removeGoodsInfo: function (index) {
            this.itme.goodsInfo.splice(index, 1)
        },
        submit(){
            this.$dispatch('form-data', this.item)
        }
    }
}