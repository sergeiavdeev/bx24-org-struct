<template>
  <li>
    <div @click="onclick" :class="item.children && item.children.length > 0 ? 'click' : ''">
      {{item.NAME}}
    </div>
    <ul v-show="open">
      <item v-for="item in item.children" :item="item" :key="item.key" v-on:add="onAdd"></item>
      <li @click="add" :class="'click'">+</li>
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
      },
      add () {
        this.$emit("add", this.item.ID);
      },
      onAdd (id) {
        this.$emit("add", id);
      }
    }
  }
</script>

<style scoped>

  .click{
    cursor: pointer;
    text-decoration: underline;
    user-select: none;
  }

</style>