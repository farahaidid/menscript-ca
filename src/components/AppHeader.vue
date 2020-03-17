<template>
   <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top" id="custom-navbar">
         <a class="navbar-brand" href="#" @click="openHeaderModal">
            <img src="../assets/img/Hamburger-icon.jpg" alt="hamburger" class="hamburger" id="icon" />
         </a>
         <div v-if="goback=='true'" class="go-section">
           <p class="go-back">
            <i class="fal fa-angle-left"></i><i class="fal fa-angle-left"></i
            ><i class="fal fa-angle-left"></i> Go back
          </p>
         </div>

         <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
         >
            <img src="../assets/img/Hamburger-icon.jpg" alt="hamburger" class="hamburger" />
         </button>

         <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <div class="container custom-margin">
               <div class="row">
                  <div class="col-sm-12 text-center">
                     <h4 @click="goHome">MENSCRIPT</h4>
                  </div>
               </div>
            </div>

            <ul class="navbar-nav">
               <li class="nav-item">
                  <router-link to class="nav-link" href="#">SEARCH</router-link>
               </li>
               <li class="nav-item" @click="openCardModal">
                  <router-link to class="nav-link" href="#">CARD</router-link>
               </li>
               <li @click="openLoginModal" class="nav-item">
                  <router-link to class="nav-link" href="#" >ACCOUNT</router-link>
               </li>
            </ul>
         </div>

      </nav>
      <CardModal/>
      <HeaderModal/>
   </div>
</template>

<script>
import EventBus from "@/plugins/eventBus"
import CardModal from "@/components/CardModal";
import HeaderModal from "@/components/HeaderModal";

export default {
   props:{
      goback:{
         type:String,
      }
   },
   components:{
      CardModal,
      HeaderModal

   },
   created(){
      console.log("goback",this.goback);
   },
   methods:{
      openLoginModal(){
         EventBus.$emit("open-login-modal")
         console.log("click");
      },
      openCardModal(){
         //EventBus.$emit("open-card-modal")
         console.log("card");
         $("#card-modal").modal("show");
      },
      goHome(){
         EventBus.$emit("open-card-modal")
         this.$router.push("/")
      },
      openHeaderModal(){
         console.log("openHeaderModal");
         $("#header-modal").modal("show");
         
      }
   }
};
</script>

<style scoped>
.container.custom-margin {
   width: auto;
   padding-left: 23% !important;
}
nav#custom-navbar {
   background-color: #fbfbfa !important;
   margin-bottom: 50px !important;
}
.navbar-dark .navbar-nav .nav-link {
   color: #2f2f2f;
   font-family: Montserrat;
}
li.nav-item {
   margin-left: 89px;
}
.go-back {
    font-size: 12px;
    position: absolute;
    z-index: 9999;
    top: 20px;
    left: 13%;
}

/* responsive  */
/* Small devices */
@media screen and (max-width: 640px) {
    .go-back {
    
    left: 10%;
}
img#icon {
    visibility: hidden;
}
}
/* medium phone  */
@media screen and (min-width: 641px) and (max-width: 768px) {
   li.nav-item {
      margin-left: 2%;
   }
   .go-back {
    
    left: 10%;
}
img#icon {
    visibility: hidden;
}
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
   
   li.nav-item[data-v-bb50a5e4] {
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
@media screen and (min-width: 992px) and (max-width: 1300px) {
    /* default style */
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1300px) {
   li.nav-item {
      margin-left: 89px;
   }
}
</style>
