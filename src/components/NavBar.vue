<template>

       <v-container fluid>
                <v-app-bar app  dark fade-img-on-scroll
                
               
               prominent
               src="../assets/banniere.png"
               hide-on-scroll
               height="180"
              
             
                >
        <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon>

   <v-img
          alt="boulotman Logo"
          class="shrink mr-2"
          contain
          src="../assets/boulotmanlogo.png" 
          transition="scale-transition"
          width="160"
    />
    
    <v-spacer></v-spacer>
    

          <v-toolbar-title class="hidden-sm-and-down justify-space-between ">
        
      <v-btn to="/">Home</v-btn>
      <v-btn to="/around" >autour de moi</v-btn>
      <v-btn  to="/about">ABOUT US</v-btn>
      <v-btn  to="/categories">CATEGORIES</v-btn>
      <v-btn to="/about">Blog</v-btn>
      <v-btn to="/categories">FAQ</v-btn>
    </v-toolbar-title>

  <v-spacer></v-spacer>

         
         <v-btn rounded="true" @click="toggleTheme" color="primary" class="mr-2">{{buttonText}}</v-btn>

     </v-app-bar>
<v-card>
  <v-navigation-drawer 
          v-model="sidebarMenu" 
          app
          floating
          :permanent="sidebarMenu"
          :mini-variant.sync="mini"
          disable-resize-watcher="true"
          disable-route-watcher="true"
          expand-on-hover="true"
          overlay-opacity="1.7"
          color="cyan lighten-4 "
          class=" flex fill-height"
          
          
         
          
          
          >
            <v-list>

               
                <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
                    <v-list-item-icon>
                        <v-icon color="primary">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                
                    <v-list-item-content>
                        <v-list-item-title class="primary--text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                    
                </v-list-item>
                  
          </v-list>
         <v-card
    class="mx-auto flex "
    
  >
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group
   
      >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(admin, i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="admin[0]"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(crud, i) in cruds"
            :key="i"
            
          >
            <v-list-item-title v-text="crud[0]"></v-list-item-title>
            <v-list-item-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
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
          admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings'],
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
      ],
  })

}
</script>
<style scoped>


</style>
    