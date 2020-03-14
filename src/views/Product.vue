<template>
  <div>
    <div class="container-fluid">

      <Product class="product-page"/>
      <BlogOne :data="blogOne" />
      <BlogTwo :data="blogTwo" />
      <div>
        <BlogOne :data="blogThree" />
      </div>
      <AskQuestion />
    </div>
  </div>
</template>
<script>
import Product from '../components/product/AppProduct'
import AskQuestion from "../components/Category/AskQuestion";

import BlogTwo from "../components/blog/BlogTwo";
import BlogOne from "../components/blog/BlogOne";
export default {
  components: {
    Product,
    BlogTwo,
    BlogOne,
    AskQuestion,
  },
  data() {
    return {
      blogOne: {
        name: "blogOne",
        title: "Wat is finasteride?",
        text:
          "De wetenschappelijke studies zijn duidelijk: haarverlies bij mannen wordt veroorzaakt door het hormoon DHT (dihydrotestosteron) en het enige beschikbare medicijn dat dit hormoon met succes blokkeert, is finasteride. ",
        image: require("@/assets/img/product1.png"),
        subtitle: "Lees meer: finasteride en haarverlies"
      },
      blogTwo: {
        name: "blogTwo",
        title: "Verlies het niet",
        text:
          "Finasteride stopt het haaruitval in meer dan 80% van de gebruikers. Daarnaast ervaart de helft van de gebruikers een verbetering van de haargroei te zien na het eerste jaar. Dit aantal groeit tot 2/3e van de gebruikers na het tweede jaar.",
        image: require("@/assets/img/five-one.jpg"),
        subtitle: "Lees meer: finasteride en haarverlies"
      },
      blogThree: {
        name: "blogOne",
        title: "Bijwerkingen",
        text:
          "Het is zeldzaam, maar net als ieder ander geneesmiddel kan ook dit geneesmiddel bijwerkingen veroorzaken. Vermoed je dat je tijdenshet gebruik een bijwerking ervaart? Neem dan contact op met jearts.",
        image: require("@/assets/img/brand.png"),
        subtitle: "Lees meer: finasteride en haarverlies"
      }
    };
  }
};
</script>


