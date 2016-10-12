"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import payView from '../components/payView'
import navigationBar from '../components/navigationBar'

import md5 from 'js-md5';
var isClick = true;
module.exports = {
    data() {
        return {
            pathName: '/user_pay',
            payPanle: false
        }

    },
    methods: {
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
    }
};
