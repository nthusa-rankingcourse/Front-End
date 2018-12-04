import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Rank from '@/components/RankPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Rank',
      name: 'Rank',
      component: Rank
    }

  ]
})
