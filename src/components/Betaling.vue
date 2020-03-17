<template>
   <div class="betaling py-4">
      <h1 class="text-center mt-5 mb-4">Betaling</h1>
      <div class="container text-center">
         <div class="bt-container mx-auto text-left row">
            <div class="col-md-6 w-100 pr-5">
               <div class="form mb-4">
                  <h5 class="mb-4">1. Details</h5>
                  <div class="row m-0">
                     <div class="col-md-5 pl-0 mb-3">
                        <input type="text" placeholder="Voornaam" />
                     </div>
                     <div class="col-md-7 px-0">
                        <input type="text" placeholder="Achternaam" />
                     </div>
                     <div class="col-md-12 px-0 pb-3">
                        <input type="text" placeholder="Straat + nummer" />
                     </div>
                     <div class="col-md-6 pl-0 mb-3">
                        <input type="text" placeholder="Stad" />
                     </div>
                     <div class="col-md-6 px-0">
                        <input type="text" placeholder="Post code" />
                     </div>
                     <div class="col-md-6 pl-0 mb-3">
                        <input type="text" placeholder="LAND" />
                     </div>
                     <div class="col-md-6 px-0">
                        <input type="text" placeholder="Mobiel nummer" />
                     </div>
                     <div class="col-md-12 px-0">
                        <textarea placeholder="Notities voor bezorger"></textarea>
                     </div>
                  </div>
               </div>
               <div class="frequentie">
                  <h5 class="mb-2">2. Frequentie</h5>
                  <div class="d-flex">
                     <div class="pr-2">
                        <button class="w-100 mb-2">
                           <span class="per">-10%</span>
                           <span>iedere maand</span>
                        </button>
                        <button class="w-100 c-out">
                           <span class="per">-12%</span>
                           <span>iedere 3 maanden</span>
                        </button>
                     </div>
                     <div class="pl-2">
                        <button class="w-100 c-out mb-2">
                           <span class="per">-15%</span>
                           <span>iedere 6 maanden</span>
                        </button>
                        <button class="w-100 c-out">
                           <span>eenmalige aankoop</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div class="desteloverzicht col-md-6 w-100 pl-5">
               <h5 class="mb-4">Besteloverzicht</h5>
               <div class="vk-box br-black mb-3">
                  <div class="d-flex px-3 py-3">
                     <div>
                        <img :src="product.thumbnail" :alt="product.title" />
                     </div>
                     <div class="w-100">
                        <h5 class="mb-0 mt-2">{{product.title}}</h5>
                        <p>{{product.quantity}} tabletten</p>
                        <div class="text-right">
                           <h5>€25.20 p/mnd €28.00</h5>
                        </div>
                     </div>
                  </div>

                  <div class="bt p-3">
                     <p>Kortingscode? Vul die hier in ></p>
                  </div>
                  <div class="bt p-3 d-flex">
                     <div class="subt w-100">
                        <p>Subtotal</p>
                        <p>Verzending met PostNL</p>
                        <p>Verwerkingskosten</p>
                     </div>
                     <div class="amm text-right w-100">
                        <p>€25.20</p>
                        <p>GTATIS</p>
                        <p>€5.00</p>
                     </div>
                  </div>
                  <div class="bt pt-2 pl-3 d-flex">
                     <div class="w-100">
                        <h5>Totaal te betalen</h5>
                     </div>
                     <div class="text-right w-100 pr-3">
                        <h5>€30.20</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <button class="done mt-5">Plaats bestelling</button>
      </div>
   </div>
</template>

<script>
export default {
   name: "betaling",
   data: () => ({
      product: {
         title: "Finanteride 1mg",
         thumbnail:
            "https://i.pinimg.com/originals/d0/74/fd/d074fd5d97788ad45840582eee5f4cbd.jpg",
         quantity: 28,
         description: "Waarom heeft deze behandeling jouw voorkeur?"
      }
   })
};
</script>

<style lang='scss' scoped>
h5 {
   font-size: 1em;
}
p {
   margin-bottom: 0;
}
.betaling {
   background-color: #fbfbfa;
   overflow: auto;
   padding-bottom: 6rem !important;
   button {
      border: 1.1px solid black;
      padding: 0.5rem 1rem;
      background-color: black;
      color: white;
   }
   button.done {
      width: 24rem;
   }
   .form {
      input,
      textarea {
         width: 100%;
         padding-left: 1rem;
         border: 1px solid #b7b7b7;
      }
      input {
         height: 3rem;
         padding-top: 0.9rem;
      }
      textarea {
         height: 5.5rem;
         padding-top: 0.2rem;
      }
   }
   .vk-box {
      border: 1px solid #555555;
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
      &.br-black {
         border-color: black !important;
      }
      .bt {
         border-top: 1px solid #555555;
      }
   }
   .frequentie {
      button {
         position: relative;
         color: #c5c8c9;
         .per {
            position: absolute;
            font-size: 0.8em;
            top: 0;
            right: 0.2rem;
         }
      }
      button.c-out {
         color: #acacac;
         background-color: transparent;
         border-color: #acacac;
      }
   }
   .desteloverzicht {
      .subt p {
         color: #cdcfd0;
      }
      .amm p {
         color: black;
      }
   }
}
@media screen and (max-width: 576px) {
   .betaling {
      .bt-container {
         width: 100%;
         padding: 0 0.5rem;
      }
      button {
         width: calc(100% - 1rem);
      }
   }
}
</style>