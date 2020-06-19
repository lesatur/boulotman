<template>
 <div class="caroussel">
    <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :title="item.title"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
     <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2">{{ item.title }}</div>
        </v-row>
    </v-carousel-item>
    
  </v-carousel>
 </div>

</template>

<script>
  export default {
      name:'Caroussel',
    
    data () {
      return {
        items: [
          {
            src: require('../assets/boulotmanlogo.png'),
            title: "BIENVENU CHEZ BOULOTMAN"
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            title: "LA NATURE DU TRAVAIL"
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            title: "DES TRAVAILLEURS QUALIFIES"
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            title: "PRENONS TOUT EN MAIN"
            
    
          },
        ],
      }
    },
  }
</script>