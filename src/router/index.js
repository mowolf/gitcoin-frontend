import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Node from '../views/Node.vue'
import Wallet from '../views/Wallet.vue'
import Send from '../views/Send.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/node/:node',
    name: 'node',
    component: Node
  },
  {
    path: '/node/:node/wallet/:wallet',
    name: 'wallet',
    component: Wallet
  },
  {
    path: '/node/:node/send',
    name: 'send',
    component: Send
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
