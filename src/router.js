import Vue from 'vue';
import Router from 'vue-router';
import TeamMembers from './pages/TeamMembers.vue';
import EditMembers from './pages/EditMembers.vue';
import AddMembers from './pages/AddMembers.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: TeamMembers,
    },
    {
      path: '/EditMembers/:name :index',
      name: 'EditMembers',
      component: EditMembers,
    },
    {
      path: '/AddMembers',
      component: AddMembers,
    },
  ],
});
