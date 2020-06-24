<template>
  <div>
    <div class="container-fluid bg-white padding-sm-0">
      <div class="row width-75 mx-auto  how-it-works">
        <div class="col-sm-12">
          <h1 class="title padding-112 text-center">Hoe het werkt?</h1>
        </div>
        <div class="col-md-4 col-sm-12  max-height-phone-img">
          <img
            src="../assets/img/phone-one.jpg"
            alt
            class="phone-img margin-img"
          />
          <div class="works-text">
            <p class="works-text-heading mt-4">Start online consult</p>
            <p class="subtitle text-center text-md-left">
              Start een online consult en deel je symptomen en medische historie
              met een van de artsen binnen ons netwerk.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 mt-5 mt-md-0 max-height-phone-img">
          <img src="../assets/img/phone.jpg" alt class="phone-img margin-img" />
          <div class="works-text">
            <p class="works-text-heading mt-4">Voorkeur & Verificatie</p>
            <p class="subtitle text-center text-md-left">
              Ontvang een advies, geef je voorkeursbehandeling op en verifieer
              je identiteit.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 mt-5 mt-md-0 max-height-phone-img">
          <img
            src="../assets/img/phone-one.jpg"
            alt
            class="phone-img margin-img"
          />
          <div class="works-text">
            <p class="works-text-heading mt-4">
              Krijg je medicatie thuisgeleverd
            </p>
            <p class="subtitle text-center text-md-left">
              Krijg je behandeling binnen 48u thuisgeleverd. Gekozen voor
              periodieke levering? Dan zorgen wij ervoor dat je nooit.
            </p>
          </div>
        </div>
       <!--  <div class="col-sm-12 text-center">
          <button class="btn custom-btn mb-4">Start Consult</button>
        </div> -->
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 100%;
  height: auto !important;
}
.width-75 {
  width: 75%;
}
img.phone-img.margin-img {
    max-height: 233px;
  }
.padding-112 {
  padding: 40px 0px;
}
p.works-text-heading {
  font-size: 24px;
  margin-top:17px;
  font-family: "Avenir-Heavy";
    
}
.subtitle{
  width: auto;
  height: auto;
  margin-top: 10px;
}

p.works-text-subtitle {
    font-size: 18px;
    color: #6c6d6f;
}
/* .custom-btn {
    background-color: black;
    color: #ffffff;
    width: 315px;
    height: 59px;
    padding: 0px;
    font-size: 24px;
} */
.how-it-works {
    margin-top: 58px;
    padding-bottom: 85px;
}

/* Extra large devices (large desktops, 1200px and up) */
@media screen and (min-width:1200px) and (max-width: 1450px) {
  p.works-text-heading{
    font-size: 26px;
  }
}
/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) and (max-width: 1200px) {
  /* default style */
   p.works-text-heading{
    font-size: 23px;
  }
}
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
  p.works-text-heading{
    font-size: 18px;
  }
  .custom-btn {
    width: 267px;
    height: 54px;
  }
}
/* medium phone  */
@media screen and (min-width: 641px) and (max-width: 768px) {
  .width-75 {
    width: 100%;
  }
  img.phone-img.margin-img {
    max-height: 233px;
  }
  .text-sm-center {
    text-align: center;
  }
  p.works-text-heading{
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    height: 30px;
  }
  .padding-112 {
    padding: 20px 0px;
  }
  /* .title {
    font-size: 20px;
  } */
  .how-it-works {
    margin-top: 85px;
    padding-bottom: 0px;
  }
 /*  .custom-btn {
    width: 217px;
    height: 51px;
  } */
}
/* Small devices */
@media screen and (max-width: 640px) {
  .width-75 {
    width: 100%;
  }
  img.phone-img.margin-img {
    max-height: 233px;
  }
  .text-sm-center {
    text-align: center;
  }

  .padding-112 {
    padding: 26px 0px;
  }
  p.works-text-heading {
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
    height: 30px;
  }
  .padding-sm-0 {
    padding-left: 30px;
    padding-right: 30px;
  }
  .how-it-works {
    margin-top: 85px;
    padding-bottom: 0px;
  }
  .subtitle{
  width: auto;
  height: auto;
  margin-top: -15px;
  margin-bottom: 30px;
  }
}

@media screen and (max-width: 360px) {
  .title{
    font-size: 30px;
  }
  p.works-text-heading {
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    height: 30px;
  }
}

</style>
