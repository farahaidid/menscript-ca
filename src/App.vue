<template>
  <div id="app">
    <!-- Modals -->
    <LoginModal @close="closeLoginModal" v-if="showLoginModal" />

    <!-- Contents -->
    <div v-else>
      <!-- <AppHeader /> -->
      <router-view />
      <!-- <AppFooter /> -->
    </div>
  </div>
</template>
<script>
//import AppFooter from "@/components/AppFooter";
//import AppHeader from "@/components/AppHeader";
import LoginModal from "@/components/LoginModal";
import EventBus from "@/plugins/eventBus";
export default {
  name: "App",
  components: {
   LoginModal,
  },
  data: () => ({
    showLoginModal: false
  }),
  created() {
    EventBus.$on("open-login-modal", () => {
      this.showLoginModal = true;
    });
  },
  methods:{
     closeLoginModal(){
        this.$router.push("/")
        this.showLoginModal = false
     }
  },
};
</script>
