// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import store from '@/store'

// vue-awesome
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

// vue-clipboard2
import VueClipboard from 'vue-clipboard2' 
Vue.use(VueClipboard)

// router
import App from '@/App'
import router from '@/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
