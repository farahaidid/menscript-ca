<template>
  <div>
    <!-- The Modal -->
    <div class="modal" id="header-modal">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <div class="container-fluid">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <div class="row">
                <div class="col-md-6 text-right">
                  <h4 @click="gohome"  class="modal-title">MENSCRIPT</h4>
                </div>
                <div class="col-md-6 text-right">
                  <router-link to class="nav-link" href="#">SEARCH</router-link>
                  <a   class="nav-link" @click="openCardModal">CARD</a>
                  <a  class="nav-link" @click="goAccount"
                    >ACCOUNT</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="container">
              <div class="row">
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
                  <img
                    src="@/assets/img/face.png"
                    alt=""
                    class="header-modal-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <CardModal />
  </div>
</template>

<script>
import CardModal from "@/components/CardModal";
export default {
  components:{
    CardModal
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

<style scoped lang="scss">
.modal-dialog.modal-xl {
  min-width: 100% !important;

  top: -29px !important;
  .a{
    color:black!important;

  }
  .modal-header {
    border: none !important;
  }
  h4.modal-title {
    width: auto;
   
    display: initial;
    cursor: pointer;
}
  .close {
    float: left !important;
    font-size: 25px !important;
    font-weight: 700;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
  }
  .nav-link {
    display: inline-block;
    color: black;
    font-family: Montserrat;
    cursor: pointer;
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
}
/* Small devices */
@media screen and (max-width: 640px) {
  .text-sm-center {
    text-align: center;
  }
  .pl {
    padding-left: 0px !important;
  }
  .pr {
    padding-right: 0px !important;
  }
  .modal-dialog.modal-xl {
    min-width: 100% !important;
    top: 203px !important;
   
}
 .modal-dialog.modal-xl li.link {
    font-size: 13px;
   
  }
img.header-modal-img {
    height: 262px !important;
    width: 306px;
}
  
}

/* medium phone  */
@media screen and (min-width: 641px) and (max-width: 768px) {
  img.header-modal-img {
      height: 350px!important;
      width: 60%;
    }
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
  img.header-modal-img {
    width: 100%;
    height: 75%;
}
}

/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) and (max-width: 1300px) {
  /* default style */
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1300px) {
  img.header-modal-img {
    max-height: 490px !important;
  }
}
</style>
