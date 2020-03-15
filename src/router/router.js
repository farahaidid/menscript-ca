import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../views/Home.vue'
import appHeader from '../components/AppHeader.vue'
import appFooter from '../components/AppFooter.vue'
import Category from '../views/Category.vue';
import Product from '../views/Product.vue';
import blog from '../views/Blog.vue';
// import appContent from '../components/appContent.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/menu', component: appHeader },
    { path: '/category', component: Category },
    { path: '/product', component: Product },
    { path: '/footer', component: appFooter },
    { path: '/blog', component: blog },
    // { path: '/', component: appContent },
     
  ]


const router = new VueRouter({
    routes,
    mode:'history',
});
export default router