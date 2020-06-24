<template>
   <div id="login-modal">
      <header>
         <i class="c-close fal fa-times" @click="close"></i>
         <h5 class="app-name">MENSCRIPT</h5>
         <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
               <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav">
                     <li
                        v-for="(item,i) in navItems"
                        :key="i"
                        @click="activeTab=item"
                        :class="activeTab==item&&'active'"
                        class="nav-item mx-1"
                     >
                        <router-link :to="`/${item.toLowerCase()}`" class="nav-link">{{item}}</router-link>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </header>
      <Login v-if="activeTab=='Login'" />
      <Consult v-else-if="activeTab=='Consult'" />
      <Voorkeur v-else-if="activeTab=='Voorkeur'" />
      <Verificate v-else-if="activeTab=='Verificate'" />
      <Betaling v-else-if="activeTab=='Betaling'" />
   </div>
</template>

<script>
// Components
import Login from "./Login";
import Consult from "./Consult";
import Voorkeur from "./Voorkeur";
import Verificate from "./Verificate";
import Betaling from "./Betaling";

export default {
   name: "login-modal",
   components: {
      Login,
      Consult,
      Voorkeur,
      Verificate,
      Betaling
   },
   data: () => ({
      activeTab: "Login",
      navItems: ["Login", "Consult", "Voorkeur", "Verificate", "Betaling"]
   }),
   created(){
      this.handleLoginModalRoute()
   },
   methods:{
      handleLoginModalRoute(){
         let path = this.$route.path
         if(path != "/"){
            let str = path.replace("/","")
            this.activeTab = str.charAt(0).toUpperCase() + str.slice(1)
         }
      },
      close(){
         this.$emit('close')
      },
   },
};
</script>

<style lang="scss" scoped>
#login-modal {
   position: fixed !important;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: #fbfbfa;
   overflow-y: auto;
   li a {
      color: #c1c4c6 !important;
   }
   li.active a {
      color: #2f2f2f !important;
   }
   .c-close {
      position: absolute;
      font-size: 1.5em;
      top: 1rem;
      left: 1.6rem;
      color: #bdbdbd;
      &:hover {
         color: #424242;
      }
   }
   .app-name {
      position: absolute;
      top: 1.5rem;
      font-size: 1.2em;
      color: #424242;
      left: 50%;
      letter-spacing: 1px;
      transform: translate(-50%, -50%);
      z-index: 10;
      font-family: Metropolis-SemiBold;
   }
}

@media screen and (max-width: 991px) {
   #login-modal {
      .c-close {
         left: unset;
         right: 1.6rem;
      }
      .container {
         margin: 0 !important;
      }
   }
}
@media screen and (min-width: 992px) and (max-width: 1200px) {
   #login-modal {
      .app-name {
         left: calc(50% + 2rem);
      }
   }
}

@media screen and (max-width: 768px) {
   .navbar{
      .navbar-toggler{
         border: none;
         padding: 0;
      }
   }
   .c-close{
      position: unset !important;
      float: right;
      padding-top: 10px;
      padding-right: 20px;
   }
}
</style>