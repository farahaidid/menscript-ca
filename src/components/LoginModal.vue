<template>
   <div id="login-modal">
      <header>
         <i @click="$emit('close')" class="c-close fal fa-times"></i>
         <h5 class="app-name">MENSCRIPT</h5>
         <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-white pt-3">
               <ul class="navbar-nav">
                  <li
                     @click="activeTab='Login'"
                     class="nav-item mx-1"
                     :class="activeTab=='Login'&&'active'"
                  >
                     <router-link to="/login" class="nav-link">Login</router-link>
                  </li>
                  <li
                     @click="activeTab='Consult'"
                     class="nav-item mx-1"
                     :class="activeTab=='Consult'&&'active'"
                  >
                     <router-link to="/consult" class="nav-link">Consult</router-link>
                  </li>
                  <li class="nav-item mx-1">
                     <router-link to="/anbeveling" class="nav-link">Anbeveling</router-link>
                  </li>

                  <li class="nav-item mx-1">
                     <router-link to="/verificatie" class="nav-link">Verificatie</router-link>
                  </li>
                  <li class="nav-item mx-1">
                     <router-link to="/betaling" class="nav-link">Betaling</router-link>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
      <Login v-if="activeTab=='Login'" />
      <Consult v-else-if="activeTab=='Consult'" />
   </div>
</template>

<script>
// Components
import Login from "./Login";
import Consult from "./Consult";

export default {
   name: "login-modal",
   components: {
      Login,
      Consult
   },
   data: () => ({
      activeTab: "Consult"
   })
};
</script>

<style lang="scss" scoped>
#login-modal {
   position: fixed !important;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: white;
   overflow-y: auto;
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
   }
}
</style>