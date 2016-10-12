"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import ruleComponent from '../components/serviceRule'

var _isOriginatingAddressItems = [];
var _isDestinationAddressItems = [];
var _isOriginatingAddressItemsUpdate = true;
var _isDestinationAddressItemsUpdate = true;

module.exports = {
    data() {
        return {
            resultPanle: false,
            rulePanle: false,
            switchButton: false,
            hasData: false,
            notData: false,
            goodsTypeNotdata: false,
            shuangQing: false,
            kuaiDi: false,
            logistics: false,
            fbaAddress: '',
            endAddress: '',
            startAddress: '',
            goodsTypeID: '',
            FBAWarehouseID: '',
            logisticsID: '',
            goodsInfo: [{
                "weight": "",
                "long": "",
                "wide": "",
                "high": "",
                "number": ""
            }],
            goodsTypeItems: [],
            fbaItems: [],
            originatingAddressItems: [],
            destinationAddressItems: []
        }

    },
    components: {
        headerComponent,
        footerComponent,
        ruleComponent
    },
    ready() {
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
        // FBA仓库模糊查询
        findFBA() {
            let self = this;
            let params = {
                m: 'list',
                type: 3,
                countryID: this.endAddress.countryID,
                condition: this.fbaAddress
            }
            this.$httpGet('order', params, function (code, data) {
                if (code == 0) {
                    if (data.response.length != 0) {
                        self.fbaItems = data.response;
                        self.notData = false;
                        self.hasData = true;
                    } else {
                        self.notData = true;
                        self.hasData = true;
                        self.$nextTick(function () {
                            setTimeout(function () {
                                self.hasData = false;
                            }, 1500);
                        });
                    }
                }
            });
        },
        // 选择FBA仓库
        chooseFBA(item) {
            this.fbaAddress = item.fullAddress;
            this.FBAWarehouseID = item.FBAWarehouseID;
            this.hasData = false;
        },
        // 品名列表
        goodsTypeList() {
            if (this.startAddress.id == null || this.endAddress.id == null) {
                return false;
            }
            let self = this;
            let params = {
                m: 'list',
                type: 4,
                startID: this.startAddress.id,
                endID: this.endAddress.id
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
            if (this.startAddress.id == null || this.endAddress.id == null || this.goodsTypeID == null) {
                return false;
            }
            let self = this;
            let params = {
                m: 'list',
                type: 5,
                startID: this.startAddress.id,
                endID: this.endAddress.id,
                goodsTypeID: this.goodsTypeID
            }
            this.$httpGet('order', params, function (code, data) {
                if (code == 0) {
                    let result = data.response;
                    if (result.length != 0) {
                        self.logistics = true;
                        result.forEach(function (item) {
                            if (item == 1) {
                                self.shuangQing = true;
                            } else if (item == 2) {
                                self.kuaiDi = true;
                            }
                        })
                    }
                } else { }
            });
        },
        // 添加货物信息
        addGoodsInfo() {
            this.goodsInfo.push({
                weight: "",
                long: "",
                wide: "",
                high: "",
                number: ""
            });
        },
        // 删除货物信息
        removeGoodsInfo: function (index) {
            this.goodsInfo.splice(index, 1)
        },
        submit() {
            let body = {
                "m": "findPrice",
                "startID": this.startAddress.id,
                "endID": this.endAddress.id,
                "FBAWarehouseID": this.FBAWarehouseID,
                "goodsTypeID": this.goodsTypeID,
                "logistics": this.logisticsID,
                "goodsInfo": this.goodsInfo
            }
            this.$httpPost('order', null, body, function (code, data) {

            });
            // document.body.style.overflow = 'hidden';
            // this.rulePanle = true;
        },
        price() {
            this.resultPanle = true;
            window.location.href = '/inquiry#resultPanle';
        }
    }
};
