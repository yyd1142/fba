"use strict"
import headerComponent from '../components/header'
import footerComponent from '../components/footer'
import ruleComponent from '../components/serviceRule'

module.exports = {
    data() {
        return {
            resultPanle: false,
            rulePanle: false,
            switchButton: false
        }

    },
    components: {
        headerComponent,
        footerComponent,
        ruleComponent
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
