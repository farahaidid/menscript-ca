<template>
   <div id="app">
      <!-- Modals -->
      <LoginModal @close="showLoginModal=false" v-if="showLoginModal" />

      <!-- Contents -->
      <div v-else>
         <AppHeader @login="showLoginModal=true" />
         <AppBanner />
         <router-view></router-view>
         <AppFooter />
      </div>
   </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
import AppBanner from "./components/AppBanner";
import AppFooter from "./components/AppFooter";
import LoginModal from "./components/LoginModal";
export default {
   name: "App",
   components: {
      AppHeader,
      AppBanner,
      AppFooter,
      LoginModal
   },
   data: () => ({
      showLoginModal: true
   })
};
</script>
