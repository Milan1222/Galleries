<template>
    <div>
        <!-- <router-link :to="{name: 'login-name'}"></router-link> -->
        <form 
        class="form-signin"
        @submit.prevent="submitLoginForm"
        >
        <h1 class="h3 mb-3 font-weight-normal" style="margin-top: 100px">Please log in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input 
            required
            type="text"
            id="inputEmail" 
            class="form-control"
            placeholder="Email address" 
            autofocus=""
            v-model="user.email"
        >
        <label for="inputPassword" class="sr-only">Password</label>
        <input 
            required
            type="password" 
            id="inputPassword" 
            class="form-control" 
            placeholder="Password" 
            v-model="user.password"
        >      
        <button 
            class="btn btn-lg btn-primary btn-block" 
            type="submit"        
        >
        Log in
        </button> 
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  
  data() {
    return {
      user: {}
    };
  },
  methods: {
    ...mapActions(["login"]),
    submitLoginForm() {
        console.log(this.user)
      this.login(this.user);
    }
  },
  computed: {
    ...mapGetters({
      errors: "getErrors"
    })
  }
};
</script>

<style>

</style>
