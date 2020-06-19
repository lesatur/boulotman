<template>
<v-main>
 
  <v-container fluid >
          <v-row no-gutters class="justify-space-between">
        <v-col cols="3" >
          <v-card
            class="pa-0"
            
            tile
            flat
          >
            <v-img
          alt="boulotman Logo"
          class="shrink mr-2"
          contain
          src="../assets/boulotmanlogo.png" 
          transition="scale-transition"
          width="220"
    />
    
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            class="pa-0"
            flat
            tile
           
          >
        <v-card-text class="justify-center"><h2 class="text-decoration-underline"><I>Socials</I></h2></v-card-text>
        <v-list-item-group class="justify-center">
        <p class="v-list-item--link"><v-icon size="24px" left>mdi-facebook</v-icon>Facebook</p>
        <p class="v-list-item--link"><v-icon size="24px" left>mdi-google</v-icon>Google</p>
        <p class="v-list-item--link"><v-icon size="24px" left>mdi-instagram</v-icon>Instagram</p>
        <p class="v-list-item--link"><v-icon size="24px" left>mdi-twitter</v-icon>Twitter</p>
        </v-list-item-group>
       
       
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card
            class="mx-auto"
          flat
            tile
            
          >
              
         <v-card-text class="justify-center"><h2 class="text-decoration-underline"><I>Usefull Links</I></h2></v-card-text>
    <v-list-item-group class="justify-center">
            <p class="v-list-item--link"><v-icon size="24px" left>mdi-book-open-page-variant</v-icon>About Us</p>
          <p class="v-list-item--link"><v-icon size="24px" left>mdi-home-circle</v-icon>Home</p>
          <p class="v-list-item--link"><v-icon size="24px" left>mdi-shield-lock-outline</v-icon>Privacy Policy</p>
           <p class="v-list-item--link"><v-icon size="24px" left>mdi-electron-framework</v-icon>Services</p>
           <p class="v-list-item--link"><v-icon size="24px" left>mdi-book-open</v-icon>Terms & Conditions</p>
    </v-list-item-group>
       
        
          
    
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            class="pa-1"
            flat
            tile
            
           
          >
       <v-card-text class="justify-center"><h2 class="text-decoration-underline"><I> Our Contacts</I></h2></v-card-text>
     <v-list-item-group class="justify-center">
          <p class="v-list-item--link font-smaller"><v-icon size="24px" left>mdi-email</v-icon>boulotman@gmail.com</p>
         <p class="v-list-item--link font-smaller"><v-icon size="24px" left>mdi-phone</v-icon>(+237)000-000-000/(+237) xxx-xxx-xxx</p>
          <p class="v-list-item--link "><v-icon size="24px" left>mdi-phone-classic</v-icon>fix: 222-222-222</p>
     </v-list-item-group>
          </v-card>
         
        </v-col>
    </v-row>

      <v-divider></v-divider>
      <v-row>
          <v-col cols="12">
          <v-card
            class="pa-2"
            flat
            tile
            
           
          >
       <v-card-text class="text-center"><h2 class="text-decoration-underline">{{ new Date().getFullYear() }} — 
         <strong>All Rights Reserved</strong></h2></v-card-text>
         
        
          </v-card>
         
        </v-col>
    </v-row>

 
  </v-container>

  
</v-main>
</template>
