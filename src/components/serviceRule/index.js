// header顶部导航
require("./style.less");
module.exports = {
    template: require('./template.html'),
    props: ['panleShow'],
    data(){
        return {
           
        }
    },
    methods: {
        submit(){
            document.body.style.overflow = 'auto';
            this.$router.go('/place_order#top');
        },
        close(){
            document.body.style.overflow = 'auto';
            this.panleShow = false;
        }
    }
}