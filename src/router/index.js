import Vue from 'vue';
import Router from 'vue-router';
import Leaderboard from '@/components/Leaderboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Leaderboard',
      component: Leaderboard
    }
  ]
});
