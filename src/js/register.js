"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import hintView from '../components/hintView'
import md5 from 'js-md5';

var isClick = true;

module.exports = {
    data() {
        return {
            item: { userName: '', password: '', comfirmPassword: '', mobile: '', email: '' },
            hintShow: false,
            message: '',
            errorCode: '',
            emptyItems: ''
        }

    },
    components: {
        headerComponent,
        footerComponent,
        hintView
    },
    ready() {

    },
    methods: {
        register() {
            let item = this.item;
            let itemArr = [];
            for (let key in item) {
                if (item[key] == '' || item[key] == null) {
                    itemArr.push(key);
                }
            }
            this.emptyItems = itemArr;
            if (itemArr.length != 0) {
                return false;
            }
            if (!isClick) {
                return false;
            }
            isClick = false;
            let self = this;
            let body = {
                m: "reg",
                mobile: item.mobile,
                userName: item.userName,
                email: item.email,
                password: md5(item.password)
            };
            this.$httpPost('user', null, body, function (code, data) {
                if (code == 0) {
                    document.body.style.overflow = 'hidden';
                    self.errorCode = code;
                    self.hintShow = true;
                } else {
                    document.body.style.overflow = 'hidden';
                    self.errorCode = code;
                    self.hintShow = true;
                }
                isClick = true;
            });
        }
    }
};
