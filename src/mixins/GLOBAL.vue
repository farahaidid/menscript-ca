<template>
<div></div>
</template>

<script>
export default {
  computed:{
    isMobile(){
      return window.innerWidth < 768
    }
  },
  methods:{
    scrollToSection(id, marginTopProxy = 0) {
      var element = document.getElementById(id);
      var top = element.offsetTop;
      window.scrollTo(0, top - marginTopProxy);
    }
  },
}
</script>

<style>

</style>