import Vue from 'vue';
import VueRouter from 'vue-router';
import AppGalleries from './components/AppGalleries';
import Login from './components/Login';
import Register from './components/Register';
import MyGalleries from './components/MyGalleries';

Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/galleries'},
  {path: '/galleries', name: 'home', component: AppGalleries, meta: {auth: false}},
  {path: '/my-galleries', name: 'my-galleries', component: MyGalleries},
  {path: '/login', name: 'login', component: Login, meta: {guest: true}},
  {path: '/register',name: 'register',component: Register,meta: {guest: true}}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = !!localStorage.getItem('token');
//   if (isAuthenticated && to.meta.guest) {
//     return next({ name: 'home' });
//   }
//   if (!isAuthenticated && to.meta.auth) {
//     return next({ name: 'login' });
//   }
//   return next();
// });

export default router;