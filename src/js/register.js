"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import hintView from '../components/hintView'
import md5 from 'js-md5';

var isClick = true;

module.exports = {
    data() {
        return {
            item: {},
            hintShow: false,
            message: '',
            errorCode: '',
            validationCode: ''
        }

    },
    components: {
        headerComponent,
        footerComponent,
        hintView
    },
    ready(){
        
    },
    methods: {
        register() {
            let item = this.item;
            if(!isClick){
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
                 if(code == 0){
                     document.body.style.overflow = 'hidden';
                     self.errorCode = code;
                     self.hintShow = true;
                 }else{
                     document.body.style.overflow = 'hidden';
                     self.errorCode = code;
                     self.hintShow = true;
                 }
                 isClick = true;
            });
        }
    }
};
