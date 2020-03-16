<template>
  <div class="modal" tabindex="-1" role="dialog" id="card-modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">IN CART</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row mb-4">
              <div class="col-md-2 my-auto p-0">
                <div class="number-spinner">
                  <span class="i"><i class="fal fa-minus"></i></span>
                  <span class="i">1</span>
                  <span class="i"><i class="fal fa-plus"></i></span>
                </div>
              </div>
              <div class="col-md-10  pl pr">
                <div class="card-product">
                  <div class="card-product-description">
                    <img
                      src="@/assets/img/category-2.jpg"
                      alt=""
                      class="cart-img"
                    />
                    <p class="sub-text-1 mb-0">Finasteride 1mg</p>
                    <p class="sub-text-2">28 tabletten</p>
                    <p class="sub-text-2  mb-0 text-right"><b>$28.00</b></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 my-auto p-0">
                <div class="number-spinner">
                  <span class="i"><i class="fal fa-minus"></i></span>
                  <span class="i">1</span>
                  <span class="i"><i class="fal fa-plus"></i></span>
                </div>
              </div>
              <div class="col-md-10  pr pl">
                <div class="card-product">
                  <div class="card-product-description">
                    <img
                      src="@/assets/img/category-2.jpg"
                      alt=""
                      class="cart-img"
                    />
                    <p class="sub-text-1 mb-0">Finasteride 1mg</p>
                    <p class="sub-text-2">28 tabletten</p>
                    <p class="sub-text-2  mb-0 text-right"><b>$28.00</b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i class="fa fa-check mr-2"></i>Gratis verzending
                  </li>
                  <li class="list-group-item">
                    <i class="fa fa-check mr-2"></i>Herhaalrecepten automatisch
                  </li>
                  <li class="list-group-item">
                    <i class="fa fa-check mr-2"></i>No-bs subscription
                    model.Cancel anytine
                  </li>
                </ul>
              </div>
              <div class="col-md-6 my-auto">
                <span> <b>$41</b></span>
                <button class="checkout app-btn ml-4 ">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.modal.show .modal-dialog {
  -webkit-transform: none;
  transform: none;
  right: 0;
  top: -29px;
  position: fixed;

  .modal-header {
    border-bottom: none;
  }
  .number-spinner {
    background-color: #f5f5f3;
    height: 30px;
    text-align: center;
    span.i {
      display: inline-block;
      width: 16px;
      font-size: 12px;
    }
  }
  .card-product {
    border: 1px solid #e1e1e1;
    padding: 10px 10px 0px 10px;
    margin-left: 10px;

    img.cart-img {
      width: 60px;
      height: 70px;
      float: left;
      margin-right: 15px;
    }
  }
  .checkout {
    padding: 0px 5px;
  }
}
/* Small devices */
@media screen and (max-width: 766px) {
     .modal.show .modal-dialog .card-product {
    border: 1px solid #e1e1e1;
    padding: 10px 10px 0px 10px;
     margin-left: 0px!important; 
     margin-top: 10px;
}
}
</style>
