<template>
  <div>
    <div class="container">
      <div class="row text-center logo-div">
        <div class="col-md-4 col-sm-12">
          <img src="@/assets/img/logo1.png" alt="" class="del logo" />
        </div>
        <div class="col-md-4 col-sm-12">
          <img src="@/assets/img/bbc.png" alt="bbc" class="bbc logo" />
        </div>
        <div class="col-md-4 col-sm-12">
          <img src="@/assets/img/nos.png" alt="" class="nos logo" />
        </div>
      </div>
    </div>
    <hr />
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 pl-0">
          <CategoryOne />
        </div>
        <div class="col-md-3">
          <CategoryTwo :data="rx" />
        </div>
        <div class="col-md-3">
          <CategoryTwo :data="otc" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6 pl-0">
          <CategoryOne />
        </div>
        <div class="col-md-3">
          <CategoryTwo :data="rx" />
        </div>
        <div class="col-md-3">
          <CategoryTwo :data="otc" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6 pl-0">
          <CategoryOne />
        </div>
        <div class="col-md-3">
          <CategoryTwo :data="rx" />
        </div>
        <div class="col-md-3">
          <CategoryTwo :data="otc" />
        </div>
      </div>
    </div>
    <BlogThree :data="blogThree" />
    <AskQuestion />

  </div>
</template>
<script>
import AskQuestion from "../components/Category/AskQuestion";
import CategoryOne from "../components/Category/CategoryOne";
import CategoryTwo from "../components/Category/CategoryTwo";
import BlogThree from "../components/blog/BlogThree";
export default {
  components: {
    CategoryOne,
    CategoryTwo,
    AskQuestion,
    BlogThree
  },
  data() {
    return {
      rx: {
        name: "rx",
        image: require("@/assets/img/category-2.jpg"),
        btnText: "Start online consult",
        text1: "Shampoo revitalising"
      },
      otc: {
        name: "otc",
        image: require("@/assets/img/category-3.jpg"),
         text1: "Conditioner volumniser",
        btnText: "Voeg toe aan mandje"
      },
      blogThree: {
        name: "blogThree",
        title: "We zijn er voor je",
        text:'Last van haaruitval, maar niet zeker wat je nodig hebt? Start een online consult, deel je symptomen en medische historie en laat je adviseren door een van de doktoren binnen ons netwerk.Een dokter evalueert vervolgens je behandelingsverzoek. Geschikt? Dan ontvang je je behandeling binnen 48u thuis geleverd.',
        image: require("@/assets/img/category-5.png"),
        button:true
      }
    };
  }
};
</script>
