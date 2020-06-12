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
    LoginModal
  },
  data: () => ({
    showLoginModal: false,
    ShowCardModal: false
  }),
  created() {
    EventBus.$on("open-login-modal", () => {
      this.showLoginModal = true;
    });
  },
  methods: {
    closeLoginModal() {
      this.$router.push("/");
      this.showLoginModal = false;
    }
  }
};
</script>

<style lang="scss">
@import "./style/style.scss";
/* FONT INPORT */

/** Avenir - Start */
@font-face {
  font-family: "Avenir Heavy";
  src: url("./assets/font/AEH.ttf");
}
@font-face {
  font-family: "Avenir-Book";
  src: url("./assets/font/AvenirLTStd-Book.otf");
}
@font-face {
  font-family: "Avenir-Black";
  src: url("./assets/font/AvenirLTStd-Black.otf");
}
/** Avenir - End */

@font-face {
  font-family: "Myriad-Pro-Regular";
  src: url("./assets/font/MYRIADPRO-REGULAR.OTF");
}
@font-face {
  font-family: "Metropolis-SemiBold";
  src: url("./assets/font/Metropolis-SemiBold.otf");
}
@font-face {
  font-family: "Metropolis-SemiBold-Italic";
  src: url("./assets/font/Metropolis-SemiBoldItalic.otf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box !important;
}
body {
  background-color: #fbfbfa;
  font-family: "Avenir Black";
}
h1,
h2 {
  font-family: "Avenir Black";
  color: black;
}
p {
  font-family: "Avenir Medium";
  font-size: 18pt;
  color: black;
}
.main-back-color{
  background-color: #fbfbfa;
}
</style>
