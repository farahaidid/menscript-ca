<template>
  <div>
    <div class="container-fluid bg-white padding-sm-0">
      <div class="row width-75 mx-auto  how-it-works">
        <div class="col-sm-12">
          <h1 class="title padding-112 text-center">Hoe het werkt?</h1>
        </div>
        <div class="col-md-4 col-sm-12 text-sm-center max-height-phone-img">
          <img
            src="../assets/img/phone-one.jpg"
            alt
            class="phone-img margin-img"
          />
          <div class="works-text">
            <p class="works-text-heading">Start online consult</p>
            <p class="subtitle">
              Start een online consult en deel je symptomen en medische historie
              met een van de artsen binnen ons netwerk.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 text-sm-center max-height-phone-img">
          <img src="../assets/img/phone.jpg" alt class="phone-img margin-img" />
          <div class="works-text">
            <p class="works-text-heading">Voorkeur & Verificatie</p>
            <p class="subtitle ">
              Ontvang een advies, geef je voorkeursbehandeling op en verifieer
              je identiteit.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 text-sm-center max-height-phone-img">
          <img
            src="../assets/img/phone-one.jpg"
            alt
            class="phone-img margin-img"
          />
          <div class="works-text">
            <p class="works-text-heading ml-3">
              Krijg je medicatie thuisgeleverd
            </p>
            <p class="subtitle">
              Krijg je behandeling binnen 48u thuisgeleverd. Gekozen voor
              periodieke levering? Dan zorgen wij ervoor dat je nooit.
            </p>
          </div>
        </div>
        <div class="col-sm-12 text-center">
          <button class="btn custom-btn mb-4">Start consult</button>
        </div>
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
.padding-112 {
  padding: 40px 0px;
}
p.works-text-heading {
  font-size: 14px;
  font-weight: 600;
  margin-top: 12px;
  height: 40px;
  /* padding: 10px 0px; */
}
.custom-btn {
  background-color: black;
  color: #ffffff;
  width: 315px;
  height: 62px;
  padding: 0px;
}
.how-it-works {
  margin-top: 58px;
  padding-bottom: 34px;
}
/* Small devices */
@media screen and (max-width: 640px) {
  .width-75 {
    width: 100%;
  }
  img.phone-img.margin-img {
    width: 70%;
  }
  .text-sm-center {
    text-align: center;
  }

  .padding-112 {
    padding: 40px 0px;
  }
  p.works-text-heading {
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
  }
  .custom-btn {
    width: auto;
    height: auto;
    font-size: 13px;
    padding: 8px 28px;
  }
  .padding-sm-0 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .how-it-works {
    margin-top: 25px;
    padding-bottom: 0px;
  }
}
/* medium phone  */
@media screen and (min-width: 641px) and (max-width: 768px) {
  .width-75 {
    width: 100%;
  }
  img.phone-img.margin-img {
    width: 70%;
  }
  .text-sm-center {
    text-align: center;
  }
  p.works-text-heading {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
  }
  .padding-112 {
    padding: 20px 0px;
  }
  .title {
    font-size: 20px;
  }
  .how-it-works {
    margin-top: 20px;
    padding-bottom: 0px;
  }
  .custom-btn {
    width: 217px;
    height: 51px;
  }
}
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
  p.works-text-heading {
    font-size: 14px;
    margin-top: 10px;
    height: 54px;
  }
  .custom-btn {
    width: 267px;
    height: 54px;
  }
}
/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) and (max-width: 1300px) {
  /* default style */
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1300px) {
  p.works-text-heading {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
  }
}
</style>
