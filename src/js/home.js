"use strict"
import headerComponent from '../components/headerHome'
import footerComponent from '../components/footer'

var _isOriginatingAddressItems = [];
var _isDestinationAddressItems = [];
var _isOriginatingAddressItemsUpdate = true;
var _isDestinationAddressItemsUpdate = true;

module.exports = {
    data() {
        return {
            originatingAddressItems: [],
            destinationAddressItems: []
        }

    },
    components: {
        headerComponent,
        footerComponent
    },
    ready() {
        this.originatingAddressList();
        this.destinationAddressList();
    },
    methods: {
        originatingAddressList() {
            if (!_isOriginatingAddressItemsUpdate) {
                this.originatingAddressItems = _isOriginatingAddressItems;
                return false;
            }
            let self = this;
            let params = {
                m: 'list',
                type: 1
            }
            this.$httpGet('order', params, function (code, data) {
                if (code == 0) {
                    self.originatingAddressItems = data.response;
                    _isOriginatingAddressItems = data.response;
                    _isOriginatingAddressItemsUpdate = false;
                }
            });
        },
        destinationAddressList() {
            if (!_isDestinationAddressItemsUpdate) {
                this.destinationAddressItems = _isDestinationAddressItems;
                return false;
            }
            let self = this;
            let params = {
                m: 'list',
                type: 2
            }
            this.$httpGet('order', params, function (code, data) {
                if (code == 0) {
                    self.destinationAddressItems = data.response;
                    _isDestinationAddressItems = data.response;
                    _isDestinationAddressItemsUpdate = false;
                }
            });
        }
    }
};
