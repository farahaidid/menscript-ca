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

@media screen and (max-width: 768px) {
  #account-div{
    .account-sidebar-comp{
      position: unset;
    }
    .content{
      margin-left: 0;
      padding: 0 10px;
    }
  }
}
</style>