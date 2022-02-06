<template>
  <div id="add-member">
    <template>
      <v-row class="center">
        <v-card max-width="500px" class="mx-13">
          <v-card-title>
            <br />
            <span class="text-h5">Invite a team member to use Chargebee</span>
            <v-spacer />
          </v-card-title>
          <v-card-text>
            <span class="text-h7"
              >You can either let your team members access everything in this site, or assign
              specific roles to them.</span
            >
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="name" label="Name" required> </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="email" label="Email" required> </v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-spacer /><span class="text-h7">Select user access level</span>
            <v-container>
              <v-radio-group v-model="role" column>
                <v-radio label="Admin" value="Admin" checked></v-radio>
                <v-spacer />
                <p>Access everything in Chargebee.</p>
                <br />
                <hr />

                <v-radio label="Tech Support" value="Tech Support"></v-radio>
                <v-spacer />
                <p>
                  User can view "Subscriptions" and "Product Catalog" tabs. Can also view, add
                  comments to, send, download individual Invoices/Credit Notes.
                </p>
                <br />
                <hr />

                <v-radio label="Analyst" value="Analyst"></v-radio>
                <v-spacer />
                <p>
                  In addition to tech-support level access, user will have access to SaaS metrics
                  report.
                </p>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text
              ><router-link style="text-decoration: none" to="/"> Cancel </router-link></v-btn
            >
            <v-btn color="blue darken-1" text @click.prevent="add"> Invite </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </template>
  </div>
</template>

<script>
export default {
  name: 'add-member',
  data() {
    return {
      dialog: false,
      name: '',
      email: '',
      role: '',
    };
  },

  methods: {
    add() {
      const validRegex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
      if (this.role === '') {
        alert('Please select a role');
      } else if (this.name === '') {
        alert('Please enter a name');
      } else if (this.email === '' || !this.email.match(validRegex)) {
        alert('Please enter a valid Email ID');
      } else {
        const newMember = {
          email: this.email,
          name: this.name,
          role: this.role,
        };

        this.$store.commit('add', newMember);
        this.$router.push('/');
      }
    },
  },
};
</script>

<style></style>
