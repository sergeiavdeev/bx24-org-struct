<template>
  <li>
    <div @click="onclick" :class="item.children && item.children.length > 0 ? 'click' : ''">
      {{item.name}}
    </div>
    <ul v-show="open">
      <item v-for="item in item.children" :item="item" :key="item.key"></item>
    </ul>
  </li>
</template>

<script>
  export default {
    name: "item",
    props: [
      "item"
    ],
    data(){
      return {
        open: false
      }
    },
    methods: {
      onclick (){
        this.open = !this.open;
      }
    }
  }
</script>

<style scoped>

  .click{
    cursor: pointer;
    text-decoration: underline;
  }

</style>