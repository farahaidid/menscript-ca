<template>
  <div>
    <!-- one -->
    <div class="image" v-if="data.name === 'rx'">
      <router-link to="/product"> 
     <img
        :src="data.image"
        alt="cat_two_img"
        class="cat-two-img"
      />
      
      </router-link>
    
      <button class="btn btn-secondary custom-cat-btn " type="button">
        {{ data.btnText }}
      </button>
    </div>
    <!-- two -->
    <div class="image" v-if="data.name === 'otc'">
      <router-link to="/product">
      
      <img
        :src="data.image"
        alt="cat_two_img"
        class="cat-two-img"
      />
      </router-link>
      <button class="btn btn-secondary custom-cat-btn " type="button">
        {{ data.btnText }}
      </button>
    </div>
    <!-- three -->
    <div class="image" v-if="data.name==='RX'">

      <router-link to="/product">

      <img :src="data.image" 
      alt="cat_two_img" 
      class="cat-two-img"/>
      </router-link>

      <div class="text">
        <p class="sub-text-1 mb-0">{{ data.text1 }}</p>
        <p class="sub-text-2">200ml-€9.95</p>
      </div>
    </div>
    <!-- four -->
    <div class="image" v-if="data.name==='OTC'">
      <router-link to="/product">

      <img 
      :src="data.image" 
      alt="cat-two-img" 
      class="cat-two-img"/>
      </router-link>

      <div class="text">
        <p class="sub-text-1 mb-0">{{ data.text1 }}</p>
        <p class="sub-text-2">200ml-€9.95</p>
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
  },
  mounted() {
    console.log("rx",this.data.image)
   
  }
};
</script>

<style scoped></style>
