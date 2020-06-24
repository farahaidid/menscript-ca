<template>
  <div class="account-sidebar ml-0 d-inline-block px-2 px-md-5">
    <h4 class="mb-3 mb-md-5 avenirheavy my-acc-title">My Account</h4>
    <div class="row mb-3 mb-md-5 d-block d-md-none" v-if="$route.path == '/account'">
      <welcome-message />
    </div>
    <hr class="d-block d-md-none">
    <div class="sidebar-options" v-if="!showGoBack">
      <router-link class="d-inline-block d-md-block mb-3 avenirmedium link" to="/account">Overview</router-link>
      <router-link class="d-inline-block d-md-block mb-3 avenirmedium link" to="/account/treatment-plan">Treatmentplan</router-link>
      <router-link class="d-inline-block d-md-block mb-3 avenirmedium link" to>Addres</router-link>

      <p class="mt-0 mt-md-4 avenirmedium link">Loguit</p>
    </div>
    <div class="go-back" v-else>
      <p class="avenirmedium link" @click="goBack">{{gobackText}}</p>
    </div>
    <hr class="d-block d-md-none mt-0">
  </div>
</template>

<script>
import WelcomeMessage from "@/components/account/WelcomeMessage"
export default {
  components:{
    WelcomeMessage
  },
  data(){
    return {
      gobackText: '<<go back'
    }
  },
  computed:{
    showGoBack(){
      if(this.$route.path != '/account'){
        return true
      }
      return false
    },
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
.account-sidebar{
  width: 400px !important;
  h4.my-acc-title{
    font-size: 16px;
    line-height: 48px;
  }
  .link{
    font-size: 14px;
    line-height: 30px;
  }
  .go-back p{
    margin-left: 80px;
    margin-top: 50px;
  }
}

@media screen and (max-width: 768px) {
  .account-sidebar{
    width: 100% !important;
    .sidebar-options{
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      .link{
        text-decoration: underline;
        font-size: 16px;
      }
    }
  }
  .go-back{
    position: unset !important;
    top: 0 !important;
    p{
      margin-top: 10px !important;
    }
  }
}
</style>