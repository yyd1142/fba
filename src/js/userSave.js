"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import hintView from '../components/hintView'
import navigationBar from '../components/navigationBar'
import md5 from 'js-md5';
var userID = null;
var isClick = true;
var startAddressInfo = {};
var endAddressInfo = {};
module.exports = {
    data() {
        return {
            pathName: '/user_save',
            saveItems: []
        }

    },
    ready() {
        if (localStorage.getItem('userInfo')) {
            userID = JSON.parse(localStorage.getItem('userInfo')).response.user.id;
        }
        this.saveList();
    },
    methods: {
        saveList() {
            let self = this;
            let params = {
                m: 'inquiry',
                action: 'list',
                userID: userID
            };
            this.$httpGet('vip', params, function (code, data) {
                if (code == 0) {
                    self.saveItems = data.response;
                } else {

                }
            });
        },
        startAddress(id) {
            let self = this;
            let params = {
                m: 'list',
                type: 1
            };
            let aa = this.$httpGet('order', params, function (code, data) {
                let result = data.response;
                result.forEach(function (item) {
                    if (item.id == id) {
                        startAddressInfo['info'] = item;
                    }
                })
            })
        },
        endAddress(id) {
            let self = this;
            let params = {
                m: 'list',
                type: 2
            };
            this.$httpGet('order', params, function (code, data) {
                let result = data.response;
                result.forEach(function (item) {
                    if (item.id == id) {
                        endAddressInfo['info'] = item;
                    }
                })
            })
        },
        info(item) {
            if (!isClick) {
                return false;
            }
            isClick = false;
            let self = this;
            let params = {
                m: 'inquiry',
                action: 'info',
                inquiry_id: item.inquiry_id
            };
            this.$httpGet('vip', params, function (code, data) {
                if (code == 0) {
                    let item = data.response;
                    self.startAddress(item.startID);
                    self.endAddress(item.endID);
                    self.$nextTick(function () {
                        setTimeout(function () {
                            let formData = {
                                "hasData": false,
                                "FBAWarehouseID": item.FBAWarehouseID,
                                "startAddress": startAddressInfo.info,
                                "endAddress": endAddressInfo.info,
                                "isPlaceOrder": false,
                                "fbaAddress": item.FBAWarehouseName,
                                "goodsTypeID": item.typeGoodsID,
                                "goodsInfo": JSON.parse(item.goodsInfo),
                                "logisticsID": item.logistics,
                                "declare": item.declare
                            }
                            if (item.truckAddress != null) {
                                formData['switchButton'] = true;
                                formData["provinceID"] = JSON.parse(item.truckAddress).provinceID;
                                formData["cityID"] = JSON.parse(item.truckAddress).cityID;
                                formData["townID"] = JSON.parse(item.truckAddress).townID;
                                formData["streetID"] = JSON.parse(item.truckAddress).streetID;
                            } else {
                                formData['switchButton'] = false;
                            }
                            sessionStorage.setItem('inquiryFomrData', JSON.stringify(formData));
                            isClick = true;
                            self.$router.go('/save_info?is_save=true#top');
                        }, 1500);
                    })
                } else {

                }
            });
        }
    },
    components: {
        headerComponent,
        footerComponent,
        navigationBar,
        hintView
    }
};
