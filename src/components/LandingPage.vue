<template>
    <div class="backdrop">
        <div class="col-md-7 padLeft">
            <h1 class="text1">
                A dog is a man's bestfriend, let's help you find yours!
            </h1>
        </div>
        <div class="col-md-6 padLeft ">
            <p class="text2">
                We can help find your future best buddie by breed.
            </p>
        </div>
        <div class="col-md-3 padLeft">
            <select class="form-control styled-select" v-model="selected">
                <option value="" selected disabled>-- Select a breed --</option>
                <option v-for="(item,index) in breeds" :key="index">{{index}}</option>
            </select><br/>
            <button class="btn btn-search ">
                <router-link :to="{ name: 'Search', params: { searchItem:selected }}"  class="style-link">SEARCH</router-link>
            </button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'LandingPage',
    data(){
    return{	
		selected:''
    }
  },
    computed: {
		breeds () {
            // console.log(this.$store.state.breeds)
			return this.$store.state.breeds;
		}      
	},
    created:function(){
        this.$store.dispatch('GET_BREEDS').then(() => {
        
        })
        // console.log(this.$store.state.breeds)
    },
    // methods:{
    //     searchBreed:function(){
    //         alert(this.selected)
    //     }
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .text1{
        color:white;
        font-size:50px;
        padding-top:40%;
        font-weight:600;
    }
    .backdrop{
        background-color: #0A8BB2;
        height:100vh;
    }
@media (min-width:788px) {
    
    .text1{
        color:white;
        font-size:60px;
        padding-top:25%;
        font-weight:600;
    }
    .backdrop{
        background-image:url("../assets/backdrop.jpg");
        height:100vh;
        background-position:top center;
        background-size:cover;
        /* background-attachment:fixed; */
        background-repeat: no-repeat;
    }
    .text2{
    padding:3% 0px 2%;
    font-weight: 600;
    font-size:20px;
    color:#3F6775
}
}
.padLeft{
    padding-left:6%
}
.text2{
    padding:3% 0px 2%;
    font-weight: 600;
    font-size:20px;
    color:#12323d
}
.btn-search{
    /* margin-top:8%; */
    font-size:20px;
    color:white;
    border-radius:25px;
    background-color: #D90368;
    width:100%;
    font-weight: 500;
    /* padding-left:50px;
    padding-right:50px; */
}
.styled-select{
    /* width:fit-content; */
    border-radius:0%;
    font-size:20px;
    color:#3F6775;
    /* changing select arrow */
}
.style-link,.style-link:hover{
      text-decoration: none;
      color:white;
      }
</style>
