// 导航
var tabItems = [{ name: '用户信息', className: 'nav-active', url: '/user_info' },
    { name: '报价存档', className: '', url: '/user_save' },
    { name: '我的委托', className: '', url: '/user_order' },
    { name: '费用结算', className: '', url: '/user_pay' },
    { name: '常用地址', className: '', url: '/user_address' },
    { name: '系统消息', className: '', url: '/user_messagel' }];

require("./style.less");
module.exports = {
    template: require('./template.html'),
    props: ['path'],
    data() {
        return {
            tabItems: tabItems
        }
    },
    ready() {
        let self = this;
        this.tabItems.forEach(function (item) {
            if (self.path == item.url) {
                item.className = 'nav-active';
            } else {
                item.className = '';
            }
        });
    },
    methods: {
        submit() {
            document.body.style.overflow = 'auto';
            this.$router.go('/place_order#top');
        },
        close() {
            document.body.style.overflow = 'auto';
            this.panleShow = false;
        }
    }
}