import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Profile from '../components/Profile.vue'
import About from '../components/About.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Profile/:id',
      name: 'Priofile',
      component: Profile,
    },
    {
      path: '/About/:id',
      name: 'About',
      component: About,
    },
  ],
});