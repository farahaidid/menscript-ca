import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const loadLayout = layout => () => import(`@/layouts/${layout}.vue`)
const loadView = view => () => import(`@/views/${view}.vue`)
const loadComponent = component => () => import(`@/components/${component}.vue`)


const routes = [
  {
    path: '/',
    component: loadLayout("DefaultLayout"),
    children: [
      { path: '', component: loadView("Home") },
      { path: 'category', component: loadView("Category") },
      { path: 'blog', component: loadView("Blog") },
      { path: 'Bestellingen', component: loadView("AccountBestellingen"),}, 
      // { path: 'account', component: loadView("AccountAbonnement"),},
      { path: 'privacy', component: loadView("Privacy") },
      { path: 'agreement', component: loadView("Agreement") },
      { 
        path: 'account', 
        component: loadView("Account"),
        children: [
          { path: '', component: loadComponent("account/Overview") },
          { path: 'treatment-plan', component: loadComponent("account/TreatmentPlan") },
          { path: 'invoice', component: loadComponent("account/Invoice") }
        ]
      },
    ]
  },
  {
    path: '/',
    component: loadLayout("ProductLayout"),
    children: [
      { path: 'product', component: loadView("Product") },
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