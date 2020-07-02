<template>
  <v-app >
  
    <NavBar/>
 
  <v-main >

       <v-slide-y-transition mode="out-in">
          <router-view></router-view>
       </v-slide-y-transition>

  </v-main>
  <v-footer >
    <Footer> </Footer>
  </v-footer>
  </v-app>
</template>

<script>

 
import Footer from './components/Footer'
import NavBar from './components/NavBar'



export default {
  name: 'App',

  
mounted(){
 this.$store.dispatch('loadCategories')
        },


  components: {
   
    Footer,
    NavBar
 
  },

  data: () => ({
    //
  }),
};
</script>
<style>

</style>
