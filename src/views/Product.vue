<template>
  <div>
    <div class="container-fluid">
      <Product class="product-page" />
      <BlogOne :data="blogOne" />
      <BlogTwo :data="blogTwo" />
      <div class="row">
        <div class="col-sm-12 pr-0 pl-0 max-height-four">
          <img src="@/assets/img/fourth-section-img.jpg" alt class="fourth-section-img" />
        </div>
      </div>
      <BlogOne :data="blogThree" />
      <BlogTwo :data="blogTwo2" />
      <AskQuestion />
    </div>
  </div>
</template>
<script>
import Product from "../components/product/AppProduct";
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
        subtitle: "Lees meer: finasteride en haarverlies",
      },
      blogTwo: {
        name: "blogTwo",
        title: "Effectiviteit",
        text:
          "Finasteride stopt het haaruitval in meer dan 83% van de gebruikers. Daarnaast ervaart 48%  van de gebruikers een verbetering van de haargroei binnen  het eerste jaar en 66% binnen het 2e jaar",
        image: require("@/assets/img/five-one.jpg"),
        subtitle: "Lees meer: finasteride en haarverlies",
      },
      blogTwo2: {
        name: "blogTwo",
        title: "Wees consistent",
        text:
          "Gebruik het middel zoals voorgeschreven door de arts en wees consistent in het gebruik. Heb je het druk? Maak dan een notitie in je agenda. Het kan helpen een vast moment van de dag te kiezen waarop je het middel inneemt. ",
        image: require("@/assets/img/product1.png"),
        subtitle: "Lees meer: finasteride en haarverlies",
      },
      blogThree: {
        name: "blogOne",
        title: "Bijwerkingen",
        text:
          "Het is zeldzaam, maar net als ieder ander geneesmiddel kan ook dit geneesmiddel bijwerkingen veroorzaken. Vermoed je dat je tijdenshet gebruik een bijwerking ervaart? Neem dan contact op met jearts.",
        image: require("@/assets/img/brand.png"),
        subtitle: "Lees meer: finasteride en haarverlies",
      },
    };
  },
};
</script>

<style lang="scss">
@import "../style/product.scss";
</style>
