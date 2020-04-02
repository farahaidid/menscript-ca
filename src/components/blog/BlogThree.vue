<template>
  <div>
    <div class="container-fluid ">
      <div class="row">
         <router-link to="/singleblog" class="router-link">
        <div class="col-md-6 align_center bg-white pl-0 mb-26">
          <div class="five-section-text w-75 mx-auto">
            <h2 class="title" v-if="data.name == 'blogThree'">
              {{ data.title }}
            </h2>
            <p class="subtitle" v-if="data.name == 'blogThree'">
              {{ data.text }}
            </p>
            <div class="d-flex justify-content-end mt-5">
              <button
                class="btn btn-secondary  blog-button-cat "
                type="button"
                v-if="data.button == true "
              >
                Start online consult
              </button>
              
            </div>
            <p class="subtitle-2" v-if="data.name == 'blogThree'">
              {{ data.subtitle }}
            </p>
          </div>
        </div>
        <div class="col-md-6 pl pr pr-0  bg-white ">
          <img
            :src="data.image"
            alt="blogThree"
            class="img-six-position"
            v-if="data.name == 'blogThree'"
          />
        </div>
         </router-link>
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
  }
};
</script>

