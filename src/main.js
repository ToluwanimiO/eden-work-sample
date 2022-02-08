import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/store.js';
import VueLazyload from 'vue-lazyload'

Vue.use( Vuex,VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})

Vue.config.productionTip = false

new Vue({
  router,  
  store,
  render: h => h(App),
}).$mount('#app')
