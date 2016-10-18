"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import payView from '../components/payView'
import navigationBar from '../components/navigationBar'

import md5 from 'js-md5';
var isClick = true;
var userID = null;
module.exports = {
    data() {
        return {
            pathName: '/user_pay',
            payPanle: false,
            userPayItems: []
        }

    },
    ready(){
        if (localStorage.getItem('userInfo')) {
            userID = JSON.parse(localStorage.getItem('userInfo')).response.user.id;
        }
        this.userPayList()
    },
    methods: {
        userPayList() {
            let self = this;
            let params = {
                m: 'cost',
                userID: userID
            };
            this.$httpGet('vip', params, function (code, data) {
                if (code == 0) {
                    self.userPayItems = data.response;
                } else {

                }
            })
        },
        pay() {
            document.body.style.overflow = 'hidden';
            this.payPanle = true;
        }
    },
    components: {
        headerComponent,
        footerComponent,
        navigationBar,
        payView
    },
    filters: {
        'FBAIDFilter': function(id){
            if(id == null || id == ''){
                return 'FBA'
            }else{
                return id;
            }
        }
    }
};
