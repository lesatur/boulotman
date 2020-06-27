<template>
  <v-container>
 
 

  </v-container>
</template>
<script>
export default {
  name:'Yo',
  filters: {
  currencydecimal (value) {
    return value.toFixed(2)
  }
},
}
</script>c