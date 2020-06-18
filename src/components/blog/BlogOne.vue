<template>
  <div class="row margin-third">
    <div class="col-md-6 mb-26 px-md-0 blog-margin bg-white mr-md-0" @click="gotoCategoryPage">
      <div class="third-section-text ml-4 w-90">
        <h2 class="blog-title text-left mt-5" v-if="data.name == 'blogOne'">{{ data.title }}</h2>
        <p class="blog-subtitle" v-if="data.name == 'blogOne'">
          {{ data.text }}
        </p>
        <div class="row justify-content-end mx-0">
          <button data-v-220a3ba6="" class="btn btn-md-sm custom-btn"> Start online consult </button>
        </div>
      </div>
    </div>
    <div class="col-md-6 pr-0 pl max-height-716 blog-negative-margin">
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
    }
  },
  methods:{
    gotoCategoryPage(){
      this.$router.push({path: '/category'})
    },
  },
};
</script>

