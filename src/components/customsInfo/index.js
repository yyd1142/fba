require("../../style/inquiry.less");

module.exports = {
    template: require('./template.html'),
    props: ['formData'],
    data() {
        return {
            item: {
                invoice: "http://cn.vuejs.org/images/logo.png",
                packingBill: "http://cn.vuejs.org/images/logo.png",
                baoGuanBill: [{
                    url: 'http://cn.vuejs.org/images/logo.png'
                }]
            }
        }
    },
    ready(){
        this.$dispatch('customs-item', this.item);
    },
    methods: {
        addBaoGuan() {
            let params = {
                url: 'http://cn.vuejs.org/images/logo.png'
            }
            this.item.baoGuanBill.push(params);
        },
        removeBaoGuan(index) {
            this.item.baoGuanBill.splice(index, 1)
        }
    }
}