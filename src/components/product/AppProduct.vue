<template>
  <div class="row mx-0">
    <div class="col-md-7 px-0">
      <div class="row position-relative mx-0">
        <p class="scroll d-none d-md-inline-block">scroll</p>
        <div class="col-6 p-0 m-0 mb-md-0 text_sm_center">
          <img src="@/assets/img/product2.png" alt="" class="product-img top-img" />
        </div>
        <div class="col-6 p-0 m-0  mb-md-0 text_sm_center">
          <img src="@/assets/img/product3.png" alt="" class="product-img top-img" />
        </div>
        <div class="col-7 p-0 m-0 text_sm_center">
          <img src="@/assets/img/product4.png" alt="" class="product-img bottom-img"/>
        </div>
        <div class="col-5 p-0 m-0 text_sm_center">
          <img src="@/assets/img/product5.png" alt="" class="product-img bottom-img"/>
        </div>
      </div>
    </div>
    <div class="col-md-5 mt-lg-5 mt-md-3 mb-0 mb-md-5">
      <div class="card-section sticky-header is-sticky position-relative mb-5 product-info-sec">
        <div class="product-name-and-btn text-center text-md-left">
          <p class="card-text mb-0 d-inline-block d-md-block">Minoxidil 5%</p>
          <span class="d-inline-block d-md-none mx-1"> - </span>
          <p class="card-subtext d-inline-block d-md-block">60 ml - €25.94</p>
          <div class="text-center d-block d-md-none">
            <button type="button" class=" w-100 btn btn-secondary   custom-btn">
              Start online consult
            </button>
          </div>
        </div>
        <hr class="d-block d-md-none mt-0 mb-5">
        <p class="card-subtitle mb-3">
          De enige haarlotion die goedgekeurd is door de FDA voor de behandeling van erfelijke haaruitval. 
        </p>
        <a class="card-subtitle d-none d-md-block" style="text-decoration:underline">  Bijsluiter</a>
        <div class="text-center d-none d-md-block">
          <button type="button" class="btn btn-secondary custom-btn">
            Start online consult
          </button>
        </div>
        <ul class="list-group">
          <li class="list-group-item"> <i class="fa fa-check mr-2"></i>Gratis verzending</li>
          <li class="list-group-item"> <i class="fa fa-check mr-2"></i>Herhaalrecepten automatisch verzonden</li>
          <li class="list-group-item"> <i class="fa fa-check mr-2"></i>No-bs subscription model. Cancel anytine</li>
          <li class="list-group-item" style="font-size:12px;"> Let op: dit middel is niet geschikt voor vrouwen</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .product-info-sec{
    top: 0 !important;
  }
  .product-name-and-btn{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: white;
    z-index: 99;
    padding: 10px;
  }
}
</style>
