<template>
  <div>
    <div class="container-fluid width padding cover-banner">
      <div class="row mx-0">
        <div class="col-md-12 padding">
          <div class="banner position-relative">
            <p class="scroll">scroll</p>
            <img v-if="!isMobile" src="../assets/img/banner.jpg" alt class="banner-img" />
            <img v-else src="../assets/img/mobile-banner.png" alt class="banner-img" />
            <div class="banner-text">
              <div class="my-auto">
                <h1 class="banner-title extrasmall">{{ data.title }}</h1>

                <p class="custom-home banner-subtitle">{{ data.subtitle }}</p>

                <p class="banner-subtitle2" v-if="data.subtitle2 != null">
                  {{ data.subtitle2 }}
                </p>
                <button
                  class="btn btn-md-sm custom-btn"
                  v-if="data.button == true"
                  @click="openLoginModal"
                >
                  Start online consult
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="vermeld">Vermeld in</p>
      <div
        class="row mx-0 text-center w-md-75 logo-div mx-auto"
        v-if="data.logo !== false"
      >
        <div class="col-4 p-0 m-0 ad-logos">
          <img src="@/assets/img/logo1.png" alt class="del logo" />
        </div>
        <div class="col-4 p-0 m-0 ad-logos">
          <img src="@/assets/img/bbc.png" alt="bbc" class="bbc logo" />
        </div>
        <div class="col-4 p-0 m-0 ad-logos">
          <img src="@/assets/img/nos.png" alt class="nos logo" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventBus from "@/plugins/eventBus";
import GLOBAL from "@/mixins/GLOBAL.vue"

export default {
  mixins: [GLOBAL],
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
  },
};
</script>
<style scoped lang="scss">
@import "../style/appBanner.scss";
@import "../style/consultBtn.scss";

.cover-banner{
  position: relative;
  .vermeld{
    display: inline-block;
    margin-left: 10%;
    position: absolute;
    margin-top: 20px;
    color: grey;
    font-family: Avenir-Medium;
    font-size: 20px;
  }
}

@media screen and (max-width: 1300px) {
  .vermeld{
    display: none !important;
  }
}

@media screen and (max-width: 640px) {
  .ad-logos:nth-child(1){
    text-align: left !important;
    padding-left: 20px !important;
  }
  .ad-logos:nth-child(2){
    text-align: center !important;
  }
  .ad-logos:nth-child(3){
    text-align: right !important;
    padding-right: 20px !important;
  }
  
}
</style>
