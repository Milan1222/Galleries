<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">Galleries</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">
                All Galleries
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login"  v-if="!user">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register"  v-if="!user">Register</router-link>
            </li>
            <li class="nav-item">
              <a href="#"  @click="logoutUser" class="nav-link" v-if="user">Logout</a>
              <!-- <router-link @click="logoutUser" class="nav-link" role="button" to="/login" v-if="user">Logout</router-link> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    <!-- @click="logoutOnClick" -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },

  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      this.logout()
    }
  }
}
</script>

<style>

</style>



