<template>
  <div>
    <div class="container-fluid ">
      <div class="row">
        <div class="col-md-6 align_center bg-white pl-0 mb-26">
          <div class="five-section-text w-75 mx-auto">
            <h2 class="title" v-if="data.name == 'blogThree'">
              {{ data.title }}
            </h2>
            <h2 class="title" v-if="data.name == 'catThree'">
              {{ data.title }}
            </h2>

            <p class="subtitle" v-if="data.name == 'blogThree'">
              Het aantal bezoeken aan de huisartsenpraktijk onder vrouwen ligt
              al jaren ver boven die van de man. Waar de vrouw het probleem
              graag bespreekbaar maakt, zwijgt de man. Ze schamen zich of worden
              geconfronteerd met talloze ‘gender-based’ stigma's. Door de
              drempel te verlagen om in contact te komen met een geregistreerde
              arts, proberen we hen de medische zorg te bieden die ze nodig
              hebben voor problemen die anders verborgen zouden houden.
            </p>
            <p class="subtitle" v-if="data.name == 'catThree'">
              Last van haaruitval, maar niet zeker wat je nodig hebt? Start een
              online consult, deel je symptomen en medische historie en laat je
              adviseren door een van de doktoren binnen ons netwerk.Een dokter
              evalueert vervolgens je behandelingsverzoek. Geschikt? Dan ontvang
              je je behandeling binnen 48u thuis geleverd.
            </p>
            <div class="d-flex justify-content-end mt-5">
              <button
                class="btn btn-secondary custom-cat-btn w-50"
                type="button"
                v-if="data.name == 'catThree'"
              >
                Start online consult
              </button>
            </div>

            <p class="subtitle-2" v-if="data.name == 'blogThree'">
              {{ data.subtitle }}
            </p>
          </div>
        </div>
        <div class="col-md-6 pl pr  bg-white max-height-img-six">
          <img
            :src="data.image"
            alt="blogThree"
            class="img-six-position"
            v-if="data.name == 'blogThree'"
          />
          <img
            :src="data.image"
            alt="blogThree"
            class="img-six-position"
            v-if="data.name == 'catThree'"
          />
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
          name: "hello",
          btnText: "no"
        };
      }
    }
  },
  mounted() {
    console.log("data", this.data);
  }
};
</script>

<style scoped>
/* @import '/src/style/blogPost.css'; */
/* .mb-26 {
  margin-bottom: 26px;
}  */
</style>
