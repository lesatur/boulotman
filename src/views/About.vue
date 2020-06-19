<template>
<v-content>
  <div class="row" >
<v-img  src="../assets/Perm2_ContactUs-1024x376.png" max-height="400px">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
                
                <div class="text-center white--text">
                   <v-btn rounded ><router-link to="/contact" >Contact US</router-link></v-btn>
                </div>       
            </v-col>
          </v-row>
    </v-img>
  </div>

    
<div class="block">

              <v-container>
            <p>  Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus
            commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. 
            Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit 
            et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
              cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </v-container>
  
</div>

<div class="block">
    <v-container>
      
    <h1 class="text-center">OUR TEAM</h1>
    
  <v-row  >
    <v-col cols="4" 
    v-for="category in categories"
    :key="category.id">
      <v-card flat class="mx-auto" >
  
    <v-img
      class="white--text align-end"
      :src="category.src"
     
    ></v-img>
              <v-card-text class="text--primary">
                <p class="text-center bold text-uppercase">{{category.title}}</p>
                  <p class="text-center bold">{{category.description}}</p>
              </v-card-text>
          
          </v-card>
            </v-col>
          </v-row>
    </v-container>
</div>
     


</v-content>

</template>

<script>
  export default {
    name:'about',
    data(){
      return {
        categories:[
          {
            id:1,
            title: "Marius Manela",
            description: "Director",
            src:require("../assets/icone team.png")
          },
          {
               id:2,
            title: "Boboy Armand",
            description: "Vice Director",
            src:require("../assets/icone team.png")
          },
          {
               id:3,
            title: "Mark Andre",
            description: "Project Manager",
            src:require("../assets/icone team.png")
          },
          
        ]
      };
    }
    
  };
</script>