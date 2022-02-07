<template>
  <div class="top-margin">
      <div class="container">
          <router-link to="/" class="fa fa-arrow-left arrow-style"></router-link>
          <span class="search-item">{{searchItem}}</span>
          <div id="list">
            <div class="item" v-for="(item,index) in searchResults" :key="index">
                <img :src="item" height="auto" width="100%" class="style-image"/>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  computed: {
        searchItem () {
            if(this.$route.params.searchItem)
            {
                return this.$route.params.searchItem;
            }else{
                return localStorage.getItem("searchItem")
            }
        },
        searchResults(){
            return this.$store.state.searchResults
        }     
    },
  created:function(){
      console.log(this.$route.params.searchItem,"jj")
        if(this.$route.params.searchItem){
            localStorage.setItem("searchItem",this.$route.params.searchItem)
        }
        this.$store.dispatch('GET_SEARCHRESULTS',{searchItem:this.searchItem}).then(() => {
        
        })
        
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .arrow-style, .arrow-style:hover{
        color: #3F6775;
        font-size: 30px;
        cursor: pointer;
        text-decoration: none;
    }
    .top-margin{
        margin-top: 100px;
    }
    .search-item{
        margin-left:20px ;
        font-size: 35px;
        font-weight: 700;
        color: #3F6775;
    }
      #list {
          margin-top: 40px;
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
</style>
