<template>
  <div id="invoice-div">
    <div class="row">
      <div class="col-5">
        <div class="row">
          <div class="col-6">
            <p class="avenirheavy head-title mb-5">INVOICE ID</p>
          </div>
          <div class="col-6">
            <p class="avenirheavy head-title mb-5">29390</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row invoice-address mx-0">
      <div class="col-3 px-0">
        <p class="avenirheavy mb-0 head-title">To</p>
      </div>
      <div class="col-3 px-0">
        <p class="avenirheavy mb-0 head-title">FROM</p>
      </div>
      <div class="col-1 px-0">
        <p class="avenirheavy mb-0 head-title"></p>
      </div>
      <div class="col-3 px-0 text-right">
        <p class="avenirheavy mb-0 head-title"></p>
      </div>
      <div class="col-2 px-0">
        <p class="avenirheavy mb-0 head-title">DATE</p>
      </div>
    </div>
    <div class="row invoice-address mx-0 mt-5 pb-3">
      <div class="col-3 px-0">
        <p class="avenirmedium subhead mb-0 text-muted">Remi Llewellyn-Huntley</p>
        <p class="avenirmedium subhead mb-0 text-muted">Warmoestraat 43</p>
        <p class="avenirmedium subhead mb-0 text-muted">1106KG, AMSTERDAM</p>
        <p class="avenirmedium subhead mb-0 text-muted">NEDERLAND</p>
      </div>
      <div class="col-3 px-0">
        <p class="avenirmedium subhead mb-0 text-muted">MENSCRIPT</p>
        <p class="avenirmedium subhead mb-0 text-muted">Warmoestraat 43</p>
        <p class="avenirmedium subhead mb-0 text-muted">1106KG, AMSTERDAM</p>
        <p class="avenirmedium subhead mb-0 text-muted">NEDERLAND</p>
      </div>
      <div class="col-1 px-0">
        <p class="avenirmedium subhead mb-0 text-muted">KVK</p>
        <p class="avenirmedium subhead mb-0 text-muted">BTW</p>
      </div>
      <div class="col-3 px-0">
        <p class="avenirmedium subhead mb-0 text-muted">77611896</p>
        <p class="avenirmedium subhead mb-0 text-muted">NL 0032 15312B81</p>
      </div>
      <div class="col-2 px-0">
        <p class="avenirmedium mb-0 head-title text-muted">02-03-2020</p>
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
  </div>
</template>

<script>
export default {
  props:{
    transaction: Object
  }
}
</script>

<style lang="scss" scoped>
#invoice-div{
  max-width: 1200px;
  padding-bottom: 100px;
  .head-title{
    font-size: 16px;
    line-height: 48px;
  }
  .subhead{
    font-size: 14px;
  }
  .product-tabular{
    border-bottom: 1px solid black;
  }
  .line-height-unset{
    line-height: unset !important;
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