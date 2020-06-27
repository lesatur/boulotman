<template>

<v-container  fill-height="true"  >

      <v-row>
        <v-col cols="12">
          <div class="flex justify-center"
          >
    <h1 class="people "> WHAT PEOPLE SAYS</h1>
          </div>
        </v-col>
      </v-row>


<v-flex>
    <v-carousel hide-delimiters cycle   dark
     height="200"
     interval="3000"
     translate
   
     >

    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :title="item.title"
      reverse-transition="fade-transition"
      transition="fap-transition"
     
      
    >
     <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
<v-col >
             <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
               <h1 class="justify-center"> {{ item.message }}</h1>
                
</v-col>

 
        </v-row>
   
    
         
    </v-carousel-item>

      </v-carousel>

</v-flex>
   
  


</v-container>

 

</template>

<script>

  export default {
      name:'OurClient',
      components:{
       
      },
    
    data () {
      return {
        items: [

          {
            src: "https://cdn.vuetifyjs.com/images/john.jpg",
            title: "Arnaud",
            message: "Experience our home services and we bet you that you will experience your dream home"
          },
      
          {
            src: "https://cdn.vuetifyjs.com/images/john.jpg",
            title: "bobo",
            message: "Experience our home services and we bet you that you will experience your dream home"
          },
           {
            src:"https://cdn.vuetifyjs.com/images/john.jpg",
            title: "Gerrad",
            message: "Experience our home services and we bet you that you will experience your dream home"
          },
         
        
        ],
      }
    },
  }
</script>
<style >
.people{
    font-weight: 600;
    font-size: 35px;
    color: #393e3c;
    margin: 0 0 15px;
    font-family: Lobster Two,cursive;
    text-transform: capitalize;
    
    
}
</style>
