<template>
<v-content>
    <div class="block">
    <v-container>
      
    <h1 class="text-center">SERVICES CATEGORIES</h1>
    </v-container>
    </div>
    
  <v-row dense >
    <v-col cols="2" 
    v-for="category in categories"
    :key="category.id">
      <v-card outlined class="mx-auto">
  
    <v-img
      class="align-center"
      :src="category.src"
      height="190px"
    ></v-img>

              <v-card-title>
                  {{category.title}}
              </v-card-title>
              <v-card-text class="text-center">
                  {{category.description}}
              </v-card-text>
          
          </v-card>
            </v-col>
          </v-row>
     
</v-content>
</template>

<script>
  export default {
    name:'About',
    data(){
      return {
        categories:[
          {
            id:1,
            title: "title 1",
            description: "description 1",
            src:require("../assets/boulotmanlogo.png")
          },
          {
               id:2,
            title: "title 2",
            description: "description 2",
            src:require("../assets/boulotmanlogo.png")
          },
          {
               id:3,
            title: "title 3",
            description: "description 3",
            src:require("../assets/boulotmanlogo.png")
          },
          {
               id:4,
            title: "title 4",
            description: "description 4",
            src:require("../assets/boulotmanlogo.png")
          }
        ]
      };
    }
    
  };
</script>