<template>
  <div>
    <AppBanner />
    <router-view />
  </div>
</template>
<script>
import AppBanner from "@/components/AppBanner"
export default {
  components: {
    AppBanner
  }
};
</script>
