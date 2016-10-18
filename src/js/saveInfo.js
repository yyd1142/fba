"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import ruleComponent from '../components/serviceRule'
import goodsInfo from '../components/goodsInfo'
import hintView from '../components/hintView'

var userID = null;
var isClick = true;

module.exports = {
    data() {
        return {
            resultPanle: false,
            rulePanle: false,
            hintShow: false,
            message: '',
            collectionText: '收藏',
            inquiryItem: {},
            formData: JSON.parse(sessionStorage.getItem('inquiryFomrData'))
        }

    },
    components: {
        headerComponent,
        footerComponent,
        ruleComponent,
        goodsInfo,
        hintView
    },
    ready() {
        if (localStorage.getItem('userInfo')) {
            userID = JSON.parse(localStorage.getItem('userInfo')).response.user.id;
        }
    },
    methods: {
        submit(item) {
            let self = this;
            let body = {
                "m": "findPrice",
                "startID": item.startAddress.id,
                "endID": item.endAddress.id,
                "FBAWarehouseID": item.FBAWarehouseID,
                "goodsTypeID": item.goodsTypeID,
                "logistics": item.logisticsID,
                "goodsInfo": item.goodsInfo,
                "declare": item.declare
            };
            if (item.switchButton) {
                body['truckAddress'] = {
                    "provinceID": item.provinceID,
                    "cityID": item.cityID,
                    "townID": item.townID,
                    "streetID": item.streetID,
                    specificAddress: ""
                }
            }

            for (let key in body) {
                if (body[key] == null || body[key] == '') {
                    self.hintShow = true;
                    self.message = '请确保表单是否填写完整'
                    return false;
                }
            }
            let missingParams = [];
            item.goodsInfo.forEach(function (obj) {
                let i = item.goodsInfo.indexOf(obj);
                for (let key in obj) {
                    if (obj[key] == '') {
                        missingParams.push(i);
                        break;
                    }
                }
            });
            if (missingParams.length != 0) {
                this.hintShow = true;
                this.message = '请输入完整的货物信息'
                return false;
            }
            this.$httpPost('order', null, body, function (code, data) {
                if (code == 0) {
                    let result = data.response;
                    result['pricesInfo'] = JSON.parse(result.pricesInfo);
                    self.inquiryItem = result;
                    self.resultPanle = true;
                    item.hasData = false;
                    item.inquiryItem = result;
                    sessionStorage.setItem('inquiryFomrData', JSON.stringify(item));
                }
            });
        },
        // 收藏
        collection() {
            if (userID == null) {
                this.$router.go('/login#top');
                return false;
            }
            if (!isClick) {
                this.hintShow = true;
                this.message = '您已经收藏过了'
                return false;
            }
            let self = this;
            let params = {
                m: 'collection',
                userID: userID,
                inquiryID: this.inquiryItem.id
            };
            this.$httpGet('user', params, function (code, data) {
                if (code == 0) {
                    self.collectionText = '已收藏'
                } else { }
                isClick = false;
            });
        },
        // 下单
        placeOrder() {
            document.body.style.overflow = 'hidden';
            this.rulePanle = true;
        }
    },
    events: {
        'form-data': function (item) {
            this.submit(item);
        }
    }
};
