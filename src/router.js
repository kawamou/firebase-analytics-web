import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/Top.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Top },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;