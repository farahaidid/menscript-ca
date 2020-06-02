<template>
  <div class="row bg-white margin-third">
    <router-link to="/singleblog" class="router-link">

    <div class="col-md-6 mb-26 align_center px-5 px-md-0">
      <div class="third-section-text w-75">
        <h2 class="title text-left text-md-center" v-if="data.name == 'blogOne'">{{ data.title }}</h2>
        <p class="subtitle custon-margin-subtitle" v-if="data.name == 'blogOne'">
          {{ data.text }}
        </p>
        <p class="subtitle-2 " v-if="data.name == 'blogOne'">
          Lees meer: finasteride en haarverlies
        </p>
      </div>
    </div>
    <div class="col-md-6 pr-0 pl max-height-716">
      <img :src="data.image" alt="fh" class="rever-side mt-4 blog-image-right" />
    </div>
      </router-link>

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
};
</script>

