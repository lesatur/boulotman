<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable persistent max-width="300" transition>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>WHICH kind of app do you want to develop</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group v-model="dialogm1" column>
            <v-radio label="buisness web app, The" value="bahamas"></v-radio>
            <v-radio label="personnal wev app" value="bahrain"></v-radio>
           
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
        <v-btn color="primary" @click.prevent="next">Continueu</v-btn>
        <v-btn text>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
      name:'Modal',
    data () {
      return {
        dialogm1: '',
        dialog: false,
      }
    },
  }
</script>