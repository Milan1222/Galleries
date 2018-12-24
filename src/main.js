import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  {path: '/', redirect: '/galleries'},
  {path: '/login', component: Login, name: 'login-name'},
  {path: '/register', component: Register, name: 'register-name'}
]

const router = new VueRouter({ routes, mode: 'history'})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
