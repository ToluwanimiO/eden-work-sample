import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/store.js';

Vue.use( Vuex/* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,  
  store,
  render: h => h(App),
}).$mount('#app')
