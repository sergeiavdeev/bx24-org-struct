<template>
  <li>
    <div @click="onclick" :class="item.children && item.children.length > 0 ? 'click' : ''">
      {{item.NAME}}
    </div>
    <transition-group name="fade">
    <ul v-show="open" key="item.ID">
      <item v-for="item in item.children" :item="item" :key="item.ID" v-on:add="onAdd"></item>
      <li @click="add" :class="'click'" :key="-1">+</li>
    </ul>
    </transition-group>
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

  .fade-enter-active, .fade-leave-active {
    transition: opacity .7s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }

</style>