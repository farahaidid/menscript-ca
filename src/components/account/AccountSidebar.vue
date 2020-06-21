<template>
  <div class="account-sidebar ml-0 d-inline-block px-5">
    <h4 class="mb-5 avenirheavy my-acc-title">My Account</h4>

    <div class="sidebar-options" v-if="!showGoBack">
      <router-link class="d-block mb-3 avenirmedium link" to="/account">Overview</router-link>
      <router-link class="d-block mb-3 avenirmedium link" to="/account/treatment-plan">Treatmentplan</router-link>
      <router-link class="d-block mb-3 avenirmedium link" to>Addres</router-link>

      <p class="mt-4 avenirmedium link">Loguit</p>
    </div>
    <div class="go-back" v-else>
      <p class="avenirmedium link" @click="goBack">{{gobackText}}</p>
    </div>
  </div>
</template>

<script>
export default {
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
</style>