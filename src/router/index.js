import Vue from 'vue';
import Router from 'vue-router';
//import Home from '../components/Home.vue';
//import CreateMeetup from '../components/Meetup/CreateMeetup.vue';
//import Meetups from '../components/Meetup/Meetups.vue';
//import Profile from '../components/User/Profile.vue';
//import SignUp from '../components/User/SignUp.vue';
//import SignIn from '../components/User/SignIn.vue';
//import Meetup from '../components/Meetup/Meetup.vue';
import Privacy from '../components/TermPrivacy/privacy.vue';
import Terms from '../components/TermPrivacy/term.vue';
import Land from '../components/LandPage.vue';
//import AuthGuard from './auth-guard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Land
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/term',
      name: 'Term',
      component: Terms
    },
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
