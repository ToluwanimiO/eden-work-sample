<template>
  <div >
    <LandingPage />
    <DogImage />
  </div>
</template>

<script>
import LandingPage from './LandingPage.vue'
import DogImage from './DogImage.vue'

export default {
  name: 'Home',
  components: {
    LandingPage,
    DogImage
  }
}
</script>

<style>

</style>
