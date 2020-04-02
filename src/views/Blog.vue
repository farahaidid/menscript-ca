<template>
  <div>
     <AppBanner :data="blog"/> 
    <div class="container-fluid">
      <div class="blog-list-menu ">
        
        <router-link to="/" class="blog-list-menu-link"> All Articles </router-link>
        <router-link to="/" class="blog-list-menu-link"> Hair </router-link>
        <router-link to="/" class="blog-list-menu-link"> Skin </router-link>
        <router-link to="/" class="blog-list-menu-link"> Finasteride </router-link>
        <router-link to="/" class="blog-list-menu-link"> minoxidil </router-link>
        <router-link to="/" class="blog-list-menu-link"> Tretinion </router-link>
        <router-link to="/" class="blog-list-menu-link"> Sunscreen </router-link>
      </div>
     
      <BlogList :data="singleBlog1"/>
      <BlogList :data="singleBlog2"/>
      <BlogList :data="singleBlog3"/>
      <BlogList :data="singleBlog4"/>
      <BlogList :data="singleBlog5"/>
      <BlogList :data="singleBlog6"/>
      <BlogList :data="singleBlog7"/>
    </div>
  </div>

</template>

<script>
import AppBanner from "@/components/AppBanner"

import BlogList from "../components/blog/BlogList";
export default {
  components: {
    BlogList,
    AppBanner
  },
  data(){
    return {
       blog: {
        name: "home",
        title: "How to apply tretinoin",
        subtitle: "Not sure how to apply tretinoin? Don't sweat it. We are here to help you out.After reading this article you are ready yo go.",
         subtitle2:"Read more :tretinoin application guidelines", 
        logo:false,
      },
      singleBlog1: {
        name: "singleBlog",
        imageleft:'left',
        title: "What is Finasteride?",
        text:
          "Self-care is one of the rare spaces where women dominate the culture,  while men face countless gender-based stigmas and barriers to entry.  Not anymore. We are here for you. Talk to us!",
        image: require("@/assets/img/singleblog/blog1.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog2: {
        name: "singleBlog",
          imageleft:'left',
        title: "How to use finasteride?",
        text:
          "Self-care is one of the rare spaces where women dominate the culture,  while men face countless gender-based stigmas and barriers to entry.  Not anymore. We are here for you. Talk to us!",
        image: require("@/assets/img/singleblog/blog2.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog3: {
        name: "singleBlog",
          imageleft:'left',
        title: "Does finasteride work?",
        text:
          "Self-care is one of the rare spaces where women dominate the culture,  while men face countless gender-based stigmas and barriers to entry.  Not anymore. We are here for you. Talk to us!",
        image: require("@/assets/img/singleblog/blog3.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog4: {
        name: "singleBlog",
         imageleft:'right',
        title: "Is minoxidil dangerous?",
        imagePosition:'right',
        text:
          "Self-care is one of the rare spaces where women dominate the culture,  while men face countless gender-based stigmas and barriers to entry.  Not anymore. We are here for you. Talk to us!",
        image: require("@/assets/img/singleblog/blog4.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog5: {
        name: "singleBlog",
        title: "What is tretinoine?",
        imageleft:'right',
        text:
          "Self-care is one of the rare spaces where women dominate the culture,  while men face countless gender-based stigmas and barriers to entry.  Not anymore. We are here for you. Talk to us!",
        image: require("@/assets/img/singleblog/blog3.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog6: {
        name: "singleBlog",
         imageleft:'left',
        title: "How to apply tretinoine?",
        text:
          "Self-care is one of the rare spaces where women dominate the culture,  while men face countless gender-based stigmas and barriers to entry.  Not anymore. We are here for you. Talk to us!",
        image: require("@/assets/img/singleblog/blog1.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog7: {
        name: "singleBlog",
         imageleft:'left',
        title: "How to apply tretinoine?",
        text:
          "Self-care is one of the rare spaces where women dominate the culture,  while men face countless gender-based stigmas and barriers to entry.  Not anymore. We are here for you. Talk to us!",
        image: require("@/assets/img/singleblog/blog3.png"),
        subtext: "Read more: finasteride and hairloss"
      },
    }
  }
};
</script>
