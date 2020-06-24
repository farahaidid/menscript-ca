<template>
  <div>
    <AppBanner :data="home" />
    <div class="container-fluid main-back-color px-0">
      <div class="row mx-0 p-0 ">
        <div class="col-md-6 col-sm-12 p-0 position-relative max-height-beauty-img text-left text-md-center" >
          <img src="../assets/img/Beauty-brand.jpg" alt="Beauty-brand" class="Beauty-brand"/>
          <h3 class="brand-beauty-text">Haareverzorging</h3>
        </div>
        <div class="col-md-6 col-sm-12 p-0 position-relative max-height-beauty-img">
          <img src="../assets/img/Beauty-brand.jpg" alt="Beauty-brand" class="Beauty-brand"/>
          <h3 class="brand-beauty-text">Huidverzorging</h3>
        </div>
      </div>
      <div>
        <BlogOne :data="blogOne" />
      </div>
      <div class="row mx-0 ">
        <div class="col-sm-12 pr-0 pl-0 max-height-four">
          <img src="@/assets/img/fourth-section-img.jpg" alt class="fourth-section-img"/>
        </div>
      </div>
      <div class="pl-md-2">
        <BlogTwo :data="blogTwo" />
      </div>
      <div>
        <BlogThree :data="blogThree" />
      </div>
      <div class="pb-0">
        <HowWorks />
        <div class="row mx-0 last-consule-btn bg-white pb-5">
          <button class="btn btn-md-sm consult-btn custom-btn mx-auto mx-auto" @click="openLoginModal"> Start online consult</button>
        </div>
      </div>
      <div style="height: 50px" class="main-back-color"></div>
    </div>
    <!-- <AppFooter /> -->
  </div>
</template>
<script>
import AppBanner from "@/components/AppBanner";
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
    HowWorks,
  },
  data() {
    return {
      home: {
        name: "home",
        title: "Huid_",
        subtitle: "Last van haaruitval of huidproblemen? Dan ben je op de juiste plek. Start vandaag nog een online consult met een van de artsen binnen ons netwerk en krijg je medicatie thuis geleverd.",
        button: true,
      },
      blogOne: {
        name: "blogOne",
        title: "Het Haar",
        text: "Een dierbaar maar kwetsbaar bezit. Het is onderdeel van de identiteit en vormt een weerspiegel van het karakter dat er onder zit. Het wordt gebruikt om te onderscheiden, te imponeren maar bovenal om te verleiden. Zorg er dus goed voor, verlies het niet! Last van haaruitval? Start een online consult met een van de artsen binnen ons netwerk om te zien hoe wij je kunnen helpen.",
        image: require("@/assets/img/shave-riversde.jpg"),
        subtitle: "Lees meer: finasteride en haarverlies",
      },
      blogTwo: {
        name: "blogTwo",
        title: "De Huid",
        text: "Het ademt, het voedt en vormt de barrière tussen de 'jij' en alles wat daarbuiten zit. Iedereen verdient het om zich comfortabel te voelen in zijn eigen huid, maar degene die last hebben van acne zijn dat meestal niet. Geen zorgen. Of je nu last hebt van acne of je huid simpelweg in perfecte conditie wilt krijgen, wij helpen je.  Weten wat het beste bij je past? Start met een online consult en ontvang een advies op maat.",
        image: require("@/assets/img/five-one.jpg"),
        subtitle: "Lees meer: finasteride en haarverlies",
      },
      blogThree: {
        name: "blogThree",
        title: "Waarom?",
        text: "n vergelijking met vrouwen, brengen mannen minder vaak een bezoek aan de huisartsenpraktijk. Ze schamen zich of worden geconfronteerd met talloze ‘gender-based’ stigmas. Wij verlagen de drempel om in contact te komen met een geregistreerde arts, proberen we hen de medische zorg te bieden die ze nodig hebben voor problemen die ze anders verborgen zouden houden",
        image: require("@/assets/img/six-section.jpg"),
        subtitle: "Lees meer: finasteride en haarverlies",
      },
    };
  },
  methods: {
    openLoginModal() {
      EventBus.$emit("open-login-modal");
    },
  },
};
</script>

<style scoped lang="scss">
.Beauty-brand {
  width: 100%;
  max-height: 720px;
}
.fourth-section-img {
  width: 100%;
  max-height: 1104px;
}
h3.brand-beauty-text {
  font-size: 60px;
  line-height: 48px;
  color: #212121;
  font-family: "Avenir-Medium";
  position: absolute;

  top: 65px;
  left: 28px;
}
@media screen and (max-width: 1850px) {
  h3.brand-beauty-text {
    top: 50px;
    top: 50px;
    left: 28px;
    font-size: 34px;
  }
  /* Extra large devices (large desktops, 1200px and up) */
@media screen and (max-width: 1450px) {
  /*  .max-height-beauty-img {
    height: 716px !important;
  } */
  /*  .max-height-four {
    height: 1081px !important;
  } */
  h3.brand-beauty-text {
    top: 40px;
    left: 26px;
    font-size: 32px;
  }
}
/* Large devices (desktops, 992px and up) */
@media screen and (max-width: 1200px) {
  h3.brand-beauty-text {
    top: 28px;
    left: 20px;
    font-size: 25px;
  }
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (max-width: 991px) {
  h3.brand-beauty-text {
    top: 20px;
    left: 20px;
    font-size: 20px;
  }
}
/* medium phone screen  */
@media screen and (max-width: 768px) {
  h3.brand-beauty-text {
    top: 1em;
    left: 1em;
    font-size: 36px;
  }
  .last-consule-btn{
    background-color: white;
  }
}

/* Small devices */
@media screen and (max-width: 640px) {
  h3.brand-beauty-text {
    top: 1em;
    left: 1em;
    font-size: 36px;
    font-family: 'Avenir-Medium';
  }
}

@media screen and (max-width: 400px) {
  h3.brand-beauty-text {
    font-size: 32px;
  }
}

@media screen and (max-width: 360px) {
  h3.brand-beauty-text {
    font-size: 28px;
  }
}
@media screen and (max-width: 330px) {
  h3.brand-beauty-text {
    font-size: 24px;
  }
}

@media screen and (max-width: 300px) {
  h3.brand-beauty-text {
    font-size: 20px;
  }
}


}
</style>
