"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import hintView from '../components/hintView'
import navigationBar from '../components/navigationBar'

import md5 from 'js-md5';
var isClick = true;
var userID = null;
module.exports = {
    data() {
        return {
            pathName: '/user_order',
            orderItems: []
        }

    },
    ready() {
        if (localStorage.getItem('userInfo')) {
            userID = JSON.parse(localStorage.getItem('userInfo')).response.user.id;
        }
        this.orderList();
    },
    methods: {
        orderList() {
            let self = this;
            let params = {
                m: 'order',
                action: 'list',
                userID: userID
            };
            this.$httpGet('vip', params, function (code, data) {
                if (code == 0) {
                    self.orderItems = data.response;
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
