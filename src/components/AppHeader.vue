<template>
  <div>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top mb-0" id="custom-navbar">
      <a @click="toggleAppMenu">
        <img src="../assets/img/Hamburger-icon.jpg" alt="hamburger" class="hamburger" id="icon" v-if="!showAppMenu" />
        <img src="../assets/img/cancel.png" alt="hamburger" class="close-app-menu-icon" v-if="showAppMenu" />
      </a>

      <h4 class="title">
        <router-link to="/">MENSCRIPT</router-link>
      </h4>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <img src="../assets/img/Hamburger-icon.jpg" alt="hamburger" class="hamburger"/>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to class="nav-link" href="#">SEARCH</router-link>
          </li>
          <li class="nav-item" @click="openCardModal">
            <router-link to class="nav-link" href="#">CART</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/account" class="nav-link">ACCOUNT</router-link>
          </li>
          <app-menu v-if="mobileScreen" />
        </ul>
      </div>
    </nav>
    <app-menu v-if="showAppMenu" :absolute="true" />
    <CardModal />
  </div>
</template>

<script>
import EventBus from "@/plugins/eventBus";
import CardModal from "@/components/CardModal";
import AppMenu from "@/components/AppMenu"

export default {
  props: {
    goback: {
      type: String
    }
  },
  components: {
    CardModal,
    AppMenu
  },
  data(){
    return {
      showAppMenu: false
    }
  },
  computed:{
    mobileScreen(){
      return window.innerWidth < 768
    }
  },
  methods: {
    toggleAppMenu(){
      if(!this.mobileScreen) this.showAppMenu = !this.showAppMenu
    },
    openLoginModal() {
      EventBus.$emit("open-login-modal");
    },
    openCardModal() {
      $("#card-modal").modal("show");
    },
    /*  goHome() {
      
      this.$router.push("/");
    }, */
    openHeaderModal() {
      $("#header-modal").modal("show");
    },
    goblog() {
      this.$router.push({ path: "blog" });
    }
  }
};
</script>

<style lang="scss" scoped>
nav#custom-navbar {
  background-color: #fff !important;
}

.navbar-dark .navbar-nav .nav-link {
  font-size: 14px;
  line-height: 48px;
  color: #2f2f2f;
  font-family: "Montserrat Semibold";
}
.title {
  font-size: 20px;
  line-height: 48px;
  color: #363636;
  font-family: "Montserrat Semibold";
  width: 50%;
  text-align: end;
}
li.nav-item {
  margin-left: 89px;
}

.header-sm-modal {
  display: none;
}
.nav-link {
  display: inline-block;
  color: black;
  font-family: Montserrat;
}
li.link {
  list-style-type: none;
  margin-bottom: 8px;
  font-family: Avenir Medium;
  cursor: pointer;
}
a.dropdown-link {
  display: block;
  /* background-color: red; */
  width: 100px;
  /* left: 32px; */
  margin-left: 37px;
  color: black;
  text-decoration: none;
}
.navbar-nav {
  margin-left: auto !important;
}

.close-app-menu-icon{
  width:25px;
  height:24px;
  margin: 0 5px;
}

.hamburger , .close-app-menu-icon{
  cursor: pointer;
}

/* responsive  */
/* Small devices */
@media screen and (max-width: 640px) {
  .container.custom-margin {
    width: 100%;
    padding-left: 0px;
    display: flex;
    justify-content: center;
  }
  .title {
    font-size: 25px;
    text-align: center !important;
  }
  li.nav-item {
    margin-left: 30px !important;
  }
  .go-back {
    left: 10%;
  }
  img#icon {
    visibility: hidden;
  }
  .header-sm-modal {
    display: block;
  }
  .navbar-collapse {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center;
    overflow: scroll;
    height: 100vh;
  }
  img.header-modal-img {
    height: 262px !important;
    width: 306px;
  }
  .navbar-dark .navbar-nav .nav-link {
    font-size: 16px !important;
    line-height: 20px;
    color: #2f2f2f;
    font-family: "Montserrat";
  }
}
/* medium phone  */
@media screen and (min-width: 641px) and (max-width: 768px) {
  li.nav-item {
    margin-left: 2%;
  }
  .title {
    font-size: 25px;
    text-align: center !important;
  }
  .go-back {
    left: 10%;
  }
  img#icon {
    visibility: hidden;
  }
  .header-sm-modal {
    display: block;
  }
  img.header-modal-img {
    height: 350px !important;
    width: 60%;
  }
  .navbar-collapse {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center;
    overflow: scroll;
    height: 100vh;
  }
  .container.custom-margin {
    display: flex;
    justify-content: center;
  }
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .container.custom-margin {
    display: flex;
    justify-content: flex-end !important;
  }
  li.nav-item {
    margin-left: 17px;
  }

  .container.custom-margin {
    /* text-align: center; */
    display: flex;
    justify-content: center;
  }
  .go-back {
    left: 12%;
  }
}
/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) and (max-width: 1200px) {
  /* default style */
  .container.custom-margin {
    width: auto;
    padding-left: 23% !important;
  }
  li.nav-item {
    margin-left: 38px;
  }
}
/* Extra large devices (large desktops, 1200px and up) */
@media screen and (min-width: 1200px) and (max-width: 1450px) {
  li.nav-item {
    margin-left: 60px;
  }
  .container.custom-margin {
    width: auto;
    padding-left: 23% !important;
  }
}
@media (min-width: 1450px) {
  .container.custom-margin {
    width: auto;
    padding-left: 23% !important;
  }
}
</style>
