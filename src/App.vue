<template>
  <v-app >

    <v-main>
    <v-app-bar  flat>
      <Header/>
    </v-app-bar>
    <!-- Provides the application the proper gutter -->
      
        <router-view></router-view>
      
     
      
    </v-main>

 <v-footer><Footer> </Footer></v-footer>
  
  </v-app>
</template>

<script>

 
import Footer from './components/Footer'
import Header from './components/Header'



export default {
  name: 'App',

  components: {
   
    Footer,
    Header
 
  },

  data: () => ({
    //
  }),
};
</script>
