<template>
<v-content >
    <v-container class="containeer">
      <v-stepper v-model="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="step > 2" step="2"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"></v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >step1 </v-card>

        <v-btn
          color="primary"
          @click="next"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="next"
        >
          Continue
        </v-btn>
        <v-btn
          color="primary"
          @click="previous"
        >
         previous
        </v-btn>
        <v-btn text @click.stop="dialog = true" >Cancel</v-btn>
        <v-dialog
      v-model="dialog"
      max-width="390"
    >
      <v-card >
        <v-card-title class="justify-center">go back to the home page?</v-card-title>

        <v-card-text>
          the process is not yet finish and you are trying to cancel all:
          do you really want to cancel?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="$router.replace({name:'Home'})"
          >
           YES!
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            NO!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          next
        </v-btn>
        <v-spacer></v-spacer>
      <v-btn
          color="primary"
          @click="previous"
        >
         previous
        </v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
    </v-container>
</v-content>
</template>

<script>
  export default {
    data () {
      return {
        step: 1,
        dialog: false,
      }
    },

    methods:{
      next(){
        this.step += 1
      }
    },
      previous(){
   
        this.step -= 1
      }
    
  }
</script>
<style >
.containeer{
  width: 800px;
}
</style>