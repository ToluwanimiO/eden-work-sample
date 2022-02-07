<template>
    <div class="container">
        <p class="meet-text">MEET OUR BUDDIES</p>
        <div id="list">
            <div class="item" v-for="(item,index) in dogImages" :key="index">
                <img :src="item" height="auto" width="100%" class="style-image"/>
                <div class="info">
                  <p>{{item | retrieveBreed}}</p>
                  <button class="btn-more"><router-link :to="{ name: 'DogInfo', params: { url:item }}"  class="style-link">View more</router-link></button>
                  
                </div>
            </div>
        </div>
        <div class="text-center"><span class="fa fa-angle-down style-angle" @click="seeMore" ></span></div>
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
      console.log(this.$store.state.dogImages)
			return this.$store.state.dogImages;
		}      
	},
  created:function(){
    this.$store.dispatch('GET_IMAGES').then(() => {
      this.$store.dispatch('GET_IMAGES').then(() => {
		
      })
    })
  },
  methods:{
    seeMore:function()
    {
        this.$store.dispatch('GET_IMAGES').then(() => {
      
        })
    }
  },
  filters: {
    retrieveBreed: function (value) {
      value = value.substring(30)
      let slashPosition = value.indexOf("/") 
      value = value.substring(0,slashPosition)
      return value
    }
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
      position: relative;
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
    .style-angle{
      font-weight: 600;
      font-size:60px;
      margin: 20px 0px 0px 20px;
      color: #74929c;
      cursor: pointer;
    }
    .item:hover .style-image {
      -webkit-filter: brightness(50%);
      /* opacity: 0.6;
      background: rgba(0,0,0,.5); */
    }

    .item:hover .info {
      opacity: 1;
    }
    .info {
      color:white;
      font-size:25px;
      font-weight: 500;
      transition: .5s ease;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
    }
    .btn-more{
      font-size:18px;
      color:#3F6775;
      border-radius:25px;
      /* width:fit-content; */
      font-weight: 500;
      text-align:center;
      border:0px;
      outline:none;
      padding: 5px 15px 5px 15px;
    }
    .style-link,.style-link:hover{
      text-decoration: none;
      color:#3F6775;
      }
</style>
