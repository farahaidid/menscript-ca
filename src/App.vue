<template>
  <div id="app">
    <LoginModal @close="closeLoginModal" v-if="showLoginModal" />   
    <div v-else>
      <router-view />
    </div>
  </div>
</template>
<script>
import LoginModal from "@/components/LoginModal";
import EventBus from "@/plugins/eventBus";
export default {
  name: "App",
  components: {
   LoginModal,
  },
  data: () => ({
    showLoginModal: false,
    ShowCardModal:false,
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

<style lang="scss">
@import "./style/style.scss";
/* FONT INPORT */

/** Avenir - Start */
@font-face {
  font-family: 'Avenir Heavy';
  src: url("./assets/font/AEH.ttf");
}
/** Avenir - End */

@font-face {
  font-family: 'Myriad-Pro-Regular';
  src: url("./assets/font/MYRIADPRO-REGULAR.OTF");
}
</style>
