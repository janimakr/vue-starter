<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
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
        role: 'Editor',
      },
    ],
  }),
  computed: {
    edit() {
      return false;
    },
  },
  methods: {
    invite() {
      return alert('New Member');
    },
    add() {
      return alert('Edit');
    },
    remove() {
      return alert('Remove');
    },
  },
};
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
