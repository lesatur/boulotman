<template>
<v-content>
  <v-container fluid>
        <v-row>
        <v-col>
          <v-card
            class="pa-2"
            outlined
            tile
            color="blue lighten-2"
          >
         <h1 class="text-center">DIFFERENTS CATEGORIES</h1>
          </v-card>
        </v-col>
    </v-row>
  </v-container>

  <v-spacer></v-spacer>
  <v-container fluid>
    <v-row dense >
    <v-col cols="3" 
    v-for="category in categories"
    :key="category.id">
      <v-card outlined shaped class="mx-auto">
  
    <v-img
      class="align-center"
      :src="category.src"
      height="190px"
    ></v-img>
              <v-card-text class="text-center">
                <p>{{category.title}}</p>
                  <p>{{category.description}}</p>
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto">
                  <v-btn rounded color="teal accent-3" >EXPLORE</v-btn>
                </div>
              </v-card-actions>
          </v-card>
            </v-col>
          </v-row>
  </v-container>

  <v-spacer></v-spacer>
  <v-container fluid>
        <v-row>
        <v-col>
          <v-card
            class="pa-2"
            outlined
            tile
            color="blue lighten-2"
          >
         <h1 class="text-center">SERVICES</h1>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
       <v-container fluid>
    <v-row dense >
    <v-col cols="2" 
    v-for="category in categories"
    :key="category.id">
      <v-card outlined shaped class="mx-auto">
  
    <v-img
      class="align-center"
      :src="category.src"
      height="190px"
    ></v-img>

              <v-card-text class="text-center">
                  {{category.description}}
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto">
                  <v-btn rounded color="teal accent-3"  >Get Service</v-btn>
                </div>
              </v-card-actions>
          </v-card>
            </v-col>
          </v-row>
  </v-container>
</v-content>
</template>

<script>
  export default {
    name:'Categories',
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