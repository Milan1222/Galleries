<template>
    <div>
        <form @submit.prevent="submitRegisterForm">
            <h1 class="h3 mb-3 font-weight-normal" style="margin-top: 100px">Please register</h1>
            <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input v-model="user.first_name" required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first name">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input v-model="user.last_name" required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter last name">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="user.email" required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="user.password" required minlength="8" type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password">
            </div>
            <div class="form-check">
                <input v-model="user.terms_and_conditions" type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">I accept terms and conditions</label>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default {
  name: "Register",
    
  data() {
    return {
      user: {
        terms_and_conditions: false
      }
    };
  },
  methods: {
    ...mapActions(["register"]),
    submitRegisterForm() {
      this.register(this.user);
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
