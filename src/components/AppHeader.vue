<template>
   <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top" id="custom-navbar">
         <a class="navbar-brand" href="#" @click="openHeaderModal">
            <img src="../assets/img/Hamburger-icon.jpg" alt="hamburger" class="hamburger" id="icon" />
         </a>
         <div v-if="goback=='true'" class="go-section">
           <p class="go-back " @click="goblog">
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
                     <h4 > 
                       <router-link to="/">MENSCRIPT</router-link>
                         </h4>
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
               <div class="header-sm-modal">
                  <div class="row">
                <div class="col-md-6 pl-5">
                  <p>MENU</p>
                  <ul>
                    <li class="link">
                      HAIR
                      <div class="dropdown-content">
                        <a href="#" class="dropdown-link"> finasteride</a>
                        <a href="#" class="dropdown-link">minoxidil</a>
                        <a href="#" class="dropdown-link">shampoo</a>
                        <a href="#" class="dropdown-link">conditioner</a>
                      </div>
                    </li>
                    <li class="link">
                      SKIN
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
   methods:{
      openLoginModal(){
         EventBus.$emit("open-login-modal")
        
      },
      openCardModal(){
        
         $("#card-modal").modal("show");
      },
      goHome(){
         EventBus.$emit("open-card-modal")
         this.$router.push("/")
      },
      openHeaderModal(){
       
         $("#header-modal").modal("show");
         
      },
      goblog(){
         this.$router.push({path:'blog'})
         
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
    cursor: pointer;
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

/* responsive  */
/* Small devices */
@media screen and (max-width: 640px) {
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
.header-sm-modal {
    display: block;
}
img.header-modal-img {
      height: 350px!important;
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
