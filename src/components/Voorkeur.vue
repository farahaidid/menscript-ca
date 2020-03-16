<template>
   <div class="voorkeur py-4">
      <h1 class="text-center mt-5">Voorkeur</h1>
      <div class="container text-center">
         <div class="vk-container mx-auto text-left">
            <p
               class="title"
            >Gebaseerd op de opgegeven antwoorden wordt de volgende behandeling aangeboden:</p>
            <div class="vk-box br-black mb-3">
               <div class="d-flex px-3 py-3">
                  <div>
                     <img :src="products[0].thumbnail" :alt="products[0].title" />
                  </div>
                  <div>
                     <h5 class="mb-0 mt-2">{{products[0].title}}</h5>
                     <p class="mb-0">{{products[0].quantity}} tabletten</p>
                  </div>
               </div>
            </div>
            <p class="title mt-5">
               Voorkeur voor een andere behandeling?
               Kies uit een van onderstaande opties:
            </p>
            <div class="vk-box mb-3" v-for="(pro,i) in products" :key="i">
               <div class="d-flex px-3 py-3">
                  <div>
                     <img :src="pro.thumbnail" :alt="pro.title" />
                  </div>
                  <div>
                     <h5 class="mb-0 mt-2">{{pro.title}}</h5>
                     <p class="mb-0">{{pro.quantity}} tabletten</p>
                  </div>
               </div>
               <div class="desc d-flex px-3 py-3">
                  <i class="fal fa-exclamation-circle mt-1 mr-3"></i>
                  <p class="mb-0">{{pro.description}}</p>
               </div>
            </div>
         </div>
         <button>Next</button>
      </div>
   </div>
</template>

<script>
export default {
   name: "voorkeur",
   data: () => ({
      products: [
         {
            title: "Finanteride 1mg",
            thumbnail:
               "https://i.pinimg.com/originals/d0/74/fd/d074fd5d97788ad45840582eee5f4cbd.jpg",
            quantity: 28,
            description: "Waarom heeft deze behandeling jouw voorkeur?"
         },
         {
            title: "Alopecia",
            thumbnail:
               "https://images-na.ssl-images-amazon.com/images/I/51lGMbkajdL._SY355_.jpg",
            quantity: 36,
            description: "Waarom heeft deze behandeling jouw voorkeur?"
         }
      ]
   })
};
</script>

<style lang='scss' scoped>
.voorkeur {
   background-color: #fbfbfa;
   overflow: auto;
   .vk-container,
   button {
      width: 30rem;
   }
   .vk-container {
      p.title {
         font-size: 1.1rem;
         color: #707171;
      }
      .vk-box {
         border: 1.1px solid #e1e1e1;
         img {
            width: 4rem;
         }
         h5 {
            color: #141414;
            font-size: 1.1em;
            font-weight: bolder;
         }
         p {
            font-size: 1em;
            color: #505151;
         }
         .desc {
            border-top: 1.1px solid #e1e1e1;
            p {
               color: #aaaaa9;
               font-size: 0.9em;
               line-height: 1.6;
            }
         }
         &.br-black {
            border-color: black !important;
         }
      }
   }
   button {
      border: 1.1px solid black;
      padding: 0.5rem 1rem;
      background-color: black;
      color: white;
   }
}
@media screen and (max-width: 576px) {
   .voorkeur {
      .vk-container {
         width: 100%;
         padding: 0 0.5rem;
      }
      button {
         width: calc(100% - 1rem);
      }
   }
}
</style>