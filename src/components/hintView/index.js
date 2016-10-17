// header顶部导航
require("./style.less");
module.exports = {
    template: require('./template.html'),
    props: ['code', 'panleShow', 'message'],
    methods: {
        submit() {
            this.$dispatch('submit-callback', this.message);
            document.body.style.overflow = 'auto';
            this.panleShow = false;
        },
        cancel() {
            this.$dispatch('cancel-callback', this.message);
            document.body.style.overflow = 'auto';
            this.panleShow = false;
        }
    }
}

