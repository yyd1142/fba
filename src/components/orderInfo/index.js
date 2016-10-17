require("../../style/inquiry.less");

module.exports = {
    template: require('./template.html'),
    props: ['formData'],
    data() {
        return {
            order: {
                customerOrderID: '',
                FBAID: '',
                receiptAddress: '',
                countryID: this.formData.endAddress.address,
                postCode: '',
                totalNumber: '',
                isSensitive: '',
                desc: ''
            },
            destinationAddressItems: []
        }
    },
    ready() {
        this.contryList();
        this.$dispatch('order-item', this.order)
    },
    methods: {
        contryList() {
            let self = this;
            let params = {
                m: 'list',
                type: 2
            }
            this.$httpGet('order', params, function (code, data) {
                if (code == 0) {
                    self.destinationAddressItems = data.response;
                }
            });
        }
    }
}