<template>

  <v-container fluid>
          <v-row 
              
              class="flex  justify-space-between green "
              
           >
        <v-col cols="3" >
          <v-card
            class="pa-0 ma-0"
            color="red"
            tile
            flat
           height="300"
           
          >
            <v-img
          alt="boulotman Logo"
          
          contain
          src="../assets/anytime-header.jpg" 
          transition="scale-transition"
           width="500"
            height="300"
    />
          </v-card>
        </v-col>
        
      <v-col cols="8" >
          <v-card
            class="pa-0 blue"
            height="300"
            tile
            flat
           
          >
    <div class="row">
         <v-card-text class="display-1  text-center ">
        <p>Experience our home services and we bet you that you will experience your dream home.</p>
    </v-card-text>
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
                
                <div class="text-center white--text">
                   <v-btn rounded class="blue lighten-2"><router-link to="/contact" >Contact US</router-link></v-btn>
                </div>       
            </v-col>
          </v-row>
   
  </div>
          </v-card>
        </v-col>
          </v-row>
  </v-container>
  

</template>

<script>
 
</script>
