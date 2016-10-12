// header顶部导航
require("./style.less");
module.exports = {
    template: require('./template.html'),
    props: ['panleShow'],
    methods: {
        submit() {
            document.body.style.overflow = 'auto';
            this.panleShow = false;
        },
        close() {
            document.body.style.overflow = 'auto';
            this.panleShow = false;
        }
    }
}

