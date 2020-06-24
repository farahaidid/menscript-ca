<template>
  <div class="main-back-color">
    <AppBanner :data="blog"/> 
    <div class="blog-list-menu ">
      <router-link to="/" class="blog-list-menu-link"> Alles </router-link>
      <router-link to="/" class="blog-list-menu-link"> Haar </router-link>
      <router-link to="/" class="blog-list-menu-link"> Huid </router-link>
      <router-link to="/" class="blog-list-menu-link"> Finasteride </router-link>
      <router-link to="/" class="blog-list-menu-link"> Minoxidil </router-link>
      <router-link to="/" class="blog-list-menu-link"> Tretinoine </router-link>
      <router-link to="/" class="blog-list-menu-link mr-1"> Zonnebrand </router-link>
    </div>
    
    <BlogList :data="singleBlog1"/>
    <BlogList :data="singleBlog2"/>
    <BlogList :data="singleBlog3"/>
    <BlogList :data="singleBlog4"/>
    <BlogList :data="singleBlog5"/>
    <BlogList :data="singleBlog6"/>
    <BlogList :data="singleBlog7"/>
    <BlogList :data="singleBlog8"/>

    <div style="height: 50px" class="main-back-color"></div>
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
        title: "Onze blog",
        subtitle: "Not sure how to apply tretinoin? Don't sweat it. We are here to help you out.After reading this article you are ready yo go.",
        subtitle2:"Read more :tretinoin application guidelines", 
        logo:false,
      },
      singleBlog1: {
        name: "singleBlog",
        imageleft:'left',
        title: "De oorzaak van haaruitval",
        text: "self-care is one of the rare spaces where women dominate the culture, while men face countless gender-based stigmas and barriers to entry. Not anymore. We are here for you. Talk to us! ",
        image: require("@/assets/img/singleblog/blog1.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog2: {
        name: "singleBlog",
        imageleft:'left',
        title: "Het Y-chromosoom",
        text: "self-care is one of the rare spaces where women dominate the culture, while men face countless gender-based stigmas and barriers to entry. Not anymore. We are here for you. Talk to us! ",
        image: require("@/assets/img/singleblog/blog2.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog3: {
        name: "singleBlog",
        imageleft:'left',
        title: "Werkt finasteride wel echt?",
        text: "self-care is one of the rare spaces where women dominate the culture, while men face countless gender-based stigmas and barriers to entry. Not anymore. We are here for you. Talk to us! ",
        image: require("@/assets/img/singleblog/blog3.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog4: {
        name: "singleBlog",
        imageleft:'right',
        title: "Wat is minoxidil?",
        imagePosition:'right',
        text: "self-care is one of the rare spaces where women dominate the culture, while men face countless gender-based stigmas and barriers to entry. Not anymore. We are here for you. Talk to us! ",
        image: require("@/assets/img/singleblog/blog4.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog5: {
        name: "singleBlog",
        title: "Is minoxidil gevaarlijk?",
        imageleft:'right',
        text: "self-care is one of the rare spaces where women dominate the culture, while men face countless gender-based stigmas and barriers to entry. Not anymore. We are here for you. Talk to us! ",
        image: require("@/assets/img/singleblog/blog3.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog6: {
        name: "singleBlog",
        imageleft:'left',
        title: "Huidveroudering",
        text: "self-care is one of the rare spaces where women dominate the culture, while men face countless gender-based stigmas and barriers to entry. Not anymore. We are here for you. Talk to us! ",
        image: require("@/assets/img/singleblog/blog1.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog7: {
        name: "singleBlog",
        imageleft:'left',
        title: "Hoe gebruik je finasteride?",
        text: "self-care is one of the rare spaces where women dominate the culture, while men face countless gender-based stigmas and barriers to entry. Not anymore. We are here for you. Talk to us! ",
        image: require("@/assets/img/singleblog/blog3.png"),
        subtext: "Read more: finasteride and hairloss"
      },
      singleBlog8: {
        name: "singleBlog",
        imageleft:'left',
        title: "Werkt finasteride wel echt?",
        text: "self-care is one of the rare spaces where women dominate the culture, while men face countless gender-based stigmas and barriers to entry. Not anymore. We are here for you. Talk to us! ",
        image: require("@/assets/img/singleblog/blog3.png"),
        subtext: "Read more: finasteride and hairloss"
      },
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-list-menu-link{
  font-weight: bold;
  display: inline-block !important;
  margin: 0 auto;
}
</style>
