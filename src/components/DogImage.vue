<template>
    <div class="container">
        <p class="meet-text">MEET OUR BUDDIES</p>
        <div id="list">
            <span class="item" v-for="(item,index) in dogImages" :key="index">
              <!-- <img src="../assets/logo.png" /> -->
                <img :src="item" height="auto" width="200px" class=" d-none d-md-block style-image"/>
                <img :src="item" height="auto" width="150px" class="style-image d-block d-md-none"/>
                <div class="info">
                  <p>{{item | retrieveBreed}}</p>
                  <button class="btn-more"><router-link :to="{ name: 'DogInfo', params: { url:item }}"  class="style-link">View more</router-link></button>
                  
                </div>
            </span>
        </div>
        <div class="text-center"><span class="fa fa-angle-down style-angle" @click="seeMore" ></span></div>
    </div>
</template>

<script>
import Masonry from 'masonry-layout';
export default {
  name: 'DogImage',
  data(){
    return{	
		// dogImages:this.$store.state.dogImages
    }
  },
  computed: {
		dogImages () {
      // console.log(this.$store.state.dogImages)
			return this.$store.state.dogImages;
		}      
	},
  mounted:function(){
    var elem = this.$el.querySelector('#list');
    var msnry = new Masonry( elem, {
      // options
      itemSelector: '.item',
      gutter:20,
      // columnWidth: 350
    });
    console.log(msnry)
  },
  created:function(){
    this.$store.dispatch('GET_IMAGES').then(() => {
      this.$store.dispatch('GET_IMAGES',"complete").then(() => {
		
      })
    })
  },
  methods:{
    seeMore:function()
    {
        this.$store.dispatch('GET_IMAGES',"more").then(() => {
      
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


    .item {
      position: relative;
        margin-bottom: 1em;
    }
    .style-image{
        border-radius:20px;
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
      font-size:15px;
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
      font-size:13px;
      color:#3F6775;
      border-radius:15px;
      /* width:fit-content; */
      font-weight: 500;
      text-align:center;
      border:0px;
      outline:none;
      padding: 1px 5px 1px 5px;
    }
    .style-link,.style-link:hover{
      text-decoration: none;
      color:#3F6775;
      }
      @media (min-width:788px) {
        .btn-more{
      border-radius:25px;
      /* width:fit-content; */
      padding: 5px 15px 5px 15px;
    }
        .info{
          font-size: 25px;
        }

    /* .item {
      position: relative;
        margin-bottom: 1em;
    } */
    .style-image{
      /* padding: 1em; */
        border-radius:30px;
    }
}

</style>
