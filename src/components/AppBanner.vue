<template>
<div>
     <div class="container-fluid width padding">
      <!-- banner-section -->
      
      <div class="row">
        <div class="col-md-12 padding">
          <div class="banner position-relative">
            <p class="scroll">scroll</p>
            <img src="../assets/img/banner.jpg" alt class="banner-img" />

            <div class="banner-text">

              <h1 class="banner-title">{{ data.title }}</h1>
              <p class="w-50 text-justify text-mb banner-p">
                {{ data.subtitle }}
              </p>
              <p class="w-50 text-justify text-mb banner-p subtitle2" v-if=" data.subtitle2 == data.subtitle2">
                {{ data.subtitle2 }}
              </p>

              <button class="btn custom-btn btn-sm consult-btn" v-if="data.button == true">
                Start online consult
              </button>

             
            </div>
          </div>
        </div>
      </div>

     <div class="row text-center w-75 logo-div mx-auto" v-if="data.logo !== false">
        <div class="col-md-4 col-sm-4">
          <img src="@/assets/img/logo1.png" alt="" class="del logo" />
        </div>
        <div class="col-md-4 col-sm-4">
          <img src="@/assets/img/bbc.png" alt="bbc" class="bbc logo" />
        </div>
        <div class="col-md-4 col-sm-4">
          <img src="@/assets/img/nos.png" alt="" class="nos logo" />
        </div>
      </div>
     </div>
</div>
  
</template>
<script>
export default {
   props: {
    data: {
      type: Object,
      default() {
        return {
          
        };
      }
    }
  },
  created(){
    console.log("data home",this.data);
  }
  
}
</script>


<style scoped>


.banner-img {
    /* width: 95%; */
    max-height: 890px;
    /* margin-left: 5%; */
    padding-left: 63px;
}
.banner-text {
    position: absolute;
    top: 18%;
    left: 11%;
   
}
.scroll {
  position: absolute;
  left: -34px;
  bottom: 4em;
  font-family: Montserrat;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  font-size: 48px;
}
.scroll::before {
  content: "";
  border: 1px solid #252525;
  top: 0.7em;
  position: absolute;
  left: 3em;
  width: 41px;
}
.padding {
  padding-right: 0px;
  overflow: hidden !important;
  margin-top: 28px;
}
.banner-title {
  font-size: 96px;
}
.banner-p{
  font-size: 24px;
 
}
.subtitle2{
  font-family: Avenir Heavy;
}
.custom-btn {
  background-color: black;
  color: #ffffff;
  width: 372px;
  height: 62px;
  font-size: 16px;
 
}
.logo {
    width: 130px;
    height: 33px;
}
.logo-div {
    padding: 35px 3px;
}

/* Small devices */
@media screen and (max-width: 640px) {
  .banner {
    height: 14em;
    margin-left: 0px;
  }
  .banner-img{
    padding-left: 16px;
}
  .banner-text {
    top: 17px;
    left: 8%;
   
  }
  p {
    font-size: 12px;
  }
  .scroll{
    
    font-size: 12px;
    left: -10px;
    bottom: 66px;
}

  .scroll::before {
    top: 0.7em;
    left: 3.7em;
    width: 40px;
  }

  .banner-title {
    font-size: 20px;
    margin-bottom: 0px;
  }
  .banner-p{
    font-size: 12px;
  }
  .custom-btn {
    width: 250px;
  }
  .btn-sm {
    width: 120px !important;
    height: 33px;
    font-size: 12px;
  }
 .logo {
    width: 100px;
    height: 27px;
    margin-bottom: 10px;
}
.logo-div {
    padding: 20px 3px;
}
}
/* medium screen */
@media screen and (min-width: 641px) and (max-width: 768px) {
  .banner {
    height: 21em;
  }
  .banner-text {
    top: 71px;
    left: 11%;
    /* background-color: orangered; */
  }
  .consult-btn {
    width: 185px;
    height: 47px;
  }
  .banner-title {
    font-size: 36px;
  }
  .banner-p {
    font-size: 13px !important;
  }
 .scroll{
    left: 0px;
    bottom: 120px;
    font-size: 15px;

}
}
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .banner {
   
    height: 24em;
  }
  .banner-text {
    top: 89px;
    left: 100px;
    /* background-color: fuchsia; */
  }
  .custom-btn {
    width: 202px !important;
    height: 47px !important;
  }
  .banner-title {
    font-size: 36px;
  }
  .banner-p {
    font-size: 15px !important;
    height: 78px;
  }
  .scroll{
    left: 0px;
    bottom: 120px;
    font-size: 25px;
    font-size: 20px;
}
}
/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .banner {
    /* float: right; */
   
    height: 30em;
  }
  .banner-text {
    top: 24%;
    left: 11%;
    /* background-color: green; */
  }
  .banner-title {
    font-size: 60px;
  }
  .banner-p {
    font-size: 18px !important;
    height: 110px;
   
  }
  .scroll{
    left: 0px;
    bottom: 120px;
    font-size: 25px;
}
  
}
/* Extra large devices (large desktops, 1200px and up) */
@media screen and (min-width:1200px) and (max-width: 1450px) {
  .banner {
    /* float: right; */
   
    height: 30em;
  }
  .banner-text {
    top: 24%;
    left: 11%;
    /* background-color: green; */
  }
  .banner-title {
    font-size: 72px;
  }
  .banner-p {
    font-size: 18px !important;
    height: 110px;
    
  }
  .scroll{
    left: 0px;
    bottom: 120px;
    font-size: 30px;
}
  
}

</style>