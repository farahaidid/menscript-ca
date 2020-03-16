<template>
  <div>
    <!-- The Modal -->
    <div class="modal" id="header-modal">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <!-- <button type="button" class="close" data-dismiss="modal">
            &times;
          </button> -->

          <!-- Modal Header -->
          <div class="modal-header">
            <div class="container-fluid">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <div class="row">
                <div class="col-md-6 text-right">
                  <h4>MENSCRIPT</h4>
                </div>
                <div class="col-md-6 text-right">
                  <router-link to class="nav-link" href="#">SEARCH</router-link>
                  <router-link to class="nav-link" href="#">CARD</router-link>
                  <router-link to class="nav-link" href="#"
                    >ACCOUNT</router-link
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-md-6 pl-5">
                  <p>MENU</p>
                  <ul>
                    <li class="link">
                      HAIR
                      <div class="dropdown-content">
                        <a href="#" class="dropdown-link">Link 1</a>
                        <a href="#" class="dropdown-link">Link 2</a>
                        <a href="#" class="dropdown-link">Link 3</a>
                      </div>
                    </li>
                    <li class="link">
                      SKIN
                      <div class="dropdown-content">
                        <a href="#" class="dropdown-link">Link 1</a>
                        <a href="#" class="dropdown-link">Link 2</a>
                        <a href="#" class="dropdown-link">Link 3</a>
                      </div>
                    </li>
                    <li class="link">BLOG</li>
                    <li class="link">ABOUT</li>
                    <li class="link">CONTACT US</li>
                  </ul>
                </div>
                <div class="col-md-3 pr-lg-0">
                  <img
                    src="@/assets/img/category-2.jpg"
                    alt="header-modal-img"
                    class="header-modal-img"
                  />
                </div>
                <div class="col-md-3 pl-lg-0">
                  <img
                    src="@/assets/img/face.png"
                    alt=""
                    class="header-modal-img"
                  />
                </div>
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
.modal-dialog.modal-xl {
  min-width: 100% !important;

  top: -29px !important;
  .modal-header {
    border: none !important;
  }
  .close {
    float: left !important;
    font-size: 25px !important;
    font-weight: 700;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
  }
  .nav-link {
    display: inline-block;
    color: black;
    font-family: Montserrat;

  }
  li.link {
    list-style-type: none;
    margin-bottom: 8px;
    font-family: Avenir Medium;
}
  a.dropdown-link {
    display: block;
    /* background-color: red; */
    width: 100px;
    /* left: 32px; */
    margin-left: 37px;
    color: black;
    text-decoration: none;
}
}
</style>
