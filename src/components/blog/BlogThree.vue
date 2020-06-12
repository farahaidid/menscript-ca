<template>
  <div class="row">
    <div class="col-md-6 bg-white mb-26 px-md-0 blog-margin mr-md-0" @click="gotoCategoryPage">
      <div class="five-section-text w-90 ml-4">
        <h2
          class="blog-title  text-left text-md-center mt-5"
          v-if="data.name == 'blogThree'"
        >
          {{ data.title }}
        </h2>
        <p class="blog-subtitle" v-if="data.name == 'blogThree'">
          {{ data.text }}
        </p>
        <div class="d-flex justify-content-end mt-1">
          <button
            class="btn btn-secondary  blog-button-cat "
            type="button"
            v-if="data.button == true"
          >
            Start online consult
          </button>
        </div>
        <p class="subtitle-2" v-if="data.name == 'blogThree'">
          {{ data.subtitle }}
        </p>
      </div>
    </div>
    <div class="col-md-6 pr-0 blog-negative-margin ">
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
