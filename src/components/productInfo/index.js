require("../../style/inquiry.less");
var mkoUpload = null;
var uploaderManager = new MKOUploaderManager();

module.exports = {
    template: require('./template.html'),
    data() {
        return {
            isUploading: false,
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
            defaultImage: '../../../assets/upload_photo.png'
        }
    },
    ready() {
        let self = this;
        this.$dispatch('product-item', this.productItems);
        uploaderManager.newUploader({
            button: "imgURLSelectFile0",
            container: "imgURLContainer0",
            context: 0,
            beforeCallback: function (context) {
                self.isUploading = true;
            },
            completedCallback: function (context, url) {
                self.isUploading = false;
                self.headURL = url;
            }
        });
    },
    methods: {
        addProduct(index) {
            let self = this;
            let params = {
                "productName": "",
                "productImage": "http://cn.vuejs.org/images/logo.png",
                "brand": "",
                "model": "",
                "principle": "",
                "power": "",
                "batteryModel": ""
            }
            let newIndex = index + 1;
            this.productItems.push(params);
            this.$nextTick(function () {
                uploaderManager.newUploader({
                    button: "imgURLSelectFile" + newIndex,
                    container: "imgURLContainer" + newIndex,
                    context: newIndex,
                    beforeCallback: function (context) {
                        self.isUploading = true;
                    },
                    completedCallback: function (context, url) {
                        for (var i = 0; i < self.productItems.length; i++) {
                            var products = self.productItems[i];
                            if (i == context) {
                                products.isUploading = false;
                                products.productImage = url;
                                break;
                            }
                        }
                    }
                });
            });
        },
        removeProduct(index) {
            this.productItems.splice(index, 1);
        }
    }
}