<template>
   <div class="verificate py-4">
      <h1 class="text-center mt-5">ID Verificate</h1>
      <div class="container text-center">
         <div class="vf-container mx-auto text-left">
            <p
               class="title my-4"
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
.verificate {
   background-color: #fbfbfa;
   overflow: auto;
   .vf-container,
   div.w-30 {
      width: 30rem;
   }
   button.vol {
      width: 24rem;
   }
   .vf-container {
      p.title {
         font-size: 1em;
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
@media screen and (max-width: 576px) {
   .verificate {
      .vf-container,
      div.w-30 {
         width: 100%;
      }
      .vf-container {
         padding: 0 0.5rem;
      }
      button {
         width: calc(100% - 1rem) !important;
      }
   }
}
</style>