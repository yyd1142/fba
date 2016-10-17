"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import ruleComponent from '../components/serviceRule'
import goodsInfo from '../components/goodsInfo'
import productInfo from '../components/productInfo'
import customsInfo from '../components/customsInfo'
import invoiceInfo from '../components/invoiceInfo'
import placeOrder from '../components/placeOrder'
import orderInfo from '../components/orderInfo'
import goodsTable from '../components/goodsTable'
import hintView from '../components/hintView'

var userID = null;
var formData = {};

module.exports = {
    data() {
        return {
            resultPanle: false,
            rulePanle: false,
            switchButton: false,
            hintShow: false,
            message: '',
            formData: JSON.parse(sessionStorage.getItem('inquiryFomrData')),
            inquiryFomrData: {},
            priceItems: {},
            productInfo: [],
            goodsTables: [],
            orderInfo: [],
            customsInfo: [],
            invoiceInfo: {}
        }

    },
    components: {
        headerComponent,
        footerComponent,
        ruleComponent,
        goodsInfo,
        productInfo,
        customsInfo,
        invoiceInfo,
        placeOrder,
        orderInfo,
        goodsTable,
        hintView
    },
    ready() {
        if (localStorage.getItem('userInfo')) {
            userID = JSON.parse(localStorage.getItem('userInfo')).response.user.id;
        }
        if (sessionStorage.getItem('inquiryFomrData')) {
            let data = JSON.parse(sessionStorage.getItem('inquiryFomrData'));
            data['isPlaceOrder'] = true;
            this.inquiryFomrData = data;
            this.priceItems = data.inquiryItem;
        }
    },
    methods: {
        submit() {
            if (userID == null) {
                this.$router.go('/login#top');
                return false;
            }
            // this.hintShow = true;
            // this.message = '下单成功'
            if (this.formData.logisticsID == 1) {
                this.shuangQing();
            } else {
                this.kuaiDi();
            }
        },
        // 双清专线
        shuangQing() {
            let self = this;
            let body = {
                "m": "addOrder",
                "userID": userID,
                "inquiry_id": this.formData.inquiryItem.id,
                "customerOrderID": this.orderInfo.customerOrderID,
                "FBAID": this.orderInfo.FBAID,
                "receiptAddress": this.orderInfo.receiptAddress,
                "countryID": this.formData.endAddress.countryID,
                "postCode": this.orderInfo.postCode,
                "isSensitive": this.orderInfo.isSensitive,
                "desc": this.orderInfo.desc,
                "totalNumber": this.orderInfo.totalNumber,
                "goods": this.goodsTables,
                "products": this.productInfo,
                "invoice": this.customsInfo.invoice,
                "packingBill": this.customsInfo.packingBill
            };
            if (this.formData.declare == 2) {
                body['baoGuanBill'] = this.customsInfo.baoGuanBill;
            }
            if (this.formData.switchButton) {
                body['truckAddress'] = {
                    "specificAddress": this.formData.specificAddress,
                    "time": this.formData.time
                }
            }
            // 表单判断
            for (let key in body) {
                if (body[key] == null || body[key] == '') {
                    self.hintShow = true;
                    self.message = '请确保表单是否填写完整'
                    return false;
                }
            }
            let goodsTablesEmpty = [];
            this.goodsTables.forEach(function (obj) {
                let i = self.goodsTables.indexOf(obj);
                for (let key in obj) {
                    if (obj[key] == '') {
                        goodsTablesEmpty.push(i);
                        break;
                    }
                }
            });
            if (goodsTablesEmpty.length != 0) {
                this.hintShow = true;
                this.message = '请输入完整的货物信息'
                return false;
            }
            let productsEmpty = [];
            this.productInfo.forEach(function (obj) {
                let i = self.productInfo.indexOf(obj);
                for (let key in obj) {
                    if (obj[key] == '') {
                        productsEmpty.push(i);
                        break;
                    }
                }
            });
            if (productsEmpty.length != 0) {
                this.hintShow = true;
                this.message = '请输入完整的产品信息'
                return false;
            }
            this.$httpPost('order', null, body, function (code, data) {
                if (code == 0) {
                    self.hintShow = true;
                    self.message = '下单成功'
                } else {
                    self.hintShow = true;
                    self.message = '下单失败'
                }
            });
        },
        // 快递方式
        kuaiDi() {
            let self = this;
            let body = {
                "m": "addOrder",
                "userID": userID,
                "inquiry_id": this.formData.inquiryItem.id,
                "deliveryTime": this.invoiceInfo.deliveryTime,
                "contact": this.invoiceInfo.contact,
                "deliveryContact": this.invoiceInfo.deliveryContact,
                "total": this.invoiceInfo.total,
                "pieces": this.invoiceInfo.pieces,
                "totalNumber": this.invoiceInfo.totalNumber,
                "autograph": this.invoiceInfo.autograph,
                "descGoods": this.invoiceInfo.descGoods,
                "products": this.productInfo,
                "invoice": this.customsInfo.invoice,
                "packingBill": this.customsInfo.packingBill
            };
            if (this.formData.declare == 2) {
                body['baoGuanBill'] = this.customsInfo.baoGuanBill;
            }
            if (this.formData.switchButton) {
                body['truckAddress'] = {
                    "specificAddress": this.formData.specificAddress,
                    "time": this.formData.time
                }
            }

            // 表单判断
            for (let key in body) {
                if (body[key] == null || body[key] == '') {
                    self.hintShow = true;
                    self.message = '请确保表单是否填写完整'
                    return false;
                }
            }
            let descGoods = this.invoiceInfo.descGoods;
            let descGoodsEmpty = [];
            descGoods.forEach(function (obj) {
                let i = descGoods.indexOf(obj);
                for (let key in obj) {
                    if (obj[key] == '') {
                        descGoodsEmpty.push(i);
                        break;
                    }
                }
            });
            if (descGoodsEmpty.length != 0) {
                this.hintShow = true;
                this.message = '请输入完整的货物信息'
                return false;
            }
            let productsEmpty = [];
            this.productInfo.forEach(function (obj) {
                let i = self.productInfo.indexOf(obj);
                for (let key in obj) {
                    if (obj[key] == '') {
                        productsEmpty.push(i);
                        break;
                    }
                }
            });
            if (productsEmpty.length != 0) {
                this.hintShow = true;
                this.message = '请输入完整的产品信息'
                return false;
            }
            this.$httpPost('order', null, body, function (code, data) {
                if (code == 0) {
                    self.hintShow = true;
                    self.message = '下单成功'
                } else {
                    self.hintShow = true;
                    self.message = '下单失败'
                }
            });
        }
    },
    events: {
        // 货物信息
        'goods-table': function (data) {
            this.goodsTables = data;
        },
        // 产品信息
        'product-item': function (data) {
            this.productInfo = data;
        },
        // 订单信息
        'order-item': function (data) {
            this.orderInfo = data;
        },
        // 报关信息
        'customs-item': function (data) {
            this.customsInfo = data
        },
        // 商业发票
        'invoice-item': function (data) {
            this.invoiceInfo = data;
        },
        'submit-callback': function (message) {
            if (message == '下单成功' || message == '下单失败') {
                this.$router.go("/user_order#top");
            }
        },
        'cancel-callback': function (message) {
            if (message == '下单成功' || message == '下单失败') {
                this.$router.go("/user_order#top");
            }
        }
    }
};
