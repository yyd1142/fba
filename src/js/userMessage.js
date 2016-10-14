"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import hintView from '../components/hintView'
import navigationBar from '../components/navigationBar'

import md5 from 'js-md5';
var isClick = true;
module.exports = {
    data() {
        return {
            pathName: '/user_message'
        }

    },
    methods: {

    },
    components: {
        headerComponent,
        footerComponent,
        navigationBar,
        hintView
    }
};
