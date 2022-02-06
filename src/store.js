import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    type: 'abc',
    folders: [
      {
        email: 'mark@chargebee.com',
        name: 'Mark',
        role: 'Admin',
      },
      {
        email: 'jake@chargebee.com',
        name: 'Jake',
        role: 'Admin',
      },
      {
        email: 'peter@chargebee.com',
        name: 'Pete',
        role: 'Analyst',
      },
    ],
  },
  mutations: {
    add(state, member, index) {
      state.folders.splice(index, 0, member);
    },
    delete(state, index) {
      state.folders.splice(index, 1);
    },
  },
});
