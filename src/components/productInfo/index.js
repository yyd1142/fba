require("../../style/inquiry.less");
var mkoUpload = null;
var uploaderManager = new MKOUploaderManager();

module.exports = {
    template: require('./template.html'),
    data() {
        return {
            isUploading: '',
            headURL: '',
            productItems: [{
                "productName": "",
                "productImage": "http://cn.vuejs.org/images/logo.png",
                "brand": "",
                "model": "",
                "principle": "",
                "power": "",
                "batteryModel": ""
            }],
            dedaultImage: '../../../assets/upload_photo.png'
        }
    },
    ready() {
        var self = this;
        uploaderManager.newUploader({
            button: "imgURLSelectFile",
            container: "imgURLContainer",
            progressBar: "imgURLProgress",
            label: "imgURLSelectFile",
            context: 0,
            beforeCallback: function (context) {
                self.isUploading = true;
            },
            completedCallback: function (context, url) {
                self.isUploading = false;
                self.headURL = url;
            }
        });
        this.$dispatch('product-item', this.productItems);
    },
    methods: {
        addProduct() {
            let params = {
                "productName": "",
                "productImage": "http://cn.vuejs.org/images/logo.png",
                "brand": "",
                "model": "",
                "principle": "",
                "power": "",
                "batteryModel": ""
            }
            this.productItems.push(params);
        },
        removeProduct(index){
            this.productItems.splice(index, 1);
        }
    }
}