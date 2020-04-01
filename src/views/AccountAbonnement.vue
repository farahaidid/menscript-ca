<template>
  <div>
     <Abonnement class="account-page" :data="Abonnement"/>
   
  </div>
</template>
<script>
//import Account from "../components/Account";
import Abonnement from "../components/account/Abonnement"

export default {
components:{
    //Account,
    Abonnement
    
},
data(){
  return{
      Abonnement: {
        title: "Abonnement",
       /*  list:["Overicht","Abonnement","Bestellingen","Addressen","Logout"], */
        list:[
                    {title: 'Overicht', to : '',},
                    {title: 'Abonnement', to :'account',},
                    {title: 'Bestellingen', to :'Bestellingen',},
                    {title: 'Addressen', to :'',},
                    {title: 'Logout', to :'',},
                  
                ],

      
         fields: [
           /* 'ID', 'Product', 'Begindatum', 'Frequentie', 'Amount','Status' */
           
        { key: "ID", label: "ID",  thClass: 'th1class', tdClass:'td2class' },
        { key: "Product", label: "Product",  thClass: 'th1class', tdClass: 'td2class', },
        { key: "Begindatum", label: "Begindatum",  thClass: 'th1class', tdClass: 'td2class', },
        { key: "Frequentie", label: "Frequentie",  thClass: 'th1class', tdClass: 'td2class', },
        { key: "Amount", label: "Amount",  thClass: 'th1class', tdClass: 'td2class',},
        { key: "Status", label: "Status",  thClass: 'th1class', tdClass: 'td2class',},
       
           
           ],
        items: [
          { ID: 'HL89', 
          Product: 'HL001', 
          Begindatum: '02 febr 2020',
          Frequentie:'Iedere maand',
          Amount:'$39',
          Status:'Active', 
          
         },

          { ID: 'HL89',
           Product: 'HL001',
            Begindatum: '02 febr 2020',
            Frequentie:'Iedere maand',
            Amount:'$39',
            Status:'Cancelled' ,
             
            },
          { ID: 'HL89', 
          Product: 'HL001',
           Begindatum: '02 febr 2020',
           Frequentie:'Iedere maand',
           Amount:'$39',
           Status:'Pending'
          }
           
         
        ],
         
       

      },
  }
}

}
</script>

<style scoped >
.account-page {
    background-color: #fbfbfa;
    padding-top: 242px;
    padding-bottom: 170px;
}
/* >>>.th1class{
    font-size: 18px!important;
    line-height: 72px!important;
    color: #171717!important;
    font-family: Avenir Medium!important;
}
>>>.td2class{
    font-size: 18px!important;
    line-height: 40px!important;
    color: #171717!important;
    font-family: Avenir heavy!important;
    background-color: red;
} */

</style>