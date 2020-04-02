<template>
  <div>
    <AppHeader/>
    <!-- <AppBanner /> -->
    <router-view  style="margin-top:70px"/>
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
