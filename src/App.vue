<template>
  <div >
    <NavBar/>
    <LandingPage />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    LandingPage,
  }
}
</script>

<style>

</style>
