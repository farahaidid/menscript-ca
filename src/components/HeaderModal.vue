<template>
  <div>
    <!-- The Modal -->
    <div class="modal" id="header-modal">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <!-- Modal Header -->
          <!-- <div class="modal-header">
            <div class="container-fluid">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <div class="row">
              
                  <h4 @click="gohome"  class="modal-title">MENSCRIPT</h4> 
                <div class=" menu-nav ">
                  <router-link to class="nav-link" href="#">SEARCH</router-link>
                  <a   class="nav-link" @click="openCardModal">CART</a>
                  <a  class="nav-link" @click="goAccount"
                    >ACCOUNT</a
                  >
                </div>
              </div>
            </div>
          </div> -->

          <!-- Modal body -->
          <div class="modal-body">
            <app-menu />
          </div>
        </div>
      </div>
    </div>
      <CardModal />
  </div>
</template>

<script>
import CardModal from "@/components/CardModal";
import AppMenu from "@/components/AppMenu"
export default {
  components:{
    CardModal,
    AppMenu
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
/* .modal-content {
  background-color: transparent;
} */
.modal-dialog.modal-xl {
  min-width: 101% !important;

  top: -29px !important;
  .a{
    color:black!important;

  }
  .modal-header {
    border: none !important;
   
  }
  h4.modal-title {
    font-size: 20px;
    line-height: 40px;
    color: #363636;
    font-family: "Montserrat";
    display: initial;
   
    cursor: pointer;
    
    display: flex;
    flex: 1.094;
    justify-content: flex-end;
}
  .close {
    font-size: 32px !important;
    top: 22px;
    position: absolute;
    left: 3px;
  }
  .menu-nav {
   
   display: flex;
    margin-top: auto;
    flex:1;
    justify-content: flex-end;
}
  .nav-link{
    display: inline-block;
    font-family: Montserrat;
    cursor: pointer;
    font-size: 14px;
    color: #2f2f2f;
    font-family: "Montserrat";
    margin-left: 63px;
    margin-right: 10px;
    margin-top: 6px;
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
    .modal-dialog.modal-xl .nav-link{
    margin-left: 0px;
}
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
  img.header-modal-img {
    width: 100%;
    height: 75%;
}
.modal-dialog.modal-xl .nav-link{
    margin-left: 0px;
}
}

/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .modal-dialog.modal-xl h4.modal-title{
    width: 56%;
    }
 .modal-dialog.modal-xl .nav-link{
    margin-left: 16px;
}
}

/* Extra large devices (large desktops, 1200px and up) */
@media screen and (min-width: 1201px) and (max-width: 1450px) {
  img.header-modal-img {
    max-height: 490px !important;
  }
   .modal-dialog.modal-xl .nav-link{
    margin-left: 38px;
}
}
@media screen and (min-width: 1451px) and (max-width: 1800px) {
  img.header-modal-img {
    max-height: 490px !important;
  }
  
}
</style>
