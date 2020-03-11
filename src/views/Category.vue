<template>
  <div>
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4 col-sm-12">
         <img src="@/assets/img/logo1.png" alt="" class="del logo">
        </div>
        <div class="col-md-4 col-sm-12">
          <img src="@/assets/img/bbc.png" alt="bbc" class="bbc logo">
        </div>
        <div class="col-md-4 col-sm-12">
          <img src="@/assets/img/nos.png" alt="" class="nos logo">
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
          <CategoryTwo />
        </div>
        <div class="col-md-3">
          <CategoryTwo />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6 pl-0">
          <CategoryOne />
        </div>
        <div class="col-md-3">
          <CategoryTwo />
        </div>
        <div class="col-md-3">
          <CategoryTwo />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6 pl-0">
          <CategoryOne />
        </div>
        <div class="col-md-3">
          <CategoryTwo />
        </div>
        <div class="col-md-3">
          <CategoryTwo />
        </div>
      </div>
    </div>

    <BlogThree/>
    <AskQuestion />

  </div>
</template>

<script>
import AskQuestion from "../components/Category/AskQuestion";
import CategoryOne from "../components/Category/CategoryOne";
import CategoryTwo from "../components/Category/CategoryTwo";
//import CategoryThree from "../components/Category/CategoryThree";
//import CategoryFour from "../components/Category/CategoryFour";
import BlogThree from "../components/blog/BlogThree";


export default {
  components: {
    CategoryOne,
    CategoryTwo,
    //  CategoryThree,
    //  CategoryFour,
    AskQuestion,
    BlogThree
  }
};
</script>

<style></style>
