import Vue from 'vue'
import VueRouter from 'vue-router'
import vueService from './serivce'
import vueFilter from './filter'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(vueService)


var router = new VueRouter({
  history: true
})

router.map({
  '/': {
    component: require('./views/home.vue'),
    name: 'home'
  },
  '/login': {
    component: require('./views/login.vue'),
    name: 'login'
  },
  '/register': {
    component: require('./views/register.vue'),
    name: 'register'
  },
  '/inquiry': {
    component: require('./views/inquiry.vue'),
    name: 'inquiry'
  },
  '/place_order': {
    component: require('./views/placeOrder.vue'),
    name: 'placeOrder'
  },
  '/user_info': {
    component: require('./views/userInfo.vue'),
    name: 'user'
  },
  '/user_save': {
    component: require('./views/userSave.vue'),
    name: 'user'
  },
  '/user_order': {
    component: require('./views/userOrder.vue'),
    name: 'user'
  },
  '/user_pay': {
    component: require('./views/userPay.vue'),
    name: 'user'
  },
  '/user_address': {
    component: require('./views/userAddress.vue'),
    name: 'user'
  },
  '/user_message': {
    component: require('./views/userMessage.vue'),
    name: 'user'
  }
});

router.start(App, '#app');
