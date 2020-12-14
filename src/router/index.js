import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookApp from '../views/BookApp.vue'
import BookDetails from '../views/BookDetails.vue'
import BookAdd from '../views/BookAdd.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/book/add',
    component: BookAdd
  },
  {
    path: '/book/:id',
    component: BookDetails
  },
  {
    path: '/book',
    name: 'Books',
    component: BookApp
  },
]
// *********************************** //
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// *********************************** //


const router = new VueRouter({
  routes
})

export default router
