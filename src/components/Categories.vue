<template>
<v-layout>
  <v-container>
  
      <v-row>
        <v-col cols="12">
          <div class="flex justify-center"
          >
         <h1 class="categories"> CATEGORIES</h1>
          </div>
        </v-col>
    </v-row>
  <v-spacer></v-spacer>
  
    <v-layout class="justify-space-between flex">
      <v-flex >
        <v-row dense>
            
    <v-col  cols="4"
    v-for="categorie in categories"
    :key="categorie.id">
      <v-card outlined shaped class="mx-auto">
  
    <v-img
      class="align-center"
      :src="categorie.image"
      height="190px"
    ></v-img>
              <v-card-text class="text-center">
                <p><strong>{{categorie.name}}</strong></p>
                  <p>{{categorie.description}}</p>
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto">
                  
                  <router-link :to="{name: 'categories', params:{id:categorie.id}}">
                    <v-btn rounded color="teal accent-3" >EXPLORE</v-btn>
                    </router-link>
                </div>
              </v-card-actions>
          </v-card>
            </v-col>
          
          </v-row>
      </v-flex>

    </v-layout>
 
  
 
</v-container>
</v-layout>

</template>

<script>


  export default {
    name:'Categories',
mounted(){
 this.$store.dispatch('loadCategories')
        },
computed: {
  categories(){
    return this.$store.state.categories
  }
},

methods:{


  },


    
  };
</script>
<style >
.categories{
  text-align: center;
  text-justify: auto;
  font-family: Lobster Two,cursive;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 40px
}
</style>
