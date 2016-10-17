require("../../style/inquiry.less");

module.exports = {
    template: require('./template.html'),
    data() {
        return {
            invoice: {
                deliveryTime: '',
                contact: '',
                deliveryContact: '',
                total: '',
                pieces: '',
                totalNumber: '',
                autograph: '',
                descGoods: [{
                    desc: '',
                    tariffNumber: '',
                    goodsNumber: '',
                    unitPrice: '',
                    totalPrice: ''
                }]
            }
        }
    },
    ready() {
        this.$dispatch('invoice-item', this.invoice)
    },
    methods: {
        // 添加货物信息
        addGoodsDesc() {
            this.invoice.descGoods.push({
                desc: '',
                tariffNumber: '',
                goodsNumber: '',
                unitPrice: '',
                totalPrice: ''
            });
        },
        // 删除货物信息
        removeGoodsDesc: function (index) {
            this.invoice.descGoods.splice(index, 1)
        }
    },
    filters: {
        'pluckSum': function (list, key1, key2) {
            return list.reduce(function (total, item) {
                return total + item[key1] * item[key2]
            }, 0)
        },
        'quantitySum': function (list) {
            return list.reduce(function (total, item) {
                return total + item.goodsNumber
            }, 0)
        }
    }
}