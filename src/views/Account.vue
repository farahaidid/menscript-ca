<template>
  <div>
     <Account class="product-page" :data="Bestellingen"/>
   
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
      Bestellingen: {
        title: "Bestellingen",
        list:["Overicht","Abonnement","Bestellingen","Addressen","Logout"],
        thead:["Order#","Datum","Bataalststus","Gp status","Verzendststus","Invoice"]

       
      },
  }
}

}
</script>

<style>

</style>