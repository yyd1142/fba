import Vue from 'vue';
import moment from 'moment';

Vue.filter('headURLFilter', function (url) {
    if (url == null || url == '') {
        return '/assets/image-square.png';
    } else {
        return url;
    }
});

Vue.filter('dateFormatFilter', function (date) {
    if (date == null || date === undefined) {
        return '- -'
    } else {
        return moment(new Date(date)).format("YYYY-MM-DD");
    }
});

Vue.filter('typeFilter', function (type) {
    if (type == 1) {
        return '（微信课堂）';
    } else if (type == 2 || type == 3) {
        return '（视频讲座）';
    } else if (type == 4) {
        return '（线下活动）';
    }
});

Vue.filter('statusClass', function (status) {
    if (status == 1) {
        return '80px';
    } else {
        return '46px';
    }
});

Vue.filter('actDescFilter', function (desc) {
    if (desc.length > 100) {
        return desc.substring(0, 100) + '...';
    } else {
        return desc;
    }
});
