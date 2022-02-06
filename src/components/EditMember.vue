<template>
  <div id="edit-member">
    <template>
      <v-row class='center'>
        <v-card max-width="500px" class="mx-13">
          <v-card-title>
            <br>
            
            <span class="text-h5" style='text-align: center'>  Role for {{ name }}</span>
          </v-card-title>
          <v-card-text>
            <v-container max-width: 10px>
              <v-radio-group v-model="column" column>
                <v-container><v-radio label="Admin" value="radio-1"></v-radio>
                <v-spacer/> <p > Access everything in Chargebee. </p>
                <br>
                <hr>
                </v-container>
                <v-container><v-radio label="Tech Support" value="radio-2"></v-radio>
                <v-spacer/> <p> User can view "Subscriptions" and "Product Catalog" tabs. Can also view, add comments to, send, download individual Invoices/Credit Notes.</p>
                 <br>
                <hr>
                </v-container>
                <v-container><v-radio label="Analyst" value="radio-3"></v-radio>
                <v-spacer/> <p> In addition to tech-support level access, user will have access to SaaS metrics report. </p>
                
                </v-container>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="editvalue = false">
              Cancel
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </template>
  </div>
</template>

<script>

export default {
  
  name: "edit-member",
  data() {
    return {
      
      name: 'Sample'
      
      // radiocontent: [
      //   {
      //     role: 'Admin' , desc: 'Admin desc' },
      //    { role: 'Admin' , desc: 'Admin desc' },

      //  { role: 'Admin' , desc: 'Admin desc' },
    };
  },
  props: { editvalue : boo }
};
</script>


<style>
</style>
