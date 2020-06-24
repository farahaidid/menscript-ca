<template>
  <div class="row margin-third blog-1 mx-0">
    <div class="blog-sec mb-26 px-md-0 blog-margin bg-white mr-md-0" @click="gotoCategoryPage">
      <div class="third-section-text ml-4 w-75">
        <h2 class="blog-title text-left mt-5" v-if="data.name == 'blogOne'">{{ data.title }}</h2>
        <p class="blog-subtitle" v-if="data.name == 'blogOne'">
          {{ data.text }}
        </p>
        <div class="row justify-content-end ">
          <button v-if="!hideBtn" data-v-220a3ba6="" class="btn btn-md-sm custom-btn"> Start online consult </button>
          <span v-else class="blog-text-instead-of-btn">Less meer: finasteride en haarverlies</span>
        </div>
      </div>
    </div>
    <div class="img-sec pr-0 pl max-height-716 blog-negative-margin">
      <img :src="data.image" alt="fh" class="rever-side mt-4 blog-image-right" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    hideBtn: Boolean
  },
  methods:{
    gotoCategoryPage(){
      this.$router.push({path: '/category'})
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .blog-1{
    .blog-sec{
      width: 63%;
      display: inline-block;
    }
    .img-sec{
      width: 47%;
      display: inline-block;
      margin-left: -10%;
    }
  }
}
</style>