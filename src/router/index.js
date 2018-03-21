import Vue from 'vue'
import Router from 'vue-router'
import ChecklistView from '@/container-components/ChecklistView'
import store from '@/store'
import {decodeStrings} from '@/util/item-encoding'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: ChecklistView,
    },
    {
      path: '/:items',
      name: 'add-items',
      component: ChecklistView,
      beforeEnter: (to, from, next) => {
        store.dispatch('importItems', {items: decodeStrings(to.params.items)})
        next('/')
      },
    },
  ]
})

export default router
