<template>

  <div >
    <div v-if="loadStatus">
      <NavBar/>
      <router-view></router-view>
    </div>
    <Loading v-if="!loadStatus"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Loading from './components/Loading.vue'

export default {
  name: 'App',
  data(){
    return{
      loadStatus:false
    }
  },
  components: {
    NavBar,
    Loading
  },
  created:function(){
    window.addEventListener('load', this.loaded);
  },
  methods:{
    loaded:function(){
      this.loadStatus=true
    }
  }
}
</script>

<style>

</style>
