/**
 * Created by YYD on 4/15/16.
 */
"use strict"
var Vue = require('vue');
var VueResource = require('vue-resource');
Vue.use(VueResource);
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
; (function () {
    var vue; // lazy bind
    var baseURL = null;
    var _debug = getCookie('DEBUG');
    if (_debug == 'true') {
        baseURL = 'http://10.0.1.15:3001/';
    } else {
        baseURL = 'http://api.activity.yiqiyuedu.cn/';
    }

    var asyncData = {
        created: function () {
            if (!vue) {
                console.warn('[vue-async-data] not installed!');
                return;
            }
        },
        compiled: function () {

        },
        methods: {
            $httpGet: function (service, params, cb) {
                // GET request
                cb = cb || function(){};
                var queryArray = new Array();
                for (var key in params)
                    queryArray.push(key + "=" + params[key]);
                var queryString = queryArray.join("&");
                var queryURL = baseURL + service + '?' + queryString;
                console.log(queryURL);
                this.$http.get(queryURL, {}).then((response) => {
                    var data = response.data;
                    if (data.code == 0) {
                        cb(0, data);
                    } else {
                        cb(data.code, {});
                    }
                    // success callback
                }, (response) => {
                    cb(-1, {});// error callback
                });
            },
            $httpPost: function (service, params, postBody, cb) {
                // POST request
                var queryArray = new Array();
                for (var key in params)
                    queryArray.push(key + "=" + params[key]);
                var queryString = queryArray.join("&");
                var queryURL = baseURL + service + '?' + queryString;
                this.$http.post(queryURL, postBody).then((response) => {
                    // success callback
                    var data = response.data;
                    if (data.code == 0) {
                        cb(0, data);
                    } else {
                        cb(data.code, {});
                    }
                }, (response) => {
                    cb(-1, {});// error callback
                });
            }
        }
    };

    var api = {
        mixin: asyncData,
        install: function (Vue, options) {
            vue = Vue;
            Vue.options = Vue.util.mergeOptions(Vue.options, asyncData);
            Vue.http.options.credentials = true;
        }
    }

    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = api
    } else if (typeof window !== 'undefined') {
        window.MyVueAsyncData = api
        Vue.use(api);
    }
})();