<template>
  <div class="ask-section">
    <div class="row mx-0 main-back-color">
      <div class="col-md-6 faq-image order-last order-md-first pl-0 bg-transparent blog-two-margin">
        <img src="@/assets/img/cactus.png" alt="" class="blog-two-img blog-image-left faq-image" />
      </div>
      
      <div class="col-md-6 mb-26 bg-white mt-4 order-1 order-md-2 blog-margin-left question_height">
        <div class="third-section-text w-75">
          <h2 class="blog-title text-left mt-5">FAQ</h2>
          <p class="subtitle mb-0 mt-2" style="font-family:Avenir Heavy">Hoe werkt de behandeling via menscript?</p>
          <p class="subtitle mb-0 mt-2" style="font-family:Avenir Heavy">Welke behandelingen voeren jullie uit?</p>
          <p class="subtitle mb-0 mt-2" style="font-family:Avenir Heavy">Hoe kan ik jullie bereiken?</p>
          <p class="subtitle mb-0 mt-2 w-auto mb-5 mb-md-0"> 
            Last van haaruitval, maar niet zeker wat je nodig hebt? Start een
            online consult, deel je symptomen en medische historie en laat je
            adviseren door een van de doktoren binnen ons netwerk. Een dokter
            evalueert vervolgens je behandelingsverzoek. Geschikt? Dan ontvang
            je je behandeling binnen 48u thuis geleverd.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p.subtitle.faq {
    font-family: avenir Heavy;
}
.faq-image{
  max-width: 574px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1300px) {
  .max-image-cactus{
height: 770px!important;
  }
}
/* laptop ,desktop */
@media screen and (max-width: 1300px) {
  /* default */
}
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (max-width: 991px) {
}

/* Medium devices (tablets, 768px and up) */
@media screen and (max-width: 768px) {
  .question_height{
    height: 500px;
  }
  .faq-image{
    max-width: 400px;
    margin-left: 0;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (max-width: 640px) {
  .faq-image{
    margin-top: -55px !important;
    max-width: 350px;
  }
}
@media (max-width: 400px) {
  .faq-image{
    margin-top: -65px !important;
    max-width: 300px;
  }
}
</style>
