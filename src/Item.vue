<template>
  <li>
    <div @click="onclick" :class="item.children && item.children.length > 0 ? 'click' : ''">
      {{item.name}}
    </div>
    <ul v-show="isOpen">
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
        isOpen: false
      }
    },
    methods: {
      onclick (){
        this.isOpen = !this.isOpen;
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