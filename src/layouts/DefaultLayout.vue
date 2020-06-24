<template>
  <div>
    <AppHeader/>
    <!-- <AppBanner /> -->
    <router-view  class="main-content"/>
    <AppFooter/>
  </div>
</template>
<script>
// import AppBanner from "@/components/AppBanner"
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
export default {
  components: {
    AppHeader,
    // AppBanner,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
.main-content{
  margin-top: 70px;
}
@media screen and (max-width: 768px) {
  .main-content{
    margin-top: 50px;
  }
}
</style>
