<template>
  <div >
    <NavBar/>
    <LandingPage />
    <DogImage />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LandingPage from './components/LandingPage.vue'
import DogImage from './components/DogImage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    LandingPage,
    DogImage
  }
}
</script>

<style>

</style>
