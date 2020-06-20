<template>
  <div id="account-div">
    <AccountSidebar class="account-sidebar-comp" />
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import AccountSidebar from "@/components/account/AccountSidebar"
export default {
  components:{
    AccountSidebar
  }

}
</script>

<style lang="scss" scoped>
#account-div{
  padding-top: 100px !important;
  .account-sidebar-comp{
    position: absolute;
    left: 0;
  }
  .content{
    margin-left: 400px;
  }
}
</style>