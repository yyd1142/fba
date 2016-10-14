"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import ruleComponent from '../components/serviceRule'
import goodsInfo from '../components/goodsInfo'
import productInfo from '../components/productInfo'
import customsInfo from '../components/customsInfo'
import invoiceInfo from '../components/invoiceInfo'
import placeOrder from '../components/placeOrder'
module.exports = {
    data() {
        return {
            resultPanle: false,
            rulePanle: false,
            switchButton: false,
            formData: JSON.parse(sessionStorage.getItem('inquiryFomrData'))
        }

    },
    components: {
        headerComponent,
        footerComponent,
        ruleComponent,
        goodsInfo,
        productInfo,
        customsInfo,
        invoiceInfo,
        placeOrder
    },
    ready() {
        
    },
    methods: {
        submit(){
            document.body.style.overflow = 'hidden';
            this.rulePanle = true;
        },
        price(){
            this.resultPanle = true;
            window.location.href = '/inquiry#resultPanle';
        }
    }
};
