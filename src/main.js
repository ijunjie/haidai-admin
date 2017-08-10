// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Row from './plugins/row/index'
import Col from './plugins/col/index'
import Dialog from './plugins/dialog/index'
import CollapseItem from './plugins/collapse-item/index'

Vue.config.productionTip = false
Vue.use(Row)
Vue.use(Col)
Vue.use(Dialog)
Vue.use(CollapseItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
