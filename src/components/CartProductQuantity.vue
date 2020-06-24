<template>
  <div class="number-spinner">
    <span class="i">
      <i class="fal fa-minus" @click="decreaseQuantity"></i>
    </span>
    <span class="i">1</span>
    <span class="i">
      <i class="fal fa-plus" @click="increaseQuantity"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: ["quantity"],
  methods:{
    decreaseQuantity(){
      this.$emit("decrease", 1)
    },
    increaseQuantity(){
      this.$emit("increase", 1)
    },
  },
}
</script>

<style lang="scss" scoped>
  .number-spinner {
    background-color: #f6f6f4;
    height: 30px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px !important;
    span.i {
      display: inline-block;
      width: 16px;
      font-size: 12px;
    }
    i.fal.fa-minus,
    i.fal.fa-plus {
      color: #b3c2bb;
      cursor: pointer;
    }
  }
</style>