<template>
  <div id="edit-members">
    <br />
    <br />
    <template>
      <v-row class="center">
        <v-card max-width="500px" class="mx-13">
          <v-card-title>
            <br />
            <span class="text-h5" style="text-align: center">
              Change role for {{ this.$route.params.name }}
            </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-radio-group v-model="rolevalue" column>
                <v-container
                  ><v-radio name="test_id" label="Admin" value="Admin"></v-radio>
                  <v-spacer />
                  <p>Access everything in Chargebee.</p>
                  <br />
                  <hr />
                </v-container>
                <v-container
                  ><v-radio name="test_id" label="Tech Support" value="Tech Support"></v-radio>
                  <v-spacer />
                  <p>
                    User can view "Subscriptions" and "Product Catalog" tabs. Can also view, add
                    comments to, send, download individual Invoices/Credit Notes.
                  </p>
                  <br />
                  <hr />
                </v-container>
                <v-container
                  ><v-radio name="test_id" label="Analyst" value="Analyst"></v-radio>
                  <v-spacer />
                  <p>
                    In addition to tech-support level access, user will have access to SaaS metrics
                    report.
                  </p>
                </v-container>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text
              ><router-link style="text-decoration: none" to="/"> Cancel </router-link></v-btn
            >
            <v-btn @click.prevent="update" color="blue darken-1" text> Update </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return { rolevalue: '' };
  },
  computed: {
    folderindex() {
      return this.$store.state.folders;
    },
  },
  methods: {
    update() {
      if (this.rolevalue === '') {
        alert('Please select a role');
      } else {
        const updateMember = {
          email: this.$store.state.folders[this.$route.params.index].email,
          name: this.$route.params.name,
          role: this.rolevalue,
        };

        this.$store.commit('delete', this.$route.params.index);
        this.$store.commit('add', updateMember, this.$route.params.index - 1);
        this.$router.push('/');
      }
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
