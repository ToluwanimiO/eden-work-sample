<template>
  <div class="top-margin">
      <div class="container">
          <router-link to="/" class="fa fa-arrow-left arrow-style"></router-link>
          <div class="flex-container">
                <img :src="imageUrl" class="style-image"/>
              <div class="col-md-4 ml-3 general-text">
                  <p class="heading mb-3">Meet Alvin</p>
                  <div class="heading-text">ALVIN'S BIO</div>
                  <div><span class="deepen">Breed:</span> {{imageUrl | retrieveBreed}}</div>
                  <div><span class="deepen">Sex: </span>Female</div>
                  <div><span class="deepen">Age:</span> Young</div>
                  <div><span class="deepen">Weight:</span> 30kg</div>
                  <div class="heading-text">ALVIN'S STORY</div>
                  <div style="line-height:1.4em">She was found under Yaba bridge in 2019 and we have been together ever since then.
                      She needs to find a buddy, can it be you?
                  </div>               
                <div class="text-center mt-4"><button class="btn-buddy">Let's be buddies</button>  </div>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
  name: 'DogInfo',
  data(){
    return{
		// imageUrl:this.$route.params.url
    }
  },
  computed: {
        imageUrl () {
            if(this.$route.params.url)
            {
                return this.$route.params.url;
            }else{
                return localStorage.getItem("url")
            }
        }      
    },
  created:function(){
      console.log(this.$route.params.url,"jj")
        if(this.$route.params.url){
            localStorage.setItem("url",this.$route.params.url)
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
    .top-margin{
        margin-top: 70px;
    }
    .style-image{
        border-radius: 40px;
        
    }
    .heading
    {
        color:#3F6775;
        font-size:30px;
        font-weight: 500;
    }
    .heading-text{
        color:#3F6775;
        font-size:20px;
        font-weight: 500;

    }
    .general-text{
        color:#73797B;
        font-weight:400;
        font-size:18px;
        line-height: 2em;
    }
    .deepen{
        font-weight:500 ;
    }
    .btn-buddy{
    /* margin-top:8%; */
    font-size:20px;
    color:white;
    border-radius:25px;
    background-color: #E19F0D;
    /* width:100%; */
    font-weight: 500;
    padding: 7px 22px 7px 22px;
    border:none;
    /* padding-left:50px;
    padding-right:50px; */
    }
    .arrow-style, .arrow-style:hover{
        color: #3F6775;
        font-size: 30px;
        cursor: pointer;
        text-decoration: none;;
    }
    
  .flex-container
  {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
