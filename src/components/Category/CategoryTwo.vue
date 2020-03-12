<template>
  <div>
    <!-- one -->
    <div class="image" v-if="data.name === 'rx'">
      <img
        src="@/assets/img/category-2.jpg"
        alt="cat_two_img"
        class="cat-two-img"
      />
      <button class="btn btn-secondary custom-cat-btn " type="button">
        {{ data.btnText }}
      </button>
    </div>
    <!-- two -->
    <div class="image" v-if="data.name === 'otc'">
      <img
        src="@/assets/img/category-3.jpg"
        alt="cat_two_img"
        class="cat-two-img"
      />
      <button class="btn btn-secondary custom-cat-btn " type="button">
        {{ data.btnText }}
      </button>
    </div>
    <!-- three -->
    <div class="image" v-if="data.name==='RX'">
      <img src="@/assets/img/category-2.jpg" alt="" class="cat-two-img"/>

      <div class="text">
        <p class="sub-text-1 mb-0">{{ data.text1 }}</p>
        <p class="sub-text-2">200ml-€9.95</p>
      </div>
    </div>
    <!-- four -->
    <div class="image" v-if="data.name==='OTC'">
      <img src="@/assets/img/category-3.jpg" alt="" class="cat-two-img"/>

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
    //console.log("rx",this.rx.name)
    // console.log("otc",this.otc.name)
  }
};
</script>

<style scoped></style>
