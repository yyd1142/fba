"use strict"
import headerComponent from '../components/headerHome'
import footerComponent from '../components/footer'

module.exports = {
    data() {
        return {
            originatingAddress: false,
            destinationAddress: false
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
            // console.log(this.originatingAddress);
            this.originatingAddress = this.originatingAddress ? false : true;
        },
        destinationAddressList(){
            // console.log(this.destinationAddress);
            this.destinationAddress = this.destinationAddress ? false : true;
        }
    }
};
