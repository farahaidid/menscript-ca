<template>
  <div>
    <div class="container-fluid main-back-color px-0">
      <Product class="product-page" />
      <BlogOne :data="blogOne" :hideBtn="true" />
      <BlogTwo :data="blogTwo" :hideBtn="true" />
      <div class="row mx-0">
        <div class="col-sm-12 pr-0 pl-0 max-height-four">
          <img src="@/assets/img/fourth-section-img.jpg" alt class="fourth-section-img" />
        </div>
      </div>
      <BlogTwo :data="blogTwo2" :hideBtn="true" />
      <BlogOne :data="blogThree" :hideBtn="true" />
      <AskQuestion />
      <div style="height: 50px" class="main-back-color"></div>
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
        text: "Minoxidil is een lotion die tweemaal daags op de kalende hoofdhuid wordt aangebracht. Het werkt door de bloedvaten plaatselijk te verwijden. Hierdoor nemen de haarzakjes meer zuurstof en voedingstoffen op. Het resultaat is een verbetering van de haarkwaliteit en dikker en voller haar.",
        image: require("@/assets/img/product1.png"),
        subtitle: "Lees meer: finasteride en haarverlies",
      },
      blogTwo: {
        name: "blogTwo",
        title: "Dikker Haar",
        text: "Minoxidil reactiveert de haarzakjes, verlengt de groeifase en simuleert het herstel met als resultaat dikker en voller haar.",
        image: require("@/assets/img/five-one.jpg"),
        subtitle: "Lees meer: finasteride en haarverlies",
      },
      blogTwo2: {
        name: "blogTwo",
        title: "Tweemaal per dag",
        text: "De dagelijkse dosering is tweemaal per dag 1 ml oplossing (10 verstuivingen). Breng de oplossing gelijkmatig aan op de kalende hoofdhuid. Laat de oplossing volledig drogen voordat je andere stylingproducten gebruikt (bijv. gels, mousse) of voordat je naar bed gaat.",
        image: require("@/assets/img/product1.png"),
        subtitle: "Lees meer: finasteride en haarverlies",
      },
      blogThree: {
        name: "blogOne",
        title: "Veilig Gerbruik",
        text: "In enkele gevallen kan dit middel een bijwerking veroorzaken waaronder roodheid, jeuk, schilfering of een andere irritatie van de hoofdhuid. Heb je het vermoeden dat dit bij jou het geval is? Neem dan contact op met je huisarts. Is je bijwerking officieel vastgesteld? Dan raden we je aan de bijwerking ook te melden aan Lareb; het Nederlandse bijwerkingen centrum. Dit kan binnen je account.",
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
