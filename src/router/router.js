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
      { path: 'blog', component: loadView("Blog") },
    ]
  },
  {
    path: '/',
    component: loadLayout("ProductLayout"),
    children: [
      { path: 'product', component: loadView("Product") },
      { path: 'privacy', component: loadView("Privacy") },
      { 
        path: 'account', 
        component: loadView("Account"),
        children:[
          {path: '', component: loadView("Account"),},
          {path: 'abonnement', component: loadView("AccountAbonnement"),},
        ]
      },
    ]
  }, 
  {
    path: '/singleblog',
    component: loadLayout("SingleBlogLayout"),
    children: [
      { path: '', component: loadView("SingleBlog") },
    ]
  }, 
]

const router = new VueRouter({
    routes,
    hasbang:false,
    mode:'history',
});
export default router