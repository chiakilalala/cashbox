import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/login',
  name: 'Login',

  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Login.vue')
},
{
  path: '/withdraw',
  name: 'Withdraw',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Withdraw.vue')
},
{
  path: '/finish',
  name: 'Finish',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Finish.vue')
},
{
  path: '/Deposit',
  name: 'Deposit',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Deposit.vue')
},
{
  path: '/costomer',
  name: 'Costomer',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Costomer.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
