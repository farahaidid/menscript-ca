<template>
  <div>
     <div class="">
        <router-link to="/singleblog" class="router-link">

         <div class="row margin-five ">
        <div class="col-md-6  pl pr ">
          <img
            :src="data.image"
            alt
            class="blog-two-img"
          />

        </div>
        <div class="col-md-6 bg-white align_center">
          <div class="five-section-text w-75">
            <h2 class="title" v-if="data.name == 'blogTwo'">{{ data.title}}</h2>
            <p class="subtitle"  v-if="data.name == 'blogTwo'">
              {{ data.text }}
            </p>
            <p class="subtitle-2  "  v-if="data.name == 'blogTwo'">{{ data.subtitle}}</p>
          </div>
        </div>
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
        return {
          
        };
      }
    }
  },
}
</script>
