<template>
  <div class="number-spinner">
    <span class="i">
      <i class="fal fa-minus"></i>
    </span>
    <span class="i">1</span>
    <span class="i">
      <i class="fal fa-plus"></i>
    </span>
  </div>
</template>

<script>
export default {

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
    }
  }
</style>