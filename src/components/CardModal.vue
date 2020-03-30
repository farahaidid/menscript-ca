<template>
  <div class="modal" id="card-modal">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content custom-card-modal">
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
        <div class="modal-footer custom-card-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-7">
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
              <div class="col-md-5 my-auto text_sm_center custom_center">
                <span class="price">$41</span>
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
.custom-card-modal {
  width: 861px !important;
  height: 995px;
  background-color: #ffffff;
  border: 1px solid #959595;
}
.modal.show .modal-dialog {
  -webkit-transform: none;
  transform: none;
  right: 62px;
  top: -29px;
  position: fixed;
  .modal-content.custom-card-modal {
    height: 995px;
    width: 785px;
  }
  .modal-header {
    border-bottom: none;
    font-size: 30px;
    font-family: Avenir Roman;
    .close {
      position: absolute;
      right: 26px;
      font-size: 34px;
      font-weight: 300;
      top: 20px;
    }
  }
  .number-spinner {
    background-color: #f6f6f4;
    height: 30px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
      line-height: 36px;
      font-family: Avenir Black;
      font-size: 18px;
      color: #141414;
    }
    p.sub-text-2 {
      font-size: 16px;
      color: #141414;
    }
    p.sub-text-3 {
      font-size: 18px;
      font-family: Avenir Black;
    }
  }

  .custom-card-footer {
    padding: 35px 25px;

    .list-group-item {
      padding: 0px;
      border: transparent !important;
      font-size: 20px;
      color: #6c6d6f;
      i.fa.fa-check.mr-2 {
        font-size: 14px;
      }
    }
    .price {
      font-size: 48px;
      font-family: Roboto;
    }
    .checkout {
      width: 221px;
      background-color: black;
      height: 40px;
      font-family: avenir Black;
      border: transparent;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 44px;
      color: #faf7f6;
    }
  }
  .custom_center {
    display: flex;
    align-items: center;
  }
}
/* Small devices */

/* Small devices */
@media screen and (max-width: 640px) {
  .custom-card-modal {
    width: 100% !important;
  }
  .modal.show .modal-dialog {
    -webkit-transform: none;
    transform: none;
    right: 0;
    top: -6px;
    position: relative;
    .modal-header {
      font-size: 22px;
      .close {
        top: 14px;
      }
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
      font-size: 28px !important;
    }

    .list-group-item {
      font-size: 14px !important;
    }
  }
  .checkout {
    width: 197px;
    font-size: 15px;
  }
}
/* medium phone  */
@media screen and (min-width: 641px) and (max-width: 768px) {
   .custom-card-modal {
    width: 100% !important;
  }
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
    width: 100% !important;
    height: 36px !important;
    margin-left: 0px !important;
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


