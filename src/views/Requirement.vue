<template>
  <v-container fluid class="block relative" >
      <v-parallax
    
    dark
    src="../assets/construction 4.jpg"
  >
  <v-col class="justify-center align-center text-center"> <h1>{{id}}</h1></v-col>
    <v-row
    
    >
   
    <v-col cols="12 "  v-for="(item,index) in questions"
                :key="index">
          <h1>{{item.name}}</h1>
      </v-col>
      <v-col class="justify-center " >
        <v-card  width="400" class="relative" >
        <v-card-title  v-for="(co,index) in item"
                :key="index">{{co.question_helper}}</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group  >
            
            <v-radio label="buisness web app, The" id="bahamas" value="bahamas" v-model="picked"></v-radio>
            <v-radio label="personnal wev app" id="bahrain" value="bahrain"></v-radio>
           
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="flex-end justify-end">
        <v-btn color="red" @click="dialog = false">Cancel</v-btn>
        <v-btn  to="/requirements" color="primary">Continue</v-btn>
        
        </v-card-actions>
      </v-card>
  
      </v-col>
    </v-row>
  </v-parallax>
  <v-container>
      <v-row>
          <v-col cols="12" class="align-center justify-center">
              <h1 class="align-center justify-center">RELATED SERVICES</h1>
          </v-col>
      </v-row>
  </v-container>
  </v-container>
</template>
<script>
export default {
  
data(){
      return {
        id: this.$route.params.id,
         picked: '',
        dialog: true,
      }

    },
  
    computed:{
   
    questions(){
    return this.$store.state.categories.map(i=>i.services).find(i=>i.id)
      
    },
    
    }
}
</script>