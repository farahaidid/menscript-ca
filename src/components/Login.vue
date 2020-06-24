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
            <label for="remember" class="dha">Remember me for 30 days</label>
         </div>
      </div>
      <div class="actions mt-3">
         <router-link to="#" class="dha">Don't have an account?</router-link>
         <br />
         <router-link to="#" class="ac">Create an account</router-link>
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
   margin-top: 3rem;
   .font-normal {
      font-size: 72px;
      line-height: 48px;
      color: #2f2f2f;
      font-family:Avenir-Black;
      margin-top: 190px;
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
          width: 429px;
         height: 62px;
      }
      button {
         background-color: black;
         font-size: 24px;
         line-height: 48px;
         color: #fbfcff;
         width: 429px;
         height: 62px;
         border: 1px solid #000000;
      }
      label.dha {
         font-size: 16px;
         line-height: 24px;
          color: #707171!important;
         font-family:Avenir-Medium;
      }
   }
   .extra-space {
      height: 4rem;
   }
   .actions {
      a {
         font-size: 1em;
         text-decoration: none;
      }
      .dha {
         font-size: 16px;
         line-height: 24px;
          color: #707171!important;
         font-family:Avenir-Medium;
      }
      .ac{
          font-size: 16px;
          line-height: 24px;
          color: #000000!important;
         font-family:Avenir-Medium;
      }
   }
}

/* Small devices */
@media screen and (max-width: 640px) {
   .login .font-normal {
    font-size: 42px;
   
}
.login .form button {
    font-size: 20px;
    line-height: 36px;
    width: 285px;
    height: 55px;
    
}
 input[type="email"],
      input[type="password"] {
         width: 285px!important;
      }
}
</style>