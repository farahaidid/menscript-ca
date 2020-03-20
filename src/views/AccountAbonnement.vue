<template>
  
  <div>
       <Account class="product-page" :data="Abonnement"/>
  </div>
</template>

<script>
import Account from "../components/Account";

export default {
components:{
    Account
    
},
data(){
    return{
        Abonnement: {
        title: "Abonnement",
        list:["Overicht","Abonnement","Bestellingen","Addressen","Logout"],
        thead:["ID","product","Bestellingen","Frequentie","Amount","Status"]

       
      },

    }
}

}
</script>

<style>

</style>