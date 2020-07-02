<template>
    <container fluid class="flex fill-height">

    </container>
</template>
<script>
export default {

      computed:{
      questions(){
      return this.$store.state.categories
    },
    name: 'HelperQuestion',
      }
}
</script>