require("../../style/inquiry.less");

module.exports = {
    template: require('./template.html'),
    data() {
        return {
            addGoodsPanel: false,
            goods: {
                "goodSKU":"",
                "ename":"",
                "unit":"",
                "netWeight":"",
                "customsUnit":"",
                "long":"",
                "high":"",
                "isTax":"",
                "drawbackName":"",
                "batteryGoodNo":"",
                "wide":"",
                "boxNumber":"",
                "grossWeight":"",
                "domesticUnit":"",
                "number":"",
                "cname":""
            },
            goodsItems: []
        }
    },
    ready() {

    },
    methods: {
        addGoods(){
            document.body.style.overflow = 'hidden';
            this.addGoodsPanel = true;
        },
        submit(){
            this.goodsItems.push(this.goods);
            this.$dispatch('goods-table', this.goodsItems);
            document.body.style.overflow = 'auto';
            this.addGoodsPanel = false;
        },
        cancel(){
            document.body.style.overflow = 'auto';
            this.addGoodsPanel = false;
        },
        removeGoods(index){
            this.goodsItems.splice(index, 1)
        }
    }
}