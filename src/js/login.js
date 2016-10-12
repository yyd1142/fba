"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import hintView from '../components/hintView'
import md5 from 'js-md5';

var isClick = true;
module.exports = {
    data() {
        return {
            item: { password: '', email: '' },
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
        login() {
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
            let params = {
                m: "login",
                email: item.email,
                password: md5(item.password)
            };
            this.$httpGet('user', params, function (code, data) {
                if (code == 0) {
                    self.$router.go('#top');
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
