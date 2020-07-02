<template>
<v-container fluid>
 <h1>{{categories.name}}</h1>
        <v-flex>


         <v-row dense >
    <v-col cols="3" 
    v-for="service in services"
    :key="service.id">

      <v-card outlined shaped class="mx-auto">

    <v-img
      class="align-center"
      :src="service.image"
      height="190px"
    ></v-img>

              <v-card-text class="text-center">
                <p><strong>{{service.name}}</strong></p>
                  {{service.description}}
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto">
                   <router-link :to="{name: 'service', params:{id:service.name}}">
                    <v-btn rounded color="teal accent-3" >Get Service</v-btn>
                   </router-link>
                 
                </div>
              </v-card-actions>
          </v-card>
            </v-col>
          </v-row>
    </v-flex>
 
   
</v-container>
</template>

<script>

  export default {
    name:'Services',
  
    data(){
      return {
        id: this.$route.params.id
      }
    },
  
    computed:{
       
      categories(){
            return this.$store.state.categories.find(cat => cat.id == this.id)
    },
    services(){
      return this.$store.state.categories.find(cat => cat.id == this.id).services
    }

}
  }
</script>
