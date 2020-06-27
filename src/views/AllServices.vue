<template>
<v-container fluid>
 
   
        <v-flex>
          
    
         <v-row dense >
    <v-col cols="3" 
    v-for="service in services"
    :key="service.id">
      <v-card outlined shaped class="mx-auto">
  
  {{service.name}}
    <v-img
      class="align-center"
      :src="service.image"
      height="190px"
    ></v-img>

              <v-card-text class="text-center">
                
                  {{service.description}}
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto">
                  
                  <router-link :to="{name: '/services', params:{id:service.id}}">
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
    name:'AllServices',
mounted(){
 this.$store.dispatch('loadServices')
        },
computed:{
        services(){
            return this.$store.state.services  
        }
    },

}

  
</script>
<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#DF5C2E,)
}

.article{
  display: flex;
  margin: 10px;
  width: calc(100%-20px);
  max-width: 720px;
  min-width: 480px;
}


</style>