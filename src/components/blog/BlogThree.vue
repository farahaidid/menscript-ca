<template>
  <div class="row main-back-color pb-5 blog-3 mx-0">
    <div class="blog-sec bg-white mb-26 px-md-0 blog-margin mr-md-0" @click="gotoCategoryPage">
      <div class="w-75 third-section-text ml-4">
        <h2
          class="blog-title  text-left mt-5"
          v-if="data.name == 'blogThree'"
        >
          {{ data.title }}
        </h2>
        <p class="blog-subtitle" v-if="data.name == 'blogThree'">
          {{ data.text }}
        </p>
        <div class="d-flex justify-content-end mt-1">
          <button
            class="btn btn-secondary   custom-btn"
            type="button"
            v-if="data.button == true"
          >
            Start online consult
          </button>
        </div>
        <p class="subtitle-2 d-md-none" v-if="data.name == 'blogThree'">
          {{ data.subtitle }}
        </p>
      </div>
    </div>
    <div class="img-sec pr-0 blog-negative-margin ">
      <img
        :src="data.image"
        alt="blogThree"
        class="img-six-position blog-image-right"
        v-if="data.name == 'blogThree'"
      />
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
          btnText: "no",
        };
      },
    },
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
  .blog-3{
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