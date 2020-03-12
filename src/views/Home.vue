<template>
  <div>
    <div class="container-fluid ">
      <div class="row ">
        <div
          class="col-md-6 col-sm-12 p-0 position-relative max-height-beauty-img"
        >
          <img
            src="../assets/img/Beauty-brand.jpg"
            alt="Beauty-brand"
            class="Beauty-brand"
          />
          <h3 class="brand-beauty-text">Haareverzorging</h3>
        </div>
        <div
          class="col-md-6 col-sm-12 p-0 position-relative max-height-beauty-img"
        >
          <img
            src="../assets/img/Beauty-brand.jpg"
            alt="Beauty-brand"
            class="Beauty-brand"
          />
          <h3 class="brand-beauty-text">Haareverzorging</h3>
        </div>
      </div>
      <div>
        <BlogOne />
      </div>
      <div class="row">
        <div class="col-sm-12 pr-0 pl-0 max-height-four">
          <img
            src="@/assets/img/fourth-section-img.jpg"
            alt
            class="fourth-section-img"
          />
        </div>
      </div>
      <div>
        <BlogTwo />
      </div>

      <div>
        <BlogThree  :data="blogThree"/>
      </div>
      <div>
        <HowWorks />
      </div>
    </div>
  </div>
</template>
<script>
import BlogOne from "../components/blog/BlogOne";
import BlogTwo from "../components/blog/BlogTwo";
import BlogThree from "../components/blog/BlogThree";
import HowWorks from "../components/AppHowWorks";
export default {
  components: {
    BlogOne,
    BlogTwo,
    BlogThree,
    HowWorks
  },
  data(){
    return{
      blogThree: {
        name: "blogThree",
        title:'Waarom?',
        image: require("@/assets/img/six-section.jpg"),
        subtitle: "Lees meer: finasteride en haarverlies"
      },
    }
  }
};
</script>

<style scoped>
.Beauty-brand,
.fourth-section-img {
  width: 100%;
  max-height: 100%;
}
h3.brand-beauty-text {
  font-weight: 600;
  position: absolute;
  z-index: 10;
  top: 55px;
  left: 50px;
}

/* Small devices */
@media screen and (max-width: 640px) {
  h3.brand-beauty-text {
    top: 1em;
    left: 6em;
    font-size: 22px;
  }
}
/* medium phone screen  */
@media screen and (min-width: 641px) and (max-width: 768px) {
  h3.brand-beauty-text {
    top: 1em;
    left: 6em;
    font-size: 25px;
  }
}
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
  h3.brand-beauty-text {
    top: 1em;
    left: 6em;
    font-size: 22px;
  }
}
/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) and (max-width: 1300px) {
  /* default */
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1300px) {
  .max-height-beauty-img {
    height: 716px !important;
  }
  .max-height-four {
    height: 1081px !important;
  }
}
</style>
