<template>
  <div>
    <nav :class="['navbar navbar-expand-md fixed-top mb-0', transparentBG && !showAppMenu ? 'bg-transparent' : 'main-back-color']" id="custom-navbar">
      <a @click="toggleAppMenu">
        <!-- <img src="../assets/img/Hamburger-icon.jpg" alt="hamburger" class="hamburger" v-if="!showAppMenu" /> -->
        <span class="hamburger" v-if="!showAppMenu">
          <svg height="7" width="35" style="display:block">
            <line x1="0" y1="0" x2="35" y2="0" style="stroke:rgb(0,0,0);stroke-width:2" />
          </svg>
          <svg height="7" width="35" style="display:block">
            <line x1="0" y1="0" x2="35" y2="0" style="stroke:rgb(0,0,0);stroke-width:2" />
          </svg>
          <svg height="7" width="35" style="display:block">
            <line x1="10" y1="0" x2="35" y2="0" style="stroke:rgb(0,0,0);stroke-width:2" />
          </svg>
        </span>
        <img src="../assets/img/cancel.png" alt="hamburger" class="close-app-menu-icon" v-if="showAppMenu" />
      </a>

      <!-- <h4 class=""> -->
        <router-link class="title brand-title mb-0" to="/">MENSCRIPT</router-link>
      <!-- </h4> -->

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
    },
    transparentBG: Boolean
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
  watch:{
    $route(v){
      this.showAppMenu = false
    }
  },
  computed:{
    mobileScreen(){
      return window.innerWidth < 768
    }
  },
  methods: {
    toggleAppMenu(){
      this.showAppMenu = !this.showAppMenu
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
nav#custom-navbar{
  height: 70px;
}
.navbar-dark .navbar-nav .nav-link {
  font-size: 16px;
  line-height: 48px;
  color: #212121 !important;
}
.brand-title{
  font-family: Metropolis-SemiBold;
  font-weight: normal;
  color: #424242 !important;
}
.title {
  font-size: 20px;
  line-height: 48px;
  color: #363636;
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
  font-family: Avenir-Medium;
  font-size: 14px;
}
li.link {
  list-style-type: none;
  margin-bottom: 8px;
  font-family: Avenir-Medium;
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
@media (min-width: 1450px) {
  .container.custom-margin {
    width: auto;
    padding-left: 23% !important;
  }
}
/* Extra large devices (large desktops, 1200px and up) */
@media screen and (max-width: 1450px) {
  li.nav-item {
    margin-left: 60px;
  }
  .container.custom-margin {
    width: auto;
    padding-left: 23% !important;
  }
}
/* Large devices (desktops, 992px and up) */
@media screen and (max-width: 1200px) {
  /* default style */
  .container.custom-margin {
    width: auto;
    padding-left: 23% !important;
  }
  li.nav-item {
    margin-left: 38px;
  }
}
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (max-width: 991px) {
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
/* medium phone  */
@media screen and (max-width: 768px) {
  nav#custom-navbar{
    height: 50px;
  }
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

@media screen and (max-width: 768px){
  nav#custom-navbar{
    justify-content: start;
    align-items: center;
    .title{
      margin-left: auto;
      margin-right: auto;
    }
  }
}
/* Small devices */
@media screen and (max-width: 640px) {
  .brand-title{
    font-size: 14px;
    line-height: unset;
  }
  .container.custom-margin {
    width: 100%;
    padding-left: 0px;
    display: flex;
    justify-content: center;
  }
  .title {
    font-size: 16px;
    text-align: center !important;
  }
  li.nav-item {
    margin-left: 30px !important;
  }
  .go-back {
    left: 10%;
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
  }
}





</style>
