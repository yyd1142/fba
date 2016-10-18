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
                "userName": "",
                "email": "",
                "mobile": "",
                "company": "",
                "phone": "",
                "headURL": "",
                "postcode": "",
                "salesmanID": '',
                "addressID": '',
                "countryID": '',
                "provinceID": '',
                "cityID": '',
                "townID": '',
                "streetID": '',
                "specificAddress": "",
                "salesman": {}
            },
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
            if (!isUserItemUpdate) {
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
                    console.log(self.userItem);
                    if (self.userItem.addressID != null) {
                        self.provinceList();
                        self.cityList();
                        self.townList();
                        self.streetList();
                    }
                    isUserItem = data.response;
                    isUserItemUpdate = false;
                } else {

                }
            });
        },
        editInfo() {
            let self = this;
            let body = this.userItem;
            body['m'] = 'update';
            body['address'] = {
                "countryID": this.userItem.countryID,
                "provinceID": this.userItem.provinceID,
                "cityID": this.userItem.cityID,
                "townID": this.userItem.townID,
                "streetID": this.userItem.streetID,
                "specificAddress": this.userItem.specificAddress
            };
            this.$httpPost('user', null, body, function (code, data) {
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
        provinceList(type) {
            if (type == 1) {
                this.userItem.provinceID = '';
                this.userItem.cityID = '';
                this.userItem.townID = '';
                this.userItem.streetID = '';
            }
            let self = this;
            let params = {
                m: 'province',
                countryID: this.userItem.countryID
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.provinces = data.response;
                }
            });
        },
        cityList(type) {
            if (type == 1) {
                this.userItem.cityID = '';
                this.userItem.townID = '';
                this.userItem.streetID = '';
            }
            let self = this;
            let params = {
                m: 'city',
                provinceID: this.userItem.provinceID
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.cities = data.response;
                }
            });
        },
        townList(type) {
            if (type == 1) {
                this.userItem.townID = '';
                this.userItem.streetID = '';
            }
            let self = this;
            let params = {
                m: 'town',
                cityID: this.userItem.cityID
            };
            this.$httpGet('address', params, function (code, data) {
                if (code == 0) {
                    self.towns = data.response;
                }
            });
        },
        streetList(type) {
            if(type == 1){
                this.userItem.streetID = '';
            }
            let self = this;
            let params = {
                m: 'street',
                townID: this.userItem.townID
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
