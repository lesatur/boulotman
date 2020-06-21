<template>
 <v-container>
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
  <v-navigation-drawer
    stateless
    value="true"
  >
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
            
          >
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="(crud, i) in cruds"
            :key="i"
           
          >
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
 </v-container>
</template>