<template>
<v-container fluid>
 
   
        <v-flex>
  
    <h1>ALL THE AVAILLABLE SERVICES</h1>
         <v-row dense >
    <v-col cols="3" 
    v-for="allservice in allservices"
    :key="allservice.id"
    >
      <v-card outlined shaped class="mx-auto">
  
  
    <v-img
      class="align-center"
      :src="allservice.image"
      height="190px"
    ></v-img>

              <v-card-text class="text-center">
                <p><strong>{{allservice.name}}</strong></p>
                  {{allservice.description}}
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto">
                  
             <router-link :to="{name: 'service', params:{id:allservice.name}}">
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
 this.$store.dispatch('loadAllServices')
        },
computed:{
        allservices(){
            return this.$store.state.allservices  
        },

     
}
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