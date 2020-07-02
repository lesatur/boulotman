<template>
<v-container fluid>
   
                <v-app-bar app  dark fade-img-on-scroll
               prominent
              clipped-left
               src="../assets/tree-nature-isolated-lone-free-photo-on-pixabay-png-nature-960_650.png"
               hide-on-scroll
               height="100"
               
              
             
                >
        <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon>

   <v-img
          alt="boulotman Logo"
          class="shrink mr-2"
          contain
          src="../assets/boulotmanlogo.png" 
          transition="scale-transition"
          width="100"
    />
    
    <v-spacer></v-spacer>
    

          <v-toolbar-title class="hidden-sm-and-down justify-space-between ">
        
      <v-btn to="/">Home</v-btn>
      <v-btn to="/services" >SERVICES</v-btn>
      <v-btn  to="/about">ABOUT US</v-btn>
      <v-btn  to="/categories">CATEGORIES</v-btn>
      <v-btn to="/rrr">Blog</v-btn>
      <v-btn to="/step">FAQ</v-btn>
    </v-toolbar-title>

  <v-spacer></v-spacer>

         
         <v-btn rounded @click="toggleTheme" color="primary" class="mr-2">{{buttonText}}</v-btn>

     </v-app-bar>
<v-card>
  <v-navigation-drawer 
          v-model="sidebarMenu" 
          app
         fixed
         clipped
          :permanent="sidebarMenu"
         
          disable-resize-watcher
          disable-route-watcher
          expand-on-hover
         
          class=" flex fill-height brown"
          
          
         
          
          
          >
            <v-list dense class="pt-3">

               
                <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
                    <v-list-item-icon>
                        <v-icon >{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                
                    <v-list-item-content>
                        <v-list-item-title >{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                    
                </v-list-item>
                  
          </v-list>
         
    </v-navigation-drawer>
</v-card>
    
</v-container>
  

</template>

<script>

export default {
    name: 'Navbar',

      computed: {
  
    buttonText() {
        return !this.$vuetify.theme.dark ? 'Dark Mode' : ' Light Mode'
    }
  },
  methods: {
    toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;      
    },
  },
data: () => ({
      sidebarMenu: false,
      toggleMini: false,
      
      items: [
        { title:"Home", href:"/", icon:"mdi-home-outline" },
        { title:"About us", href:"/detections", icon:"mdi-shield-account" },
        { title:"Categories", href:"/Categories", icon:"mdi-palette-swatch" },
        { title:"Blog", href:"/customers", icon:"mdi-account" },
        { title:"Orders", href:"/orders", icon:"mdi-bus-clock" },
        { title:"Settings", href:"/settings", icon:"mdi-settings-outline" },
      ],
      
  })

}
</script>
<style scoped>


</style>
    