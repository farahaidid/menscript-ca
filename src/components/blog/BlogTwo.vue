<template>
  <router-link to="/singleblog" class="router-link">
    <div class="row margin-five mx-0">
      <div class="col-md-6 order-last order-md-first pl-0 bg-transparent blog-two-margin">
        <img :src="data.image" alt class="blog-two-img blog-image-left" />
      </div>
      <div class="col-md-6 order-first order-md-last bg-white px-md-0 blog-margin blog-margin-left ml-md-0 mr-0">
        <div class="five-section-text w-90">
          <h2 class="blog-title text-left mt-5" v-if="data.name == 'blogTwo'">
            {{ data.title }}
          </h2>
          <p class="blog-subtitle" v-if="data.name == 'blogTwo'">
            {{ data.text }}
          </p>
          <div class="row justify-content-end mx-0">
            <button data-v-220a3ba6="" class="btn btn-md-sm custom-btn"> Start online consult </button>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
