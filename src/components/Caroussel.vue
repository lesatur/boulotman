<template>
<v-layout fill-height="true">

            <v-carousel hide-delimiters cycle   dark="true"
     height="500"
     interval="4000"
    
     >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :title="item.title"
      reverse-transition="fade-transition"
      transition="fade-transition"
      class="flex fill-height"
    >
     <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-1 text-uppercase justify-center align-center">{{ item.title }}
            <div class=" justify-center align-center"><router-link to="/contact">Contact US</router-link></div>
          </div>
         
        </v-row>
    
         
    </v-carousel-item>

      </v-carousel>

</v-layout>

 

</template>

<script>

  export default {
      name:'Caroussel',
      components:{
       
      },
    
    data () {
      return {
        items: [

          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            title: "Contact us here"
          },
      
          {
            src: require('../assets/banniere.png'),
            title: "Contact us here"
          },
        
        ],
      }
    },
  }
</script>