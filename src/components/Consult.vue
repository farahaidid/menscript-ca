<template>
   <div class="consult">
      <h1 class="text-center consult-title ">Consult</h1>
      <div class="container text-center">
         <div class="opt-container mx-auto text-left">
            <p class="page">{{currentQuestion+1}} of {{questions.length}}</p>
            <div v-for="(qs,index) in questions" :key="qs.id">
               <Question v-if="index === currentQuestion" :question="qs" />
            </div>
         </div>
         <button
            @click="currentQuestion = currentQuestion + 1"
            :disabled="!validSelection"
            :class="!validSelection&&'disabled'"
            class="next my-3"
         >Next</button>
      </div>
   </div>
</template>

<script>
import Question from "./Consult/Question";
export default {
   name: "consult",
   components: {
      Question
   },
   data: () => ({
      currentQuestion: 0,
      questions: [
         {
            id: 1,
            question: "Hoe hoog is je bloeddruk?",
            multiselect: true,
            options: [
               {
                  id: 1,
                  title: "Laag (tussen 70/40 en 90/60 mmHg)",
                  selected: false
               },
               {
                  id: 2,
                  title: "Normaal (tussen 90/60 en 120/80 mmHg)",
                  selected: false
               },
               {
                  id: 3,
                  title: "Pre-hoog (tussen 120/80 en 140/90 mmHg)",
                  selected: false
               },
               {
                  id: 4,
                  title: "Hoog (over 140/90 mmHg)",
                  selected: false
               }
            ]
         },
         {
            id: 2,
            question:
               "Gebruik je momenteel medicijnen; zowel over-the-counter medicijnen als receptmedicijnen?",
            multiselect: false,
            options: [
               {
                  id: 1,
                  title: "Ja",
                  description: "",
                  hint: "Walke?",
                  desc: true,
                  selected: false
               },
               {
                  id: 2,
                  title: "Nee",
                  selected: false
               }
            ]
         }
      ]
   }),
   computed: {
      validSelection() {
         return (
            this.questions[this.currentQuestion].options.reduce(
               (c, o) => (o.selected ? c + 1 : c),
               0
            ) > 0
         );
      }
   }
};
</script>

<style lang="scss" scoped>
 .consult-title {
      font-size: 72px;
line-height: 48px;
color: #2f2f2f;
font-family:Avenir Black;
margin-top:200px;
   }
.consult {
   background-color: #fbfbfa;
   overflow: auto;
   .opt-container {
      width: 30rem;
      .page {
         font-size: 0.8rem;
         color: #9e9e9e;
      }
   }
   button.next {
      border: 1.1px solid #f57c00;
      padding: 0.7rem 1rem;
      width: 30rem;
      background-color: #f57c00;
      color: white;
      &:hover {
         background-color: #e65100;
      }
      &.disabled {
         border-color: grey;
         background-color: grey;
      }
      &.disabled:hover {
         background-color: grey;
      }
   }
}
@media screen and (max-width: 640px) {
   .consult-title {
      font-size: 42px;

   }
   .consult {
      .opt-container {
         width: 100%;
         padding: 0 0.5rem;
      }
      button.next {
         width: calc(100% - 1rem);
      }
   }
}
</style>