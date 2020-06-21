<template>

  <v-container   class="brown" >
          <v-row no-gutters 
              
              class="flex  justify-space-between " 
              
           >
        <v-col cols="3" >
          <v-card
            class="pa-0 ma-0"
          
            tile
            flat
           height="300"
           
          >
            <v-img
          alt="boulotman Logo"
          
          contain
          src="../assets/anytime-header.jpg" 
          transition="scale-transition"
          height="300"
         
    />
          </v-card>
        </v-col>
        
      <v-col cols="8" >
          <v-card
            class="pa-0 "
            height="300"
            tile
            flat
           
          >
    <div class="row " >
         <v-card-text class="display-1  text-center ">
        <p>Experience our home services and we bet you that you will experience your dream home.</p>
    </v-card-text>

          <v-row >
            <v-col >
               
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
export default {
    name:'Book',
}

</script>