<template>
  <div class="modal" tabindex="-1" role="dialog" id="card-modal">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          IN CART
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row mb-4">
              <div class="col-md-2 my-auto p-0">
                <div class="number-spinner">
                  <span class="i">
                    <i class="fal fa-minus"></i>
                  </span>
                  <span class="i">1</span>
                  <span class="i">
                    <i class="fal fa-plus"></i>
                  </span>
                </div>
              </div>
              <div class="col-md-10 pl pr">
                <div class="card-product">
                  <div class="card-product-description">
                    <img src="@/assets/img/category-2.jpg" alt class="cart-img" />
                    <p class="sub-text-1 mb-0">Finasteride 1mg</p>
                    <p class="sub-text-2">28 tabletten</p>
                    <p class="sub-text-3 mb-0 text-right">
                      <b>$28.00</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 my-auto p-0">
                <div class="number-spinner">
                  <span class="i">
                    <i class="fal fa-minus"></i>
                  </span>
                  <span class="i">1</span>
                  <span class="i">
                    <i class="fal fa-plus"></i>
                  </span>
                </div>
              </div>
              <div class="col-md-10 pr pl">
                <div class="card-product">
                  <div class="card-product-description">
                    <img src="@/assets/img/category-2.jpg" alt class="cart-img" />
                    <p class="sub-text-1 mb-0">Finasteride 1mg</p>
                    <p class="sub-text-2">28 tabletten</p>
                    <p class="sub-text-3 mb-0 text-right">
                      <b>$28.00</b>
                    </p>
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
              <div class="col-md-6 my-auto text_sm_center custom_center">
                <span class="price">
                  $41
                </span>
                <button class="checkout app-btn ml-4" @click="openLoginModal">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventBus from "@/plugins/eventBus";
export default {
  methods: {
    openLoginModal() {
      $("#card-modal").modal("toggle");
      EventBus.$emit("open-login-modal");
    }
  }
};
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
    font-size: 30px;
    font-family: Avenir Roman;
    
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
    .sub-text-1 {
      font-family: Avenir Black;
      font-size: 18px;
    }
    p.sub-text-2 {
      font-size: 16px;
    }
    p.sub-text-3 {
      font-size: 18px;
      font-family: Avenir Black;
    }
  }
  .list-group-item {
    padding: 0px;
    border: transparent !important;
    font-size: 24px;
  }
  .price {
    font-size: 48px;
    font-family: Roboto;
  }
  .checkout {
    width: 221px;
    background-color: black;
    height: 43px;
    color: #ffffff;
    border: transparent;
  }
  .custom_center{
    display: flex;
    align-items: center;
  }
}
/* Small devices */

/* Small devices */
@media screen and (max-width: 640px) {
  .modal.show .modal-dialog {
    -webkit-transform: none;
    transform: none;
    right: 0;
    top: -6px;
    position: relative;
    .modal-header {
      font-size: 22px;
     
    }
    .card-product {
      .sub-text-1 {
        font-size: 16px;
      }
      p.sub-text-2,
      .subtext-3 {
        font-size: 14px;
      }
    }
    .price {
      font-size: 28px;
    }

    .list-group-item {
      font-size: 14px;
     
    }
  }
}
/* medium phone  */
@media screen and (min-width: 641px) and (max-width: 768px) {
  .sub-text-1 {
    font-size: 16px !important;
  }
  p.sub-text-3 {
    font-size: 16px !important;
  }
  .price {
    font-size: 35px !important;
  }
  .list-group-item {
    font-size: 16px !important;
   
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .modal-header {
    font-size: 22px !important;
  }
  .sub-text-1,
  p.sub-text-3 {
    font-family: Avenir Black;
    font-size: 16px !important;
  }
  .list-group-item {
    font-size: 16px !important;
   
  }
 .price {
    font-size: 32px !important;
    display: block;
    text-align: center;
    margin-right: 12px;
}
  .checkout {
       width: 100%!important;
    height: 36px!important;
    margin-left: 0px!important;
  }
}
@media screen and (min-width: 991px) and (max-width: 1200px) {
.list-group-item {
    font-size: 16px !important;
   
  }
}
@media screen and (min-width: 1200px) and (max-width: 1800px) {
.list-group-item {
    font-size: 16px !important;
   
  
  }
}
</style>


