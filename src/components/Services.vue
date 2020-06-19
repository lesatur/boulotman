<template>
<v-container class="max-content" >
  <div class="block">
    <h1 class="text-center">SERVICES</h1>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
          <v-row>
            <v-col
              v-for="n in 9"
              :key="n"
              class="d-flex child-flex"
              cols="4"
            >
        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      THE TITLLE
    </v-card-title>

    <v-card-actions>
  <div class="text-center">
    <v-btn rounded color="primary" dark>Get Service</v-btn>
  </div>
    </v-card-actions>
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
          </v-card>
            </v-col>
          </v-row>
      </v-card>
    </v-col>
  </v-row>
          
      </div>

     
</v-container>
  
  

</template>

<script>
  export default {
    name:'Services',
    data: () => ({
      show: false,
    }),
  }
</script>