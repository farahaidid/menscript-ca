<template>
  <div>
    <AppBanner :data="category"/> 
    <hr />
    <div class="container-fluid custom-padding ">
      <div class="row">
        <div class="col-md-6">
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
        <div class="col-md-6 ">
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
        <div class="col-md-6 ">
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
import AppBanner from "@/components/AppBanner"
import AskQuestion from "../components/Category/AskQuestion";
import CategoryOne from "../components/Category/CategoryOne";
import CategoryTwo from "../components/Category/CategoryTwo";
import BlogThree from "../components/blog/BlogThree";
export default {
  components: {
    AppBanner,
    CategoryOne,
    CategoryTwo,
    AskQuestion,
    BlogThree
  },
  data() {
    return {
       category: {
        name: "home",
        title: "Haarverzorgoing",
        subtitle: "Wat is het meest dierbare bezit van de man? Geweldig haar?  juist! Zorg er goed voor. Verlies het niet."
      },
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
