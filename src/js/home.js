"use strict"
import headerComponent from '../components/headerHome'
import footerComponent from '../components/footer'

module.exports = {
    data() {
        return {
            originatingAddress: '',
            destinationAddress: ''
        }

    },
    components: {
        headerComponent,
        footerComponent
    },
    ready() {
        
    },
    methods: {
        originatingAddressList(){
            this.originatingAddress = this.originatingAddress ? false : true;
        },
        destinationAddressList(){
            this.destinationAddress = this.destinationAddress ? false : true;
        }
    }
};
