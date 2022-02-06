<template>
    <div class="container">
        <p class="meet-text">MEET OUR BUDDIES</p>
        <div id="list">
            <div class="item" v-for="(item,index) in dogImages" :key="index">
                <img :src="item" height="auto" width="100%" class="style-image"/>
            </div>
            <!-- <div class="col-md-4">
                <img src="../assets/logo.png" height="auto" width="100%" />
            </div>
            <div class="col-md-4">
                <img src="../assets/logo.png" height="auto" width="100%" />
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'DogImage',
  data(){
    return{	
		// dogImages:this.$store.state.dogImages
    }
  },
  computed: {
		dogImages () {
			return this.$store.state.dogImages;
		}      
	},
  created:function(){
    this.$store.dispatch('GET_IMAGES').then(() => {
		// ...
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #list {
    width: 100%;
    overflow: hidden;
    margin-bottom: -1.875em;
    -webkit-column-count: 3;
    -webkit-column-gap: 1.875em;
    -webkit-column-fill: auto;
    -moz-column-count: 3;
    -moz-column-gap: 1.875em;
    -moz-column-fill: auto;
    column-count: 3;
    column-gap: 1.875em;
    column-fill: auto;
    }
    .item {
        margin-bottom: 1.875em;
        -webkit-column-break-inside: avoid;
        -moz-column-break-inside: avoid;
        /* column-break-inside: avoid; */
    }
    .style-image{
        border-radius:40px;
    }
    .meet-text{
        color:#3F6775;
        font-weight:600;
        font-size:30px;
        text-align:center;
        margin-top:10%;
        margin-bottom:7%;
    }
</style>
