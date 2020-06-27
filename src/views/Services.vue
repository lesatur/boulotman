<template>
<v-container fluid>
 
        <v-flex>
<v-row dense >
    <v-col cols="12" 
    v-for="categorie in categories"
    :key="categorie.id">
<v-flex> 
  <v-flex cols="12" class="align-center justify-center">
    the list of services for the category <h3>{{categorie.name}}</h3>
  </v-flex>
</v-flex>
    </v-col>
</v-row>

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
                  
                  <router-link to="/services">
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
    mounted(){
          this.$store.dispatch('loadServices')
            },
    computed:{
        services(){
            return this.$store.state.services[0]
    },
      categories(){
            return this.$store.state.categories
    },

}
  }
</script>
