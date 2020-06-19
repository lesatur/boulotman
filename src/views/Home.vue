<template>
<v-content>
 <Caroussel></Caroussel>
 <Categories></Categories>
</v-content>
</template>

<script>
// @ is an alias to /src

import Caroussel from '../components/Caroussel';
import Categories from '../components/Categories';
export default {
  name: 'Home',
  components: {
  
    Caroussel,
    Categories
  }
}
</script>

<style lang="scss">

</style>