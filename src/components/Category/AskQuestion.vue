<template>
  <div>
    <div class="container-fluid bg-white ask-section">
      <div class="row ">
        <div class="col-md-7 col-sm-12  mx-auto ">
          <h1 class=" text-center title">Frequently Asked Questions</h1>

          <div id="accordion">
            <div class="card">
              <div class="card-header bg-white">
                <a class="card-link" data-toggle="collapse" href="#collapseOne">
                  Hoe werkt de behandeling via menscript.com?
                </a>
              </div>
              <div id="collapseOne" class="collapse " data-parent="#accordion">
                <div class="card-body">
                  Text one here
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header bg-white">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseTwo"
                >
                  Waar moet ik op letten zodra ik een behandeling onderga?
                </a>
              </div>
              <div id="collapseTwo" class="collapse" data-parent="#accordion">
                <div class="card-body">
                  #2
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header bg-white">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseThree"
                >
                  Welke behandelingen schrijven jullie voor?
                </a>
              </div>
              <div id="collapseThree" class="collapse" data-parent="#accordion">
                <div class="card-body ">
                  #3
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header bg-white">
                <a
                  class="collapsed card-link"
                  data-toggle="collapse"
                  href="#collapseFour"
                >
                  Wat kan ik verwachten van de behandeling?
                </a>
              </div>
              <div
                id="collapseFour"
                class="collapse show"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <p class="question-text">
                    Last van haaruitval, maar niet zeker wat je nodig hebt?
                    Start een online consult, deel je symptomen en medische
                    historie en laat je adviseren door een van de doktoren
                    binnen ons netwerk. Een dokter evalueert vervolgens je
                    behandelingsverzoek. Geschikt? Dan ontvang je je behandeling
                    binnen 48u thuis geleverd.
                  </p>
                </div>
              </div>
            </div>
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
a {
  color: #000000;
}
.card {
  margin-bottom: 12px;
  border: 1px solid #d7d7d7;
}
.card-body {
  background-color: #fbfbfa !important;
}
.card-header {
  border-bottom: transparent !important;
}
.card-header a {
  font-family: Avenir Heavy;
  font-size: 18px;
}
p.question-text {
  font-size: 16px;
}
.title {
  font-size: 46px;
  margin-bottom: 35px;
}
.card-body {
  background-color: #fbfbfa !important;
  border-top: 1px solid #d7d7d7;
}
/* Small devices (landscape phones, 576px and up) */
@media (max-width: 640px) {
  .title {
    font-size: 18px !important;
  }
  .card-header a,.card-body {
    font-size: 12px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media screen and (min-width: 641px) and (max-width: 768px) {
  .title {
    font-size: 24px !important;
  }
   .card-header a,.card-body {
    font-size: 13px;
  }
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .title {
    font-size: 35px;
  }
  .card-header a,.card-body {
    font-size: 16px;
  }
}
/* laptop ,desktop */
@media screen and (min-width: 992px) and (max-width: 1300px) {
  /* default */
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1300px) {
  .title {
    font-size: 50px;
  }
}
</style>
