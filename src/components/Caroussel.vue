<template>

<v-flex fill-height="true"  >
 

            <v-carousel hide-delimiters cycle   dark
     height="600"
     interval="3000"
   class="mt-n16"
     >

    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :title="item.title"
      reverse-transition="fade-transition"
      transition="fap-transition"
      class="flex fill-height"
      
      
      
    >

<v-row class="justify-center">
  
         <v-col 
          class="fill-height ligne"
          align="center"
          justify="center"
          
        >
    
                     <div class="text-center justify-center">
                      
   <h1 class="ligne "> {{ item.title }}</h1>
        </div>
        
               <div class="text-center justify-center">
 <h1 class="ligne2"> <div><v-btn  class="red" rounded to="/contact">Contact  US</v-btn></div></h1>
        </div> 
      
        </v-col>
</v-row>

   

    
         
    </v-carousel-item>

      </v-carousel>

</v-flex>

 

</template>

<script>

  export default {
      name:'Caroussel',
      components:{
       
      },
    
    data () {
      return {
        items: [

          {
            src: require('../assets/construction 3.jpg'),
            title: "Use the link bellow to Contact us"
          },
      
          {
            src: require('../assets/construction 4.jpg'),
            title: "Use the link bellow to Contact us"
          },
           {
            src: require('../assets/construction 5.jpg'),
            title: "Use the link bellow to Contact us"
          },
           {
            src: require('../assets/construction2computer.jpg'),
            title: "Contact us here"
          },
        
        ],
      }
    },
  }
</script>
<style >
.ligne{
        background-size: cover;
       font-family: cursive;
    float: left;
   padding-top: 160px;
    position: relative;
    width: 100%;
}
.ligne2{
      background-size: cover;
    float: left;
    padding-top: 10px;
    
    position: relative;
    width: 100%;
}
</style>
