<template>
  <div>
    <div class="container-fluid  ask-section">
      <div class="row ">
        <div class="col-md-6 col-sm-12 text-center ">
          <img src="@/assets/img/cactus.png" alt="" class="cactus max-image-cactus w-75" />
        </div>
       
        <div class="col-md-6 mb-26 align_center bg-white mt-4">
        <div class="third-section-text w-75">
          <h2 class="title">FAQ</h2>
          <p class="subtitle mb-0 mt-2" style="font-family:Avenir Heavy">
            Hoe werkt de behandeling via menscript?
          </p>
          <p class="subtitle mb-0 mt-2" style="font-family:Avenir Heavy">
            Welke behandelingen voeren jullie uit?
          </p>
          <p class="subtitle mb-0 mt-2" style="font-family:Avenir Heavy">
           Hoe kan ik jullie bereiken?
          </p>

          <p class="subtitle mb-0 mt-2 w-auto"> Last van haaruitval, maar niet zeker wat je nodig hebt? Start een
            online consult, deel je symptomen en medische historie en laat je
            adviseren door een van de doktoren binnen ons netwerk. Een dokter
            evalueert vervolgens je behandelingsverzoek. Geschikt? Dan ontvang
            je je behandeling binnen 48u thuis geleverd.</p>
        </div>
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

/* Small devices (landscape phones, 576px and up) */
@media (max-width: 640px) {
}

/* Medium devices (tablets, 768px and up) */
@media screen and (min-width: 641px) and (max-width: 768px) {
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
}
/* laptop ,desktop */
@media screen and (min-width: 992px) and (max-width: 1300px) {
  /* default */
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1300px) {
  .max-image-cactus{
height: 770px!important;
  }
}
</style>
