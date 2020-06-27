<template>
  <div id="current-treatment-plan-table-div">
    <b-table responsive :items="filteredTransactions" :borderless="true" :fields="fields" @row-clicked="onRowClicked">
      <!-- <template v-slot:cell(id)="row">
      </template> -->
    </b-table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      fields: [
        { key: "orderId", label: "Order ID", tdClass: "avenirmedium font-16 white-space-no-wrap", thClass: "avenirheavy font-16 font-normal white-space-no-wrap"},
        { key: "datum", label: "Datum", tdClass: "avenirmedium font-16 white-space-no-wrap", thClass: "avenirheavy font-16 font-normal white-space-no-wrap"},
        { key: "payment", label: "Payment", tdClass: "avenirmedium font-16 white-space-no-wrap", thClass: "avenirheavy font-16 font-normal white-space-no-wrap"},
        { key: "gpStatus", label: "GP status", tdClass: "avenirmedium font-16 white-space-no-wrap", thClass: "avenirheavy font-16 font-normal white-space-no-wrap"},
        { key: "shipment", label: "Shipment", tdClass: "avenirmedium font-16 white-space-no-wrap", thClass: "avenirheavy font-16 font-normal white-space-no-wrap"},
      ],
      transactions: [
        { orderId: 'HL001-29389', datum: '01-02-2020', payment: 'Pending payment', gpStatus: 'Accepted', shipment: 'Shipped' },
        { orderId: 'HL001-29389', datum: '01-02-2020', payment: 'Pending payment', gpStatus: 'Accepted', shipment: 'Shipped' },
        { orderId: 'HL001-29389', datum: '01-02-2020', payment: 'Pending payment', gpStatus: 'Accepted', shipment: 'Shipped' },
        { orderId: 'HL001-29389', datum: '01-02-2020', payment: 'Pending payment', gpStatus: 'Accepted', shipment: 'Shipped' },
      ]
    }
  },
  computed:{
    filteredTransactions(){
      return this.transactions
    },
  },
  methods:{
    onRowClicked(item, index, event){
      this.gotoTransactionPage()
    },
    gotoTransactionPage(){
      this.$router.push({path: '/account/invoice'})
    },
  },
}
</script>

<style>

</style>