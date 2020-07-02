<template>
    <v-layout>
      <v-row>
        <v-col cols="12">
          <div class="flex justify-center"
          >
         <h1 class="categories"> Services</h1>
          </div>
        </v-col>
    </v-row>
   
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
       </v-layout>
</template>

<script>
  export default {
  
    name:'Services',
    data: () => ({
      show: false,
    }),
  }
</script>