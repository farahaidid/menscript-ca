<template>
  <div>
    <div class="image">
      <img src="@/assets/img/category-3.jpg"  alt="" />

      <div class="text">
        <p class="sub-text-1 mb-0">Shampoo revitalising</p>
        <p class="sub-text-2">200ml-€9.95</p>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    src:{
      type:String,
    }
  },
  created(){
    console.log("fgh",this.src)
  }
 
};
</script>

<style scoped>
.sub-text-1 {
  font-family: Avenir Black;
  font-size: 16px;
}
.sub-text-2 {
  font-family: Avenir Medium;
  font-size: 15px;
}
</style>
