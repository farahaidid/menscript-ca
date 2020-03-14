<template>
  <div>
     <div class="">
         <div class="row margin-five ">
        <div class="col-md-6 max-height-716 pl pr align_center">
          <img
            :src="data.image"
            alt
            class="five-one img five-position"
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
