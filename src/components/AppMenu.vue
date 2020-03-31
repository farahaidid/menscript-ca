<template>
  <div :class="[absolute ? 'app-menu':'', 'pb-3 pt-2']">
    <div class="row container mx-auto">
      <div class="col-md-6 pl-5">
        <p>MENU</p>
        <ul>
          <li class="link">
            <router-link to="/category">HAIR</router-link>
            <div class="dropdown-content">
              <a href="#" class="dropdown-link"> finasteride</a>
              <a href="#" class="dropdown-link">minoxidil</a>
              <a href="#" class="dropdown-link">shampoo</a>
              <a href="#" class="dropdown-link">conditioner</a>
            </div>
          </li>
          <li class="link">
            <router-link to="/category">SKIN</router-link>
            <div class="dropdown-content">
              <a href="#" class="dropdown-link">daycream</a>
              <a href="#" class="dropdown-link">nightcream</a>
              <a href="#" class="dropdown-link">tretinoin</a>
            </div>
          </li>
          <li class="link" @click="goblog">
            Blog
          </li>
          <li class="link">ABOUT</li>
          <li class="link">CONTACT US</li>
        </ul>
      </div>
      <div class="col-md-3 pr-lg-0 pr-md-0 text-sm-center">
        <img
          src="@/assets/img/category-2.jpg"
          alt="header-modal-img"
          class="header-modal-img"
        />
      </div>
      <div class="col-md-3 pl-lg-0 pl-md-0 text-sm-center ">
        <img src="@/assets/img/face.png" alt="" class="header-modal-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  margin-top: 48px;
  position: absolute;
  width: 100%;
  z-index: 10;
  background-color: #fff;
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
</style>
