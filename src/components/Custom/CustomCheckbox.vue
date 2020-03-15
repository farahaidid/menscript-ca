<template>
   <div class="custom-checkbox">
      <input @change="handleChange" :id="id" type="checkbox" :checked="checked" />
      <label :for="id">
         <span @click="()=> false">{{label}}</span>
      </label>
   </div>
</template>
<script>
export default {
   name: "custom-checkbox",
   props: {
      checked: {
         type: Boolean,
         default: false
      },
      label: String
   },
   data: () => ({
      id: Math.random()
         .toString(36)
         .slice(-3)
   }),
   methods: {
      handleChange({ target: { checked } }) {
         this.$emit("change", checked);
      }
   }
};
</script>

<style lang="scss" scoped>
.custom-checkbox {
   input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      & + label {
         position: relative;
         cursor: pointer;
         padding: 0;
         margin-bottom: 0;
         span {
            margin-left: 1rem;
            color: #555555;
            text-decoration: none;
            pointer-events: none;
         }
      }
      & + label:before {
         content: "";
         display: inline-block;
         vertical-align: text-top;
         width: 1rem;
         height: 1rem;
         background: white;
         border: 1.5px solid #555555;
         margin-top: 4px;
      }
      &:focus + label:before {
         box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
      }
      &:checked + label:before {
         background: #f57c00;
         border-color: #f57c00;
      }
      &:checked + label span {
         color: #f57c00;
      }
      &:checked + label:after {
         content: "";
         display: block;
         position: absolute;
         left: 5.8px;
         top: 8px;
         width: 5px;
         height: 8px;
         border: solid rgb(255, 255, 255);
         border-width: 0 1.99px 1.99px 0;
         transform: rotate(45deg);
      }
   }
}
</style>