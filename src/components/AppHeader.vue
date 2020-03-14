<template>
   <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top" id="custom-navbar">
         <a class="navbar-brand" href="#">
            <img src="../assets/img/Hamburger-icon.jpg" alt="hamburger" class="hamburger" id="icon" />
         </a>

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
                     <h4>MENSCRIPT</h4>
                  </div>
               </div>
            </div>

            <ul class="navbar-nav">
               <li class="nav-item">
                  <router-link to class="nav-link" href="#">SEARCH</router-link>
               </li>
               <li class="nav-item">
                  <router-link to="/category" class="nav-link" href="#">CARD</router-link>
               </li>
               <li @click="openLoginModal" class="nav-item">
                  <router-link to class="nav-link" href="#">ACCOUNT</router-link>
               </li>
            </ul>
         </div>
      </nav>
   </div>
</template>

<script>
import EventBus from "@/plugins/eventBus"
export default {
   methods:{
      openLoginModal(){
         EventBus.$emit("open-login-modal")
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

/* responsive  */

@media (min-width: 768px) {
   li.nav-item {
      margin-left: 2%;
   }
}
@media (min-width: 1200px) {
   li.nav-item {
      margin-left: 89px;
   }
}
@media screen and (max-width: 767px) {
   #icon {
      display: none;
   }
   .container.custom-margin {
      /* text-align: center; */
      display: flex;
      justify-content: center;
   }
}
</style>
