<template>
   <div class="question">
      <p class="title font-normal avenirmedium my-4">{{qs.question}}</p>
      <div v-for="(opt,index) in qs.options" :key="opt.id">
         <div
            @click="onClickOption(index)"
            :class="opt.selected&&'selected'"
            class="option px-4 py-3 mt-2"
         >
            <Checkbox @change="v=>opt.selected=v" :checked="opt.selected" :label="opt.title" />
         </div>
         <div v-if="opt.desc">
            <textarea type="text" v-model="opt.description" :placeholder="opt.hint" />
         </div>
      </div>
   </div>
</template>
<script>
import Checkbox from "../Custom/CustomCheckbox";
export default {
   name: "question",
   components: {
      Checkbox
   },
   props: ["question"],
   data: () => ({
      qs: {}
   }),
   created() {
      this.qs = this.question;
   },
   methods: {
      onClickOption(i) {
         if (this.qs.multiselect) {
            let selected = this.qs.options[i].selected;
            this.qs.options[i].selected = !selected;
         } else {
            this.qs.options = this.qs.options.map(o => ({
               ...o,
               selected: false
            }));
            this.qs.options[i].selected = true;
         }
      }
   }
};
</script>
<style lang="scss" scoped>
.question {
   p.title {
      font-size: 1.1rem;
      color: #707171;
   }
   .option {
      background-color: white;
      border: 1px solid #d7d7d7;
      cursor: pointer;
      &.selected {
         border-color: black;
      }
   }
   textarea {
      border-top: none;
      width: 100%;
      padding: 0.5rem 1rem;
      color: #707171;
      border-color: #d7d7d7;
      background-color: transparent;
      &::placeholder {
         color: #8c8c8c;
      }
   }
}
</style>