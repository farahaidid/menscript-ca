<template>
  <div>
    <AppHeader :transparentBG="true" />
    <router-view />
    <AppFooter/>
  </div>
</template>
<script>
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
export default {
  components:{
    AppHeader,
    AppFooter

  }
  
}
</script>
