<template>
  
  <div>
       <Account class="account-page" :data="Bestellingen"/>
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
        list:[
                    {title: 'Overicht', to : '',},
                    {title: 'Abonnement', to :'account',},
                    {title: 'Bestellingen', to :'Bestellingen',},
                    {title: 'Addressen', to :'',},
                    {title: 'Logout', to :'',},
                  
                ],
        thead:["Order#","Datum","Bataalststus","Gp status","Verzendststus","Invoice"],
        items: [
          { ID: 'HL89', Product: 'HL001', Begindatum: '02 febr 2020',Frequentie:'Iedere maand',Amount:'$39',Status:'Active', _cellVariants: { status: 'text-bold',} },
          { ID: 'HL89', Product: 'HL001', Begindatum: '02 febr 2020',Frequentie:'Iedere maand',Amount:'$39',Status:'Cancelled' },
          { ID: 'HL89', Product: 'HL001', Begindatum: '02 febr 2020',Frequentie:'Iedere maand',Amount:'$39',Status:'Active' },
         
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

</style>