"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import hintView from '../components/hintView'
import navigationBar from '../components/navigationBar'
import md5 from 'js-md5';
var userID = null;
var isClick = true;
var isUserItem = {};
var isUserItemUpdate = true;
module.exports = {
    data() {
        return {
            pathName: '/user_info',
            hintShow: false,
            message: '',
            userItem: {
                "id": '',
                "userName":"",
                "email":"",
                "mobile":"",
                "company":"",
                "phone":"",
                "headURL":"",
                "postcode":"",
                "salesmanID":'',
                "salesman":{},
                "address":""},
            countryID: '',
            provinceID: '',
            cityID: '',
            townID: '',
            countries: [],
            provinces: [],
            cities: [],
            towns: [],
            streets: []
        }
    },
    ready() {
        if (localStorage.getItem('userInfo')) {
            userID = JSON.parse(localStorage.getItem('userInfo')).response.user.id;
        }
        this.userInfo();
        this.countryList();
    },
    methods: {
        userInfo() {
            if(!isUserItemUpdate){
                this.userItem = isUserItem;
                return false;
            }
            isUserItemUpdate = false;
            let self = this;
            let params = {
                m: 'info',
                userID: userID
            };
            this.$httpGet('user', params, function (code, data) {
                if (code == 0) {
                    self.userItem = data.response;
                    isUserItem = data.response;
                    isUserItemUpdate = false;
                } else {

                }
            });
        },
        editInfo() {
            console.log(JSON.stringify(this.userItem))
            let self = this;
            let params = this.userItem;
            params['m'] = 'update';
            this.$httpGet('user', params, function (code, data) {
                if (code == 0) {
                    isUserItemUpdate = true;
                    self.userInfo();
                    self.hintShow = true;
                    self.message = '修改成功'
                } else {

                }
            });
        },
        countryList() {
            let self = this;
            let params = {
                m: 'country'
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.countries = data.response;
                }
            });
        },
        provinceList() {
            this.provinceID = '';
            this.cityID = '';
            this.townID = '';
            let self = this;
            let params = {
                m: 'province',
                countryID: this.countryID
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.provinces = data.response;
                }
            });
        },
        cityList() {
            this.cityID = '';
            this.townID = '';
            let self = this;
            let params = {
                m: 'city',
                provinceID: this.provinceID
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.cities = data.response;
                }
            });
        },
        townList() {
            this.townID = '';
            let self = this;
            let params = {
                m: 'town',
                cityID: this.cityID
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.towns = data.response;
                }
            });
        },
        streetList() {
            let self = this;
            let params = {
                m: 'street',
                townID: this.townID
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.streets = data.response;
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
