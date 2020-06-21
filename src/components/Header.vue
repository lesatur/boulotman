<template>
    <v-toolbar flat dark >  
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
    <v-toolbar-items class="hidden-sm-and-down   ">
       <router-link to="/">Home</router-link>
      <router-link to="/around" >autour de moi</router-link>
       <router-link to="/about">ABOUT US</router-link>
       <router-link to="/categories">CATEGORIES</router-link>
       <router-link to="/about">Blog</router-link>
       <router-link to="/categories">FAQ</router-link>
    </v-toolbar-items>
    
  </v-toolbar>
</template>

<script>

export default {
    name:'Header'
}
</script>
<style scoped>
.toolxbar {
    height: 56px;
    margin-top: 0px;
    transform: translateY(0px);
    left: 0px;
    right: 0px;
    background-color: aquamarine
}
</style>
    