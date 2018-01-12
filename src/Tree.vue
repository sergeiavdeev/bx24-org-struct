<template>
  <ul>
    <item :item="items"></item>
  </ul>
</template>

<script>

  import Item from './Item';
  import items from './data/tree';

  export default {
    name: "tree",
    data () {
      return {
        items: items
      }
    },
    components: {
      Item
    }
  }
</script>

<style scoped>

</style>