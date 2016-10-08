// header顶部导航
require("./style.less");
module.exports = {
    template: require('./template.html'),
    props: ['code', 'panleShow', 'message'],
    methods: {
        submit() {
            document.body.style.overflow = 'auto';
            this.panleShow = false;
        },
        cancel() {
            document.body.style.overflow = 'auto';
            this.panleShow = false;
        }
    }
}

