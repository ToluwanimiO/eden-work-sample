import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/store.js';

Vue.use( Vuex/* { default global options } */)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
