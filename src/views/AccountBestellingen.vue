<template>
  <div>
     <Bestellingen class="account-page" :data="Bestellingen"/>
   
  </div>
</template>
<script>
//import Account from "../components/Account";
import Bestellingen from "../components/account/Bestellingen"

export default {
components:{
    //Account,
    Bestellingen
    
},
data(){
  return{
      Bestellingen: {
        title: "Bestellingen",
        list:[
              {title: 'Overicht', to : '',},
              {title: 'Abonnement', to :'account',},
              {title: 'Bestellingen', to :'Bestellingen',},
              {title: 'Addressen', to :'',},
              {title: 'Logout', to :'',},
            ],
       fields: [
        { key: "Order", label: "Order#",  thClass: 'th1class', tdClass: 'td2class', },
        { key: "Datum", label: "Datum",  thClass: 'th1class', tdClass: 'td2class', },
        { key: "Bataalststus", label: "Bataalststus",  thClass: 'th1class', tdClass: 'td2class', },
        { key: "Gpstatus", label: "Gp status",  thClass: 'th1class', tdClass: 'td2class', },
        { key: "Verzendststus", label: "Verzendststus",  thClass: 'th1class', tdClass: 'td2class', },
        { key: "Invoice", label: "Invoice",  thClass: 'th1class', tdClass: 'td2class', },
        ],
        items: [
          { Order: '3456', 
          Datum: '2 feb 2020', 
          Bataalststus: 'Payed',
          Gpstatus:'accepted',
          Verzendststus:'shipped',
          Invoice:'View', 
          
         },       
          { Order: '5678', 
          Datum: '2 feb 2020', 
          Bataalststus: 'unpaid',
          Gpstatus:'pending',
          Verzendststus:'pending',
          Invoice:'View', 
          
         },       
          { Order: '5678', 
          Datum: '2 feb 2020', 
          Bataalststus: 'unpaid',
          Gpstatus:'pending',
          Verzendststus:'pending',
          Invoice:'View', 
          
         },       
        ],
      },
  }
}

}
</script>

<style scoped lang="scss">
.account-page {
    background-color: #fbfbfa;
    padding-top: 242px;
    padding-bottom: 170px;
}
td.td2class {
    font-size: 18px;
    line-height: 72px;
    color: #171717;
    font-family: Avenit Medium;
}


</style>