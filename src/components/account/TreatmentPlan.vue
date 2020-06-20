<template>
  <div id="treatment-plan-div">
    <div class="row">
      <div class="col-5">
        <div class="row">
          <div class="col-6">
            <p class="avenirheavy head-title mb-5">ID</p>
            <p class="avenirheavy head-title line-height-unset mb-0">Status</p>
            <p class="avenirheavy head-title line-height-unset mb-0">Date</p>
            <p class="avenirheavy head-title line-height-unset mb-0">Issue</p>
            <p class="avenirheavy head-title line-height-unset mb-0">Frequency</p>
          </div>
          <div class="col-6">
            <p class="avenirheavy head-title mb-5">HL0001</p>
            <p class="avenirbook subhead line-height-unset mb-0">Active</p>
            <p class="avenirbook subhead line-height-unset mb-0">02-01-2020</p>
            <p class="avenirbook subhead line-height-unset mb-0">1</p>
            <p class="avenirbook subhead line-height-unset mb-0">every</p>
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="row mt-5">
          <div class="col-6">
            <p class="avenirheavy head-title line-height-unset mt-5 mb-0">Delivery</p>
          </div>
          <div class="col-6">
            <p class="avenirheavy subhead line-height-unset text-secondary mt-5 mb-0">Remi Llewellyn-Huntley</p>
            <p class="avenirheavy subhead line-height-unset text-secondary mb-0">Warmoestraat 43</p>
            <p class="avenirheavy subhead line-height-unset text-secondary mb-0">1106KG, AMSTERDAM</p>
            <p class="avenirheavy subhead line-height-unset text-secondary mb-0">NEDERLAND</p>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="row mt-5 justify-content-end">
          <p class="text-muted mt-5 avenirheavy head-title line-height-unset">
            <u>Change plan</u>
          </p>
        </div>
      </div>
    </div>

    <div class="row product-tabular mx-0">
      <div class="col-7 px-0">
        <p class="avenirheavy mb-0 head-title">Product</p>
      </div>
      <div class="col-1 px-0">
        <p class="avenirheavy mb-0 head-title">QTY</p>
      </div>
      <div class="col-2 px-0">
        <p class="avenirheavy mb-0 head-title">Price/unit</p>
      </div>
      <div class="col-2 px-0 text-right">
        <p class="avenirheavy mb-0 head-title">Subtotal</p>
      </div>
    </div>
    <div class="row product-tabular-info mx-0 mt-5 pb-3">
      <div class="col-7 px-0">
        <div class="img-sec d-inline-block">
          <img src="@/assets/img/category-2.jpg" alt />
        </div>
        <div class="product-name d-inline-block ml-3">
          <p class="avenirblack mb-0 line-height-unset head-title">Finasteride 1mg</p>
          <p class="avenirblack text-muted line-height-unset mb-0 subhead">30 tabletten</p>
        </div>
      </div>
      <div class="col-1 px-0 avenirmedium subhead">3</div>
      <div class="col-2 px-0 avenirmedium subhead">€23.12</div>
      <div class="col-2 px-0 avenirmedium subhead text-right">€69.36</div>
    </div>

    <div class="row calculation mx-0 mt-3 justify-content-end">
      <div class="col-5">
        <div class="subpart">
          <div class="row justify-content-between">
            <p class="avenirmedium head-title text-muted line-height-unset">Handling costs</p>
            <p class="avenirmedium head-title text-muted line-height-unset">€4.13</p>
          </div>
          <div class="row justify-content-between">
            <p class="avenirmedium head-title text-muted line-height-unset">Shipment with PostNL</p>
            <p class="avenirmedium head-title text-muted line-height-unset">Gratis</p>
          </div>
        </div>
        <div class="subpart">
          <div class="row justify-content-between">
            <h4 class="avenirheavy head-title">Totaal ex. VAT</h4>
            <h4 class="avenirheavy head-title">€73.49</h4>
          </div>
          <div class="row justify-content-between">
            <h4 class="avenirmedium head-title text-muted line-height-unset">VAT - 9%</h4>
            <h4 class="avenirmedium head-title text-muted line-height-unset">€2.08</h4>
          </div>
          <div class="row justify-content-between">
            <h4 class="avenirmedium head-title text-muted line-height-unset">VAT - 21%</h4>
            <h4 class="avenirmedium head-title text-muted line-height-unset">€0.87</h4>
          </div>
        </div>
        <div class="total">
          <div class="row justify-content-between">
            <h4 class="avenirheavy head-title">Totaal inc. VAT</h4>
            <h4 class="avenirheavy head-title">€30.20</h4>
          </div>
        </div>
      </div>
    </div>

    <section id="transactions" class="mt-5 mb-5">
      <div class="row justify-content-between mx-0 table-title">
        <h4 class="avenirheavy head-title">Transactions</h4>
      </div>
      <most-recent-transaction />
    </section>
  </div>
</template>

<script>
import MostRecentTransaction from "@/components/account/MostRecentTransaction"
export default {
  components:{
    MostRecentTransaction
  },
  props:{
    plan: Object
  }
}
</script>

<style lang="scss" scoped>
#treatment-plan-div{
  max-width: 1200px;
  padding-bottom: 100px;
  .head-title{
    font-size: 16px;
    line-height: 48px;
  }
  .subhead{
    font-size: 14px;
  }
  .line-height-unset{
    line-height: unset !important;
  }
  .product-tabular{
    border-bottom: 1px solid black;
  }
  .img-sec{
    height: 100px;
    width: 100px;
  }
  .product-tabular-info, .calculation .col-5 .subpart, #transactions .table-title{
    border-bottom: 1px solid #ebebeb;
  }
}
</style>