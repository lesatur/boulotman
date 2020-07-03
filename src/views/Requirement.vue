<template>
  <v-container fluid class="block relative" >
    <v-card class="relative" v-for="(sub_service,index) in subservices.services" :key="index">
        <h2>{{sub_service.name}}</h2>
        <p>{{sub_service.question_helper}}</p>
        <v-card class="relative" v-for="(service,index) in sub_service.sub_services" :key="index">
          
          <br/>
          <h3>{{service.name}}</h3>
          <p>{{service.description}}</p>
            <v-card class="relative" v-for="(question,index) in service.questions" :key="index">
                <h4> -{{index}}): {{question.text}}</h4>
                <h6 v-for="(choice,index) in question.choices" :key="index">
                  - {{choice.text}}
                </h6>
            </v-card>
        </v-card>
      </v-card>
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
   
    subservices(){
      return this.$store.getters.subServiceDataOfService(this.id);
    },
    
    }
}
</script>