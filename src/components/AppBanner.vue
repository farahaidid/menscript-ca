<template>
  <div>
    <div class="container-fluid width padding">
      <div class="row">
        <div class="col-md-12 padding">
          <div class="banner position-relative">
            <p class="scroll">scroll</p>
            <img src="../assets/img/banner.jpg" alt class="banner-img" />
            <div class="banner-text">
              <div class="my-auto">
                <h1 class="banner-title extrasmall">{{ data.title }}</h1>

                <p class="custom-home banner-subtitle">{{ data.subtitle }}</p>

                <p
                  class="banner-subtitle2"
                  v-if=" data.subtitle2  !=null "
                >{{ data.subtitle2 }}</p>
                <button
                  class="btn custom-btn btn-sm consult-btn"
                  v-if="data.button == true"
                  @click="openLoginModal"
                >Start online consult</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center w-75 logo-div mx-auto" v-if="data.logo !== false">
        <div class="col-md-4 col-sm-4 p-0 m-0">
          <img src="@/assets/img/logo1.png" alt class="del logo" />
        </div>
        <div class="col-md-4 col-sm-4 p-0 m-0">
          <img src="@/assets/img/bbc.png" alt="bbc" class="bbc logo" />
        </div>
        <div class="col-md-4 col-sm-4 p-0 m-0">
          <img src="@/assets/img/nos.png" alt class="nos logo" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventBus from "@/plugins/eventBus";

export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    openLoginModal() {
      EventBus.$emit("open-login-modal");
    }
  }
};
</script>
<style scoped>
.banner-img {
  /* width: 95%; */
  max-height: 890px;
  /* margin-left: 5%; */
  padding-left: 82px;
}
.banner-text {
  position: absolute;
  top: 0px;
  left: 11%;
  height: 100%;
  display: flex;
}
.scroll {
    position: absolute;
    left: 0px;
    bottom: 134px;
    font-family: Montserrat;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    font-size: 20px;
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
}
.banner-title {
  font-size: 72px !important;
  line-height: 48px;
  color: #212121;
 
  width: max-content;
}
.banner-subtitle {
  font-size: 18px;
  height: 65px;
  width: 552px;
  margin-top: 25px;
  margin-bottom: 51px;
  
}
.banner-subtitle2 {
    font-size: 18px;
    line-height: 48px;
    color: #000000;
    font-family: Roboto;
}
.custom-btn {
  background-color: black;
  width: 375px;
  height: 60px;
  font-size: 24px;
  border: 1px solid #000000;
  line-height: 48px;
  font-family: Avenir Black;
  color: #fbfcff;
  text-align: center;
}
.logo{
    width: 151px;
    height: 44px;
}
.logo-div {
  padding: 35px 3px;
}
img.del.logo {
    margin-left: 195px;
}
img.bbc.logo {
    margin-left: 190px;
}
img.nos.logo {
    margin-left: 118px;
    
}

/* extra samll  */
@media screen and (max-width: 450px) {
  .banner-title,.extrasmall{
    font-size: 18px!important;
    margin-bottom: 0px; 
  }
  .banner-subtitle {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 10px;
    height: auto;
    width: 196px;
  }
  .banner-subtitle2 {
    font-size: 10px;
  }
  .scroll {
    visibility: hidden;
  }
  .banner-img {
  margin-left: 0px;
    padding-left: 0px; 
  }
  .padding {
      padding-right: 0px; 
      padding-left:0px;
  }
  .btn-sm {
    width: 115px!important;
    height: 26px;
    font-size: 10px;
    line-height: 0px;
  }
  .logo {
    width: 100px;
    height: 27px;
    margin-bottom: 10px;
  }
  .logo-div {
    padding: 20px 3px;
  }

  img.del.logo,img.bbc.logo,img.nos.logo {
    margin-left: 0px;
  }

}
/* Small devices */
@media screen and (min-width: 451px) and (max-width: 640px) {
  .banner {
    height: 14em;
    margin-left: 0px;
  }
  .banner-img {
    padding-left: 16px;
  }
  .banner-text {
    left: 8%;
  }
  p {
    font-size: 12px;
  }
  .scroll {
    font-size: 12px;
    left: -15px;
    bottom: 66px;
  }

  .scroll::before {
    top: 0.7em;
    left: 3.7em;
    width: 40px;
  }

  .banner-title {
    font-size: 20px !important;
    margin-bottom: 0px;
    
    
  }
  .banner-subtitle {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 12px;
    height: auto;
    width: 196px;
  }
  .banner-subtitle2{
    font-size:12px;
  }
  
  .btn-sm {
    width: 138px !important;
    height: 34px;
    font-size: 12px;
    line-height: 0px;
}
  .logo {
    width: 100px;
    height: 27px;
    margin-bottom: 10px;
  }
  .logo-div {
    padding: 20px 3px;
  }

  img.del.logo,img.bbc.logo,img.nos.logo {
    margin-left: 0px;
}

}
/* medium screen */
@media screen and (min-width: 641px) and (max-width: 768px) {
  .banner {
    height: 21em;
  }
  .banner-text {
    top: 0px;
    left: 14%;
  }
 .custom-btn {
    width: 200px!important;
    height: 39px!important;
    font-size: 15px!important;
    line-height: 33px!important;
}
  .banner-title {
    font-size: 36px !important;
    
  }
  .banner-subtitle {
    font-size: 14px;
    height: 55px;
    width: 315px;
    margin-top: 25px;
    margin-bottom: 51px;
}
 .banner-subtitle2{
    font-size:14px;
  }
  .scroll {
    left: 0px;
    bottom: 80px;
    font-size: 15px;
  }
  .logo {
    width: 91px;
    height: 28px;
}
   img.del.logo,img.bbc.logo,img.nos.logo {
    margin-left: 0px;

}
}
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .banner {
    height: 24em;
  }
  .banner-text {
    left: 100px;
  }
 .custom-btn {
    width: 218px!important;
    height: 46px!important;
    font-size: 16px!important;
    line-height: 40px!important;
}
  .banner-title {
    font-size: 36px !important;
    
  }
  .banner-subtitle {
    font-size: 15px !important;
    height: 120px;
    width: 375px;
    margin-bottom: 0px;
}
 .banner-subtitle2{
    font-size:15px;
  }
  .scroll {
    left: 0px;
    bottom: 90px;
   
  }
   .logo {
    width: 91px;
    height: 28px;
}
   img.del.logo,img.bbc.logo,img.nos.logo {
    margin-left: 0px;

}
}
/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .banner {
    height: 30em;
  }
  .banner-text {
    left: 11%;
  }
  .banner-title {
    font-size: 55px !important;
    
  }
  .banner-subtitle {
    font-size: 16px !important;
    height: 100px;
    margin-bottom: 0px!important;
    width:490px;
}
 .banner-subtitle2{
    font-size:16px;
  }
  .scroll {
    left: 0px;
    bottom: 120px;
   
  }
  .custom-btn {
    width: 245px!important;
    height: 51px!important;
    font-size: 18px!important;
    line-height: 46px!important;
}
/*  .logo {
    width: 91px;
    height: 28px;
} */
   img.del.logo,img.bbc.logo,img.nos.logo {
    margin-left: 0px;

}
}
/* Extra large devices (large desktops, 1200px and up) */
@media screen and (min-width: 1200px) and (max-width: 1500px) {
  .banner {
    height: 30em;
  }
  .banner-text {
    left: 11%;
  }
  .banner-title {
    font-size: 60px !important;
    
  }
  .banner-subtitle {
    font-size: 18px !important;
    height: 110px;
    margin-bottom: 10px;
  }
   .banner-subtitle2{
    font-size:18px;
  }
  .custom-btn{
    width: 280px;
    height: 56px;
    font-size: 20px;
}
  .scroll {
    left: 0px;
    bottom: 120px;
    
  }
  
}
</style>