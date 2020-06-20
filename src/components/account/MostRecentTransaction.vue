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
        { key: "orderId", label: "Order ID", },
        { key: "datum", label: "Datum", },
        { key: "payment", label: "Payment", },
        { key: "gpStatus", label: "GP status", },
        { key: "shipment", label: "Shipment", },
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