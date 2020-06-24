<template>
  <div class="container-fluid px-0 px-md-5">
    <div class="row mx-2 blog-list-section mt-4" v-if="data.imageleft == 'left'">
      <router-link to="/singleblog">
        <div class="col-4 pl-lg-0 pl-md-0 pr-0 pl-0 text-sm-center blog-img-container" v-if="data.name == 'singleBlog'">
          <img :src="data.image" alt="" class="blog-img" />
        </div>
        <div class="col-8 p-0">
          <div class="right-text-part">
            <h1 class="blog-list-title mb-0" v-if="data.name == 'singleBlog'">
              {{ data.title }}
            </h1>
            <p class="blog-list-subtitle text-muted" v-if="data.name == 'singleBlog'">
              {{ data.text }}
            </p>
          </div>
          <p class="blog-list-subtext d-none d-md-block" v-if="data.name == 'singleBlog'">
            {{ data.subtext }}
          </p>
        </div>
      </router-link>
    </div>

    <div class="row mx-2 blog-list-section mt-4" v-if="data.imageleft == 'right'">
      <router-link to="/singleblog">
        <div class="col-8 p-0">
          <div class="right-text-part">
            <h1 class="blog-list-title mb-0" v-if="data.name == 'singleBlog'">
              {{ data.title }}
            </h1>
            <p class="blog-list-subtitle text-muted" v-if="data.name == 'singleBlog'">
              {{ data.text }}
            </p>
          </div>
          <p class="blog-list-subtext d-none d-md-block" v-if="data.name == 'singleBlog'">
            {{ data.subtext }}
          </p>
        </div>
        <div class="col-4 p-0 text-sm-center blog-img-container" v-if="data.name == 'singleBlog'">
          <img :src="data.image" alt="" class="blog-img" />
        </div>
      </router-link>
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
      },
    },
  },
};
</script>

<style scoped>
a {
  display: contents;
}
</style>
