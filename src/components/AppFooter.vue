<template>
  <div>
    <div class="container-fluid bg-white width margin-top ">
      <div class="row width-75 mx-auto padding_border">
        <div class="col-md-4 rs-bottom">
          <p class="footer-title ">
            Follow us
          </p>
          <p class="sub-title">
            To keep up to date on the latest ccmpany info.
          </p>
          <div class="social-icon">
            <a href="" class="social-link"><i class="fa fa-facebook-f"></i></a>
            <a href="" class="social-link"><i class="fa fa-instagram"></i></a>
            <a href="" class="social-link twitter"
              ><i class="fa fa-twitter"></i
            ></a>
            <a href="" class="social-link"><i class="fa fa-youtube"></i></a>
          </div>
        </div>
        <div class="col-md-4 rs-bottom">
          <p class="footer-title ">
            Need help?
          </p>
          <p class="sub-title">
            Get in contact with our customer service.
          </p>
          <button class="btn  contact-us">Contatc Us</button>
        </div>
        <div class="col-md-4 rs-bottom">
          <p class="footer-title ">
            Sign up to Date
          </p>
          <p class="sub-title">
            Sign up for the latest news and exclusive others
          </p>

          <div class="form-group border position-relative">
            <span class="under_score">@</span>
            <input
              type="email"
              class="form-control "
              id="custom-input"
              placeholder="Email"
            />

            <button class="arrow-btn">
              <i class="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="row mx-auto width-75  height  rs-footer">
        <div class="col-md-3 my-auto">
          <h1 class="footer-menu-title mb-0">MENSCRIPT</h1>
        </div>
        <div class="col-md-9 text-end my-auto ">
          <div class="footer-menu">
            <a href="" CLASS="footer-menu-link "> FAQ</a>
            <a href="" CLASS="footer-menu-link"> SHIPPING</a>
            <a href="" CLASS="footer-menu-link"> TERMS</a>
            <a href="" CLASS="footer-menu-link"> PRIVACY</a>
            <a href="" CLASS="footer-menu-link"> COMPLAINTS</a>
            <a href="" CLASS="footer-menu-link"> CONTACT US</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.social-icon {
    margin-top: 48px;
}
a.social-link {
  color: #ffffff;
  font-size: 14px;
  padding: 0px 4px;
  margin-left: 6px;
  background-color: c6c7c7;
  background-color: #c6c7c7;
}
.bg-white {
  background-color: #ffffff;
}
.margin-top {
  margin-top: 74px;
  padding-top: 60px;
}
p.footer-title {
  font-size: 22pt;
  font-family: Roboto;
}
p.sub-title {
  font-size: 14pt;
  margin: 0px;
  margin-bottom: 34px;
}
button.btn.contact-us {
  width: 232px;
  height: 60px;
  /* background: black; */
  color: black;
  background-color: ffffff;
  border: 1px solid #d5d6d6;
}
input#custom-input {
  width: 207px;
  /* height: 62px; */
  top: 11px;
  border: none;
  /* background-color: red; */
  left: 40px;
  position: absolute;
  /* z-index: -1; */
}
.border {
  border: 1px solid #d5d6d6 !important;
  width: 372px;
  height: 60px;
}
.arrow-btn {
  width: 70px;
  height: 60px;
  background-color: #7a8879;
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
}

.btn:focus {
  box-shadow: none !important;
}
i.fa.fa-arrow-right {
  font-size: 13px;
  color: #ffffff;
}

span.under_score {
  font-size: 24px;
  position: absolute;
  top: 12px;
  left: 12px;
}
.form-control:focus {
  border-color: #d5d6d6 !important;

  box-shadow: none !important;
}
.padding_border {
  padding-bottom: 59px;
  border-bottom: 1px solid #f0f0f0;
}
.footer-menu-title {
  font-size: 24pt;
}
.text-end {
  display: flex;
  justify-content: flex-end;
}
a.footer-menu-link {
  color: #000000;
  text-decoration: none;
  margin-left: 20px;
}
.height {
  height: 124px;
}
a.social-link.twitter {
  background-color: black;
}
.width-75 {
  width: 75%;
}

/* responsive */

@media (min-width: 768px) {
  p.footer-title {
    font-size: 16pt;
  }
  p.sub-title {
    font-size: 10pt;
    height: 22%;
}

  button.btn.contact-us {
    width: 90%;
    height: 53px !important;
  }
  .border {
    border: 1px solid #d5d6d6 !important;
    width: 110%;
    height: 55px;
  }
  .arrow-btn {
    width: 24%;
    height: 52px;
  }
  .footer-menu-title {
    font-size: 14pt;
  }
  
   
}
@media (min-width: 1200px) {
  button.btn.contact-us {
    width: 62%;
    height: 53px !important;
  }
  .border {
    border: 1px solid #d5d6d6 !important;
    width: 100%;
    height: 55px;
  }
  .arrow-btn {
    width: 70px;
    height: 53px;
  }
  p.sub-title {
    font-size: 12pt;
    height: 22%;
}
}
@media screen and (max-width: 767px) {
  /* .width {
    width: 124% !important;
  } */
  .width-75 {
    width: 100%;
  }

  p.footer-title {
    font-size: 20pt;
    text-align: center;
  }
  p.sub-title {
    font-size: 15px;
    margin: 0px;
    margin-bottom: 34px;
    text-align: center;
  }
  .footer-menu-title {
    font-size: 20pt;
    text-align: center;
  }
  input#custom-input {
    width: 48%;
    height: 68%;
  }
  .border {
    border: 1px solid #d5d6d6 !important;
    width: 100%;
    height: 60px;
  }

  .arrow-btn {
    right: 0px !important;
  }
  .padding_border {
    padding-bottom: 0px;
  }
  .social-icon {
    text-align: center;
  }
  a.footer-menu-link {
    color: #000000;
    text-decoration: none;
    margin-left: 18px;
}
  .rs-bottom {
    margin-bottom: 3em;
    text-align: center;
  }
  .rs-footer {
    margin-top: 25px;
  }
  .margin-top {
  margin-top: 45px;
  
}
}
</style>
