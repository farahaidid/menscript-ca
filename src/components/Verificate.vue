<template>
   <div class="verificate">
      <h1 class="text-center  Verificate ">ID Verificate</h1>
      <div class="container text-center">
         <div class="vf-container mx-auto text-left">
            <p
               class="text my-4"
            >Wij zijn wettelijk verplicht je identiteit te controleren. Geen zorgen, het is een eenmalig proces en neemt minder dan 60 sec. in beslag.</p>
            <div class="address-box p-5 mb-5">
               <i class="fas fa-address-card"></i>
            </div>
         </div>
         <div class="mx-auto w-30 mb-4 pos-rel d-flex">
            <button class="c-out w-100 mr-3">Upload photo</button>
            <button class=" c-out w-100 ml-3">Take photo</button>
         </div>
         <button class="vol">Volgende</button>
      </div>
   </div>
</template>

<script>
export default {
   name: "verificate",
   data: () => ({})
};
</script>

<style lang='scss' scoped>
.Verificate{
   font-size: 73px!important;
    line-height: 48px;
    color: #2f2f2f;
    font-family: Avenir Black;
    margin-top: 190px;
}
.verificate {
   background-color: #fbfbfa;
   overflow: auto;
   .vf-container,
   div.w-30 {
      width: 30rem;
   }
   button.vol {
      width: 436px;
      height: 62px;
      background-color: #000000;
      border: 1px solid #000000;
      font-size: 24px;
      line-height: 48px;
      color: #ffffff;   
      font-family:Avenir Black;
   }
   .vf-container {
      p.text {
         font-size: 18px;
        
         font-family: Avenir;
         color: #707171;
      }
      .address-box {
         border: 1.1px solid black;
         i {
            color: #235a88;
            font-size: 6em;
         }
      }
   }
   button {
      border: 1.1px solid black;
      padding: 0.5rem 1rem;
      background-color: black;
      color: white;
      font-weight: bolder;
   }
   .c-out {
      color: black;
      background-color: transparent !important;
      &:hover {
         background-color: black !important;
         color: white;
      }
   }
}
@media screen and (max-width: 640px) {
   .Verificate{
   font-size: 42px!important;
   
}
.verificate button.vol {
    width: 309px;
    font-size: 20px;  
}
   .verificate {
      .vf-container,
      div.w-30 {
         width: 100%;
      }
      .vf-container {
         padding: 0 0.5rem;
      }
     
   }
}
</style>