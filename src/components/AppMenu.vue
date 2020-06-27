<template>
  <div :class="['main-back-color',absolute ? 'app-menu':'', 'pb-3 pt-2']" :style="{top: isMobile ? '50px' : '70px'}">
    <div class="row container-fluid mx-0 mx-md-auto px-0 px-md-2" style="max-width: 1500px">
      <div class="col-md-4 col-xl-6 pl-0 pl-md-5 pr-0 pr-md-2">
        <p class="ml-3 ml-md-0">MENU</p>
        <hr class="d-block d-md-none">
        <search-comp class="d-block d-md-none" />
        <hr class="d-block d-md-none">
        <ul class="ml-5 ml-md-0">
          <li class="link">
            <router-link class="link-cat" to="/category">HAIR</router-link>
            <div class="dropdown-content">
              <a href="#" class="dropdown-link"> finasteride</a>
              <a href="#" class="dropdown-link">minoxidil</a>
              <a href="#" class="dropdown-link">shampoo</a>
              <a href="#" class="dropdown-link">conditioner</a>
            </div>
          </li>
          <li class="link">
            <router-link class="link-cat" to="/category">SKIN</router-link>
            <div class="dropdown-content">
              <a href="#" class="dropdown-link">daycream</a>
              <a href="#" class="dropdown-link">nightcream</a>
              <a href="#" class="dropdown-link">tretinoin</a>
            </div>
          </li>
          <li class="link link-cat grey-text" @click="goblog"> BLOG </li>
          <!-- <li class="link link-cat grey-text">OVER ONS</li> -->
          <li class="link link-cat grey-text">CONTACT</li>
        </ul>
      </div>

      <div class="mt-5 d-block d-md-none text-center w-100">
        <ul class="ml-0">
          <li class="link link-cat">
            <router-link to class="nav-link" href="#">SEARCH</router-link>
          </li>
          <li class="link link-cat" @click="openCardModal">
            <router-link to class="nav-link" href="#">CART</router-link>
          </li>
          <li class="link link-cat">
            <router-link to="/account" class="nav-link">ACCOUNT</router-link>
          </li>
        </ul>
      </div>
      <!-- <div class="col-md-4 col-lg-3 pr-lg-0 pr-md-0 text-sm-center">
        
      </div> -->
      <div class="col-md-8 col-xl-6 pl-lg-0 pl-md-0 text-sm-center d-none d-md-flex">
        <img
          src="@/assets/img/category-2.jpg"
          alt="header-modal-img"
          class="header-modal-img"
          style="width: 350px;height: 480px;"
        />
        <img src="@/assets/img/face.png" alt="" class="header-modal-img" style="width: 350px;height: 480px;" />
      </div>
    </div>
  </div>
</template>

<script>
import GLOBAL from "@/mixins/GLOBAL"
import SearchComp from "@/components/SearchComp"
export default {
  mixins: [GLOBAL],
  components:{
    SearchComp
  },
  props:{
    absolute:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    goblog(){
       $("#header-modal").modal("hide");
        this.$router.push({path:'blog'});
    },
    gohome(){
       $("#header-modal").modal("hide");
      this.$router.push({path:'/'});
    },
     openCardModal() {
      $("#header-modal").modal("hide");
      $("#card-modal").modal("show");
    },
    goAccount(){
       $("#header-modal").modal("hide");
        this.$router.push({path:'account'});
    }
  }
};
</script>

<style scoped>
.app-menu{
  position: fixed;
  width: 100%;
  z-index: 999;
  overflow: scroll;
}
  li.link {
    list-style-type: none;
    margin-bottom: 8px;
    font-family: Avenir-Medium;
    cursor: pointer;
  }
  a.dropdown-link {
    display: block;
    width: 100px;
    margin-left: 87px;
    color: grey !important;
    text-decoration: none;
    font-family: Avenir-Medium;
    font-size: 24px;
  }

  .link-cat{
    font-family: Avenir-Medium !important;
    font-size: 24px !important;
    color: black;
  }
  .grey-text{
    color: grey;
  }

  @media screen and (max-width: 768px) {
    .app-menu{
      top: 50px;
      height: 100vh;
      overflow: scroll;
    }
    .link-cat, .nav-link{
      font-size: 16px;
    }
    a.dropdown-link {
      font-size: 14px;
    }
  }
</style>
