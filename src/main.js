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
  }
});

router.start(App, '#app');
