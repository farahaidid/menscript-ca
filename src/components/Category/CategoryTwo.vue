<template>
  <div>
    <!-- one -->
    <div class="image2" v-if="data.name === 'rx'">
      <div class="cat-image-div">
        <router-link to="/product">
          <img :src="data.image" alt="cat_two_img" class="cat-two-img" />

          <div class="hover-replace">

        <button class="btn btn-secondary custom-cat-btn " type="button">
          {{ data.btnText }}
        </button>
        <div class="cat-text">
        <p class="sub-text-1 mb-0">{{ data.text1 }}</p>
        <p class="sub-text-2">200ml-€9.95</p>
      </div>
          </div>
        
      </router-link>
      </div>
    </div>
    <!-- two -->
     <div class="image2" v-if="data.name === 'otc'">
      <div class="cat-image-div">
        <router-link to="/product">
          <img :src="data.image" alt="cat_two_img" class="cat-two-img" />

          <div class="hover-replace">
<button class="btn btn-secondary custom-cat-btn " type="button">
          {{ data.btnText }}
        </button>
           
        <div class="cat-text">
        <p class="sub-text-1 mb-0">{{ data.text1 }}</p>
        <p class="sub-text-2">200ml-€9.95</p>
      </div>
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
