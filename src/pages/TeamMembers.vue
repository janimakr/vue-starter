<template>
  <div id="team-members" class="center">
    <v-column class='center'>

    <v-card  min-width="500px" class="mx-13 my-13" >
      <v-toolbar color="light-blue" light>
        <v-toolbar-title>Team Members ( {{ folders.length }} )</v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="text-center">
          <v-btn text color="primary" dark>
            <router-link style="text-decoration: none" to="/AddMembers">
              + Invite Members
            </router-link>
          </v-btn>
        </div>
      </v-toolbar>

      <v-list subheader two-line>
        <v-list-item v-for="(folder, indexval) in folders" :key="folder.name">
          <v-list-item-avatar>
            <v-icon class="grey lighten-1" dark> mdi-folder </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="folder.name"></v-list-item-title>

            <v-list-item-subtitle v-text="folder.email"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-text="folder.role"></v-list-item-title>
          </v-list-item-content>

          <v-btn
            @click.prevent="edit(indexval)"
            class="mx-2"
            fab
            light
            small
            color="cyan"
            style="margin: 5px"
            ><router-link style="text-decoration: none"
              :to="{ name: 'EditMembers', params: { name: folder.name, index: indexval } }"
              ><v-icon dark> mdi-pencil </v-icon></router-link
            >
          </v-btn>

          <v-btn @click.prevent="remove(indexval)" class="mx-2" fab light small color="cyan">
            <v-icon dark> mdi-delete </v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
    </v-column>
  </div>
</template>

<script>
export default {
  name: 'team-members',
  data() {
    return {
      indexval: '',
    };
  },
  computed: {
    folders() {
      return this.$store.state.folders;
    },
  },

  methods: {
    edit(index) {
      return console.log(index);
    },
    invite() {
      return alert('New Member');
    },
    add() {
      return alert('Edit');
    },
    remove(index) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-restricted-globals
      const val = confirm(`${this.folders[index].name} will not be able to access this site.`);
      if (val === true) return this.folders.splice(index, 1);
      return this.folders;
      //   if (confirm(`${this.folders[index].name} will not be able
      // to access this site.`) === true) {
      //     return this.folders.splice(index, 1);
      //   }
      //   else{
      //       return this.folders
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
