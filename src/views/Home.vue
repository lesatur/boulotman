<template>
<v-flex >
<Caroussel/>
 <Categories></Categories>
  
 <Book></Book>
</v-flex>
</template>

<script>
// @ is an alias to /src

import Caroussel from '../components/Caroussel'
import Categories from '../components/Categories';
import Book from '../components/Book';
export default {
  name: 'Home',
  components: {
    Book,
    Caroussel,
    Categories
  }
}
</script>

<style lang="scss">

</style>