<template>
  <div>
    <AppHeader/>
    <!-- <AppBanner /> -->
    <router-view />
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
