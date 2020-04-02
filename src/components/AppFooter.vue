<template>
  <div>
    <div class="container-fluid bg-white width margin-top position-relative">
      <div class="row width-75 mx-auto padding_border">
        <div class="col-md-4 rs-bottom">
          <p class="footer-title ">Vlog ons</p>
          <p class="sub-title text_sm_center">Blijf op de hoogte van onze laatse ontwikkelingen</p>
          <div class="social-icon my-auto">
            <a href class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href class="social-link">
              <i class="fab fa-instagram"></i>
            </a>
            <a href class="social-link twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href class="social-link">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div class="col-md-4 rs-bottom">
          <p class="footer-title ">Hulp nodig?</p>
          <p class="sub-title ">Neem contact op met onze klantenservice</p>
          <button class="btn contact-us">CONTACT US</button>
        </div>
        <div class="col-md-4 rs-bottom">
          <p class="footer-title ">Meld je aan</p>
          <p class="sub-title ">Ontvang het laatste nieuws en exclusive aanbiedingen</p>

          <div class="form-group border position-relative">
            <span class="under_score">@</span>
            <input type="email" class="form-control" id="custom-input" placeholder="EMAIL" />

            <button class="arrow-btn">
            <!--   <i class="fa fa-arrow-right"></i> -->
            </button>
          </div>
        </div>
      </div>

      <div class="row mx-auto width-75 height rs-footer ">
        <div class="col-md-3 my-auto">
          <h1 class="footer-menu-title mb-0">MENSCRIPT</h1>
        </div>
        <div class="col-md-9 text-end my-auto">
          <div class="footer-menu">
            <a href class="footer-menu-link">FAQ</a>
            <a href class="footer-menu-link">VERZENDING</a>
            <a href class="footer-menu-link">TERMS & CONDITIONS</a>
            <a href class="footer-menu-link">PRIVACY</a>
            <a href class="footer-menu-link">KLACHTEN</a>
            <a href class="footer-menu-link">CONTACT </a>
          </div>
        </div>
      </div>
      <img src="@/assets/img/footer logo.png" alt="" class="footer-logo">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-logo {
    width: 137px;
    height: 114px;
    position: absolute;
    right: 80px;
    bottom: 40px;
}
a {
    color: #ffffff !important;
}
.social-icon {
    height: 60px;
    padding: 15px 12px;
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
  font-size: 20px;
  line-height: 30px;
  color: #2f2f2f;
  font-family: Avenir Black;
}

p.sub-title {
  font-size: 16px;
  color: #2f2f2f;
  font-family: Avenir ;
  min-height: 47px;
}
button.btn.contact-us {
  width: 232px;
  height: 60px;
  font-size: 16px;
  letter-spacing: 1px;
  font-family: Avenir Heavy;
 
  color: #6c6d6f;
  background-color: ffffff;
  border: 1px solid #d5d6d6;
}
input#custom-input {
  width: 207px;
  top: 11px;
  border: none;
  left: 40px;
  position: absolute;
  font-size: 16px;
  font-family: Avenir Heavy;
}
 
.border {
  border: 1px solid #d5d6d6 !important;
  width: 80%;
  height: 60px;
}
.arrow-btn {
  width: 70px;
  height: 60px;
  background-color: #000000;
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
    font-size: 26px;
    letter-spacing: 1px;
    line-height: 48px;
    color: #363636;
    font-family: Avenir medium;
}
.text-end {
  display: flex;
  justify-content: flex-end;
}

a.footer-menu-link {
    text-decoration: none;
    margin-left: 31px;
    font-size: 16px;
    line-height: 48px;
    color: #2f2f2f!important;
    font-family: Avenir Medium;
    letter-spacing: 1px;
}
.height {
  height: 124px;
}
a.social-link.twitter {
  background-color: black;
}
.width-75 {
  width: 70%;
}

/* responsive */


/* Small devices */
@media screen and (max-width: 640px) {

  .width-75 {
      width: 100%; 
  }
 .rs-bottom {
    text-align: center;
}
  p.footer-title {
      font-size: 18px;
      margin-top: 15px;
  }
  p.sub-title {
    font-size: 16px;
   
}
button.btn.contact-us {
    width: 100%;
    height: 51px;
    font-size: 14px;
    line-height: 0px; 
}
  .border {
    width: 100%; 
    height:60px;
  }
  span.under_score {
    font-size: 20px;
    }
  input#custom-input{
   
    font-size: 14px;
   
}
.footer-menu-title {
    font-size: 22px;
    text-align: center;
}
a.footer-menu-link {
    text-decoration: none;
    margin-left: 4px;
    font-size: 12px;
    line-height: 48px;
    color: #2f2f2f;
}
.col-md-9.text-end.my-auto {
    justify-content: center;
}
.footer-logo {
    width: 94px;
    height: 73px;
    position: absolute;
    right: 27px;
    bottom: -14px;
}
}

/* medium phone  */
@media screen and (min-width: 641px) and (max-width: 768px) {
  .width-75 {
      width: 100%; 
  }
  .rs-bottom {
    text-align: center;
}
 p.footer-title {
     
      margin-top: 15px;
  }
button.btn.contact-us {
    width: 70%;
   
}
 .border {
    width: 100%; 
    height:60px;
  }
  .footer-menu-title {
    font-size: 22px;
    text-align: center;
}
.col-md-9.text-end.my-auto {
    display: flex;
    justify-content: center;
}
a.footer-menu-link {
    text-decoration: none;
    margin-left: 12px;
    font-size: 14px;
    line-height: 48px;
    color: #2f2f2f;
    letter-spacing: 0px;
}
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .width-75 {
     width: 100%; 
}
.footer-menu-title {
    font-size: 20px;
    }
    a.footer-menu-link {
    
    margin-left: 6px;
    font-size: 14px;
    letter-spacing: 0px;
    
   
}
button.btn.contact-us {
    width: 170px;
    
    font-size: 13px;
}
.arrow-btn {
    width: 37px;
   
   
}
input#custom-input {
    width: 79px;
    }
    .footer-logo{
    width: 88px;
    height: 93px;
    position: absolute;
    right: 80px;
    bottom: 84px;
}
}
@media screen and (min-width: 991px) and (max-width: 1200px) {
   .width-75 {
  width: 75%;
}
 p.footer-title {
      font-size: 16px;
  }
  p.sub-title {
    font-size: 16px;
}
button.btn.contact-us {
    width: 84%;
    height: 60px;
    font-size: 12px;
    
}
   

input#custom-input {
   
    font-size: 13px;
    
}
span.under_score {
    font-size: 20px;
   
}
.arrow-btn{
    width: 40px;
    }
.footer-menu-title {
    font-size: 24px;
}
a.footer-menu-link{
    text-decoration: none;
    margin-left: 6px;
    font-size: 14px;
    line-height: 48px;
    color: #2f2f2f;
    letter-spacing: 0px;
}
.footer-logo {
    width: 94px;
    height: 78px;
    position: absolute;
    right: 50px;
    bottom: 62px;
}
}

@media screen and (min-width: 1201px) and (max-width: 1450px) {
  .width-75 {
  width: 70%;
}
button.btn.contact-us {
    width: 190px;
    font-size: 14px;
}
.arrow-btn {
    width: 40px;
    }
.footer-menu-title {
    font-size: 24px;
   
}
a.footer-menu-link {
    text-decoration: none;
    margin-left: 7px;
    font-size: 13px;
    line-height: 48px;
    color: #2f2f2f;
     letter-spacing: 1px;
}
.footer-logo{
    width: 119px;
    height: 102px;
    position: absolute;
    right: 80px;
    bottom: 54px;
}
}
/* Extra large devices (large desktops, 1200px and up) */
@media screen and (min-width: 1451px) and (max-width: 1850px) {
  a.footer-menu-link {
    text-decoration: none;
    margin-left: 8px;
    font-size: 15px;
    line-height: 48px;
    color: #2f2f2f!important;
    font-family: Avenir Medium;
    letter-spacing: 1px;
}
}
</style>
