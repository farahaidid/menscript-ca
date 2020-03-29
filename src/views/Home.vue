<template>
  <div>
    
    <AppBanner :data="home"/> 
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
        <BlogOne :data="blogOne" />
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
        <BlogTwo :data="blogTwo" />
      </div>
      <div>
        <BlogThree :data="blogThree" />
      </div>
      <div>
        <HowWorks />
      </div>
    </div>
    <!-- <AppFooter /> -->
  </div>
</template>
<script>
import AppBanner from "@/components/AppBanner"
import BlogOne from "../components/blog/BlogOne";
import BlogTwo from "../components/blog/BlogTwo";
import BlogThree from "../components/blog/BlogThree";
import HowWorks from "../components/AppHowWorks";
export default {
  components: {
    AppBanner,
    BlogOne,
    BlogTwo,
    BlogThree,
    HowWorks
  },
  data() {
    return {

      home: {
        name: "home",
        title: "Skin_",
        subtitle: "We zijn er om zelfzorg voor mannen te destigmatiseren en brengen essentiële medicatie binnen handbereik. Van online artsenconsult tot behandeling. Wij regelen het voor je.",
        button:true,
      },
      blogOne: {
        name: "blogOne",
        title: "Het Haar",
        text:
          "Een dierbar maar kwetsbaar bezit. Varanderlijk op talloze manieren, enkel beperkt door de verbeelding. Het is onder zit.Het wordt gebrukt om te onderscheiden, te imoineren maar bovenal om te verledien. zorg er dus goed voor,verlies het niet! Last vaan haaruitval?start een online consult met een van de artsen binnen ons netwerk om te zien hoe wij je junnen helpen. ",
        image: require("@/assets/img/shave-riversde.jpg"),
        subtitle: "Lees meer: finasteride en haarverlies"
      },
      blogTwo: {
        name: "blogTwo",
        title: "De Huid",
        text:
          "Het grootste orgaan van de mens. Het ademt, het voedt en vormt de barrière tussen de 'jij' en alles wat daarbuiten zit. Ondergewaardeerd in zijn functie, maar wanneer gelijkmatig in oppervlak geprezen om zijn uiterlijk. Iedereen verdient het om zich comfortabel te voelen in zijn eigen huid, maar degene die last hebben van acne zijn dat meestal niet. Geen zorgen. Wij zijn er om je te helpen! Of je nu last hebt van acne of je huid simpelweg in perfecte staat wilt krijgen, wij helpen je.  Weten wat het beste bij je past? Start met een online bezoek",
        image: require("@/assets/img/five-one.jpg"),
        subtitle: "Lees meer: finasteride en haarverlies"
      },
      blogThree: {
        name: "blogThree",
        title: "Waarom?",
        text:
          "Het aantal bezoeken aan de huisartsenpraktijk onder vrouwen ligt al jaren ver boven die van de man. Waar de vrouw het probleem graag bespreekbaar maakt, zwijgt de man. Ze schamen zich of worden geconfronteerd met talloze ‘gender-based’ stigmas. Door de drempel te verlagen om in contact te komen met een geregistreerde arts, proberen we hen de medische zorg te bieden die ze nodig hebben voor problemen die anders verborgen zouden houden.",
        image: require("@/assets/img/six-section.jpg"),
        subtitle: "Lees meer: finasteride en haarverlies"
      }
    };
  }
};
</script>

<style scoped>
.Beauty-brand{
  width: 100%;
  max-height: 720px;
}
.fourth-section-img {
  width: 100%;
  max-height: 1104px;
}
h3.brand-beauty-text {
  font-size: 36px;
line-height: 48px;
color: #212121;
font-family: "Avenir Medium";
  position: absolute;
 
  top: 65px;
  left: 28px;
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
    font-size: 19px;
  }
}
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
  h3.brand-beauty-text {
    top: 20px;
    left: 20px;
    font-size: 20px;
}
}
/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) and (max-width: 1200px) {
   h3.brand-beauty-text {
    top: 28px;
    left: 20px;
     font-size:25px;
  
   
}
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) and (max-width: 1450px) {
 /*  .max-height-beauty-img {
    height: 716px !important;
  } */
 /*  .max-height-four {
    height: 1081px !important;
  } */
 h3.brand-beauty-text {
    top: 40px;
    left: 26px;
     font-size:32px;
    
    
}
}
@media (min-width: 1451px) and (max-width: 1850px) {
h3.brand-beauty-text {
    top: 50pxpx;
    top: 50px;
    left: 28px;
    font-size:34px;
   
    
}
}
</style>
