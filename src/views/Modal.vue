<template>
  <v-container fluid>

    <h1>{{this.$route.params.id}}</h1>
     <section   v-for="(question,index) in questions"
                :key="index"> {{question.name}}
     </section>
      <v-flex class=" align-center">
          <v-row justify="center">
              
    <v-dialog v-model="dialog" scrollable persistent max-width="300"  >
              
      <v-card>
        <v-card-title  v-for="(item,index) in question"
                :key="index">{{item.question_helper}}</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group  >
            
            <v-radio label="buisness web app, The" value="bahamas"></v-radio>
            <v-radio label="personnal wev app" value="bahrain"></v-radio>
           
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="flex-end justify-end">
        <v-btn color="red" @click="dialog = false">Cancel</v-btn>
        <v-btn  to="/requirements" color="primary">Continue</v-btn>
        
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
      </v-flex>
  </v-container>
</template>

<script>


  export default {

      computed:{
   
      questions(){
      return this.$store.state.categories.find(cat => cat.id )
      
    },
  
  
          },
      name:'Modal',
    data () {
      return {
        dialogm1: '',
        dialog: true,
        
      }
    },
  }
</script>