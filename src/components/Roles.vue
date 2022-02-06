<template>
    <div>
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
    </div>

</template>

<script>
export default {
  name: 'roles',
  data(){
    return {
  }
  }
};
</script>

<style>
</style>
