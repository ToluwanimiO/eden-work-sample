<template>
    <!-- <div class="nav-bar"> -->
        <nav class="navbar navbar-expand-lg  fixed-top nav-bar ">
            <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarForPets" aria-controls="navbarForPets" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarForPets">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item ">
                        <a class="nav-link" href="#">FOOD </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ABOUT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">BREEDS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">CONTACT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">ASK A VET</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#"><input type="text" class="nav-search" placeholder="SEARCH "/></a>
                    </li>
                </ul>
            </div>
        </nav>
    <!-- </div> -->
    
</template>

<script>
export default {
  name: 'NavBar',
//   props: {
//     msg: String
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar{
    background: rgba(0,0,0,0.36);
    position:fixed;
    color:white
}
.nav-bar a{
    color:white;
    text-decoration: none;
    font-weight:500;
    font-size:20px;
    opacity:1;
}
.nav-search, .nav-search:focus{
    /* margin-top:8%; */
    font-size:20px;
    color:#3F6775;
    border-radius:25px;
    width:fit-content;
    font-weight: 500;
    text-align:center;
    border:0px;
    outline:none;
    /* padding-left:50px;
    padding-right:50px; */
}

</style>
