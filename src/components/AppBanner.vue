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

              <h1 class="banner-title">Mannen. wij zijn er voor je!</h1>
              <p class="w-50 text-justify text-mb banner-p">
                We zijn er om zelfzorg voor mannen te destigmatiseren en brengen
                essentiële medicatie binnen handbereik. Van online artsenconsult
                tot behandeling. Wij regelen het voor je.
              </p>

              <button class="btn custom-btn btn-sm consult-btn">
                Start online consult
              </button>
            </div>
          </div>
        </div>
      </div>
     </div>
</div>
  
</template>


<style scoped>

.banner {
  /* float: right; */
  margin-bottom: 174px;
}
.banner-img {
  width: 95%;
  max-height: 890px;
  margin-left: 5%;
}
.banner-text {
    position: absolute;
    top: 18%;
    left: 11%;
   
}
.scroll {
  position: absolute;
  left: -18px;
  bottom: 6em;
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
.custom-btn {
  background-color: black;
  color: #ffffff;
  width: 372px;
  height: 62px;
  font-size: 16px;
 
}

/* Small devices */
@media screen and (max-width: 640px) {
  .banner {
    height: 14em;
    margin-bottom: 45px;
    margin-left: 0px;
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

}
/* medium screen */
@media screen and (min-width: 641px) and (max-width: 768px) {
  .banner {
    height: 21em;
    margin-bottom: 75px;
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
    margin-bottom: 60px;
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
    margin-bottom: 70px;
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
    margin-bottom: 100px;
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