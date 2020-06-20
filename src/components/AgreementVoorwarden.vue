<template>
  <div>
    <div class="scroll-section-blog">
      <p class="privacy-scroll-text">Scroll</p>
    </div>
    <div class="container-fluid w-75 privacy-div position-relative" style="margin-bottom: 70px">
      <div class="row">
        <div class="col-md-12 text-center privacy-title">
          <p class="privacy-title">ALGEMENE VOORWAARDEN</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 ">
          <p class="privacy-subtitle"></p>
        </div>
        <div class="col-md-6 text-center">
          <p class="privacy-text">
            Deze algemene voorwaarden (“Algemene Voorwaarden") gelden voor jouw gebruik van onze online interfaces en eigendommen (bijv. websites en mobiele applicaties) die eigendom zijn van en worden beheerd door menscript, inclusief de https://menscript.com website (de "Site") en de services die beschikbaar zijn voor gebruikers via de Site ("Services"). Naleving van deze gebruiksvoorwaarden is een voorwaarde voor het gebruik van de site. 
          </p>
          <p class="privacy-text">
            We raden je aan om ook ons privacybeleid te raadplegen voor een beschrijving van onze privacypraktijken, inclusief hoe we uw persoonlijke gezondheidsinformatie en financiële informatie verzamelen en verwerken.
          </p>
          <p class="privacy-text">
            menscript.com biedt zelf geen artsenconsulten aan. Alle providers zijn onafhankelijk van menscript.com en gebruiken de service als een manier om met jou te communiceren. Informatie en adviezen die via deze provider worden ontvangen, komen alleen van hen en bevat nimmer een inbreng of opinie van menscript.com. Interacties met de providers via de Service zijn geen vervanging van het contact met de reguliere zorgverleners. Noch menscript.com, noch een van haar dochterondernemingen of gelieerde ondernemingen is aansprakelijk voor professioneel advies of andere informatie dat via de Service van een zorgverlener wordt verkregen. 
menscript.com onderschrijft geen specifieke tests, artsen, medicijnen, producten of procedures die worden aanbevolen door providers die menscript.com gebruiken om met jou te communiceren. Je erkent dat jouw vertrouwen in de zorgverleners of informatie die door de zorgverleners via de Dienst worden verstrekt uitsluitend op eigen risico is en dat je hiervoor de volledige verantwoordelijkheid neemt. 
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 ">
          <p class="privacy-subtitle">Eigendom van de site & aanverwant materiaal</p>
        </div>
        <div class="col-md-6 ">
          <p class="privacy-text">
            Alle pagina's op deze site en al het materiaal dat beschikbaar is gemaakt om te downloaden, zijn eigendom van menscript.com of zijn licentiegevers of leveranciers. De site wordt beschermd door het auteursrecht en het handelsmerk van de EU.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 ">
          <p class="privacy-subtitle">Electronixche communicatie</p>
        </div>
        <div class="col-md-6 ">
          <p class="privacy-text">
            Zodra je gebruikt maakt van een Service die aangeboden wordt op menscript.com, communiceer je elektronisch met ons. Hiermee stem je in om tevens elektronische communicatie van ons te ontvangen. Je gaat er mee akkoord dat (a) alle overeenkomsten en toestemmingen elektronisch kunnen worden ondertekend en (b) alle kennisgevingen, bekendmakingen en andere communicatie die wij je elektronisch verstrekken, voldoen aan alle wettelijke vereisten dat dergelijke kennisgevingen en andere communicatie schriftelijk zijn.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <p class="privacy-subtitle">Toegang tot de site, beveiliging en beperkingen</p>
        </div>
        <div class="col-md-6">
          <p class="privacy-text">
            Maak je bij ons een account aan? Dan ga je ermee akkoord actuele en volledige informatie te verstrekken die voor dit account noodzakelijk is. In het geval dat de toegang tot de site of een deel daarvan beperkt is en een gebruikers-ID en wachtwoord ("beschermde gebieden") vereist is, ga je ermee akkoord om toegang te krijgen tot beschermde gebieden met alleen jouw gebruikers-ID en wachtwoord zoals verstrekt door menscript.com. Je stemt ermee in jouw gebruikers-ID en wachtwoord te beschermen tegen toegang van derden en deze informatie niet met hen te delen of anderzijds bekendmaken. 
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <p class="privacy-subtitle">Garanties</p>
        </div>
        <div class="col-md-6">
          <p class="privacy-text">
            MENSCRIPT.COM GEEFT GEEN GARANTIE DAT DE TOEGANG TOT OF HET GEBRUIK VAN DE WEBSITE ONONDERBROKEN OF FOUTLOOS ZAL ZIJN OF DAT DEFECTEN IN DE WEBSITE WORDEN VERBETERD. DEZE SITE, INCLUSIEF INHOUD OF INFORMATIE IN DEZE OF EEN AANVERWANTE SERVICE, WORDT GELEVERD “ZOALS HET IS”, MET ALLE FOUTEN, ZONDER VERTEGENWOORDIGINGEN OF ENIGE GARANTIES, UITDRUKKELIJK OF IMPLICIET, INCLUSIEF, MAAR NIET BEPERKT TOT, GARANTIES VAN VERKOOPBAARHEID, GESCHIKTHEID VOOR EEN BEPAALD DOEL, KWALITEIT VAN INFORMATIE, STIL GENOT EN TITEL / NIET-INBREUK. MENSCRIPT.COM GEEFT GEEN GARANTIE OP DE NAUWKEURIGHEID, VOLLEDIGHEID OF ACTUALITEIT VAN DE INFORMATIE DIE VIA DE SITE IS VERKREGEN. U VERZEKERT TOTALE VERANTWOORDELIJKHEID EN RISICO VOOR UW GEBRUIK VAN DEZE SITE, AAN DE SITE VERBONDEN DIENSTEN EN GELINKTE WEBSITES.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.privacy-title{
  font-family: Avenir-Medium;
  margin: 70px 0;
  font-size: 30px;
  letter-spacing: 2px;
}
.privacy-subtitle {
  font-size: 16px;
  font-family: Avenir-Medium;
  font-weight: bold;
}
p.privacy-text {
  font-size: 16px;
  font-family: Avenir-Book;
  text-align: justify;
  color: grey;
}
.privacy-scroll-text {
  position: absolute;
  top: 500px;
  left: 10px;
  font-family: Montserrat;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  font-size: 16px;
}
.privacy-scroll-text::before {
  content: "";
  border: 1px solid #252525;
  top: 0.7em;
  position: absolute;
  left: 4em;
  width: 33px;
}
/* Small devices */
@media screen and (max-width: 640px) {
  .privacy-div {
    padding-top: 50px;

    padding-left: 50px;
  }
  .privacy-scroll-text {
    position: absolute;
    top: 293px;
    font-family: Montserrat;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    font-size: 12px;
    left: 7px;
  }
}
/* medium phone  */
@media screen and (min-width: 641px) and (max-width: 768px) {
  .privacy-div {
    padding-top: 50px;

    padding-left: 50px;
  }
  .privacy-scroll-text {
    position: absolute;
    top: 293px;
    font-family: Montserrat;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    font-size: 12px;
    left: 7px;
  }
}
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .privacy-div {
    padding-top: 50px;

    padding-left: 50px;
  }
  .privacy-scroll-text {
    position: absolute;
    top: 293px;
    font-family: Montserrat;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    font-size: 12px;
    left: 0px;
  }
}
</style>
