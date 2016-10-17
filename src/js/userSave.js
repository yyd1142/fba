"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import hintView from '../components/hintView'
import navigationBar from '../components/navigationBar'
import md5 from 'js-md5';
var userID = null;
var isClick = true;
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
        }
    },
    components: {
        headerComponent,
        footerComponent,
        navigationBar,
        hintView
    }
};
