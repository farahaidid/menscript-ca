<template>
   <div class="login text-center">
      <h1 class="font-normal mb-5">Welkom</h1>
      <div class="form pt-3">
         <div class="mb-3">
            <input v-model="email" type="email" placeholder="Email address" />
         </div>
         <div v-if="isValidEmail" class="mb-3">
            <input v-model="password" type="password" placeholder="Enter password" />
         </div>
         <button>Continue</button>
         <div class="extra-space"></div>
         <div>
            <input type="checkbox" id="remember" class="mr-1" v-model="remember" />
            <label for="remember">Remember me for 30 days</label>
         </div>
      </div>
      <div class="actions mt-3">
         <router-link to="#" class="dha">Don't have an account?</router-link>
         <br />
         <router-link to="#">Create an account</router-link>
      </div>
   </div>
</template>

<script>
export default {
   name: "login",
   data: () => ({
      email: "",
      password: "",
      remember: false
   }),
   methods: {
      validateEmail(email) {
         var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(String(email).toLowerCase());
      }
   },
   computed: {
      isValidEmail() {
         //if (this.email.trim() === "") return false;
         return this.validateEmail(this.email);
      }
   }
};
</script>

<style lang="scss" scoped>
.login {
   margin-top: 7rem;
   .font-normal {
      font-weight: normal !important;
   }
   .form {
      input[type="email"],
      input[type="password"],
      button {
         border: 1.1px solid black;
         padding: 0.5rem 1rem;
         width: 16rem;
      }
      input[type="email"],
      input[type="password"] {
         background-color: transparent;
      }
      button {
         background-color: black;
         color: white;
      }
   }
   .extra-space {
      height: 4rem;
   }
   .actions {
      a {
         font-size: 1em;
         color: black;
         text-decoration: none;
      }
      .dha {
         color: gray;
      }
   }
}
</style>