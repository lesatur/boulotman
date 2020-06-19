<template>
    <v-toolbar  dark >  
   <v-img
          alt="boulotman Logo"
          class="shrink mr-2"
          contain
          src="../assets/boulotmanlogo.png" 
          transition="scale-transition"
          width="40"
    />
     <v-toolbar-title>BOULOTMAN</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text> <router-link to="/">Home</router-link></v-btn>
      <v-btn text><router-link to="/around" >autour de moi</router-link></v-btn>
      <v-btn text> <router-link to="/about">ABOUT US</router-link></v-btn>
      <v-btn text> <router-link to="/categories">CATEGORIES</router-link></v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
    name:'Header'
}
</script>
    