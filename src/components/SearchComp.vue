<template>
  <div id="search-component">
    <b-input-group class="mt-3">
      <template v-slot:append>
        <b-input-group-text>
          <b-icon-search></b-icon-search>
        </b-input-group-text>
      </template>
      <b-form-input placeholder="Search for anything"></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
#search-component{
  input{
    border: none;
    background-color: transparent;
    &:focus{
      outline: none !important;
      border-color: inherit;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    &::placeholder{
      font-family: Avenir-Medium;
    }
  }
  .input-group-text{
    background-color: transparent;
    border: none;
  }
}
</style>