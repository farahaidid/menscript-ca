<template>
  <router-link to="/singleblog" class="router-link">
    <div class="row margin-five ">
      <div class="col-md-6 order-last order-md-first pl-0">
        <img :src="data.image" alt class="blog-two-img blog-image-left" />
      </div>
      <div class="col-md-6 order-first order-md-last bg-white align_center px-5 px-md-0">
        <div class="five-section-text w-75">
          <h2 class="title text-left text-md-center" v-if="data.name == 'blogTwo'">
            {{ data.title }}
          </h2>
          <p class="subtitle" v-if="data.name == 'blogTwo'">
            {{ data.text }}
          </p>
          <p class="subtitle-2  " v-if="data.name == 'blogTwo'">
            {{ data.subtitle }}
          </p>
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
