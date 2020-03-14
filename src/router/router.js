import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const loadLayout = layout => () => import(`@/layouts/${layout}.vue`)
const loadView = view => () => import(`@/views/${view}.vue`)
// const loadComponent = component => () => import(`@/components/${component}.vue`)


const routes = [
  {
    path: '/',
    component: loadLayout("DefaultLayout"),
    children: [
      { path: '', component: loadView("Home") },
      { path: 'category', component: loadView("Category") },
    ]
  },
  {
    path: '/product',
    component: loadLayout("ProductLayout"),
    children: [
      { path: '', component: loadView("Product") },
    ]
  }, 
]


const router = new VueRouter({
    routes,
    mode:'history',
});
export default router