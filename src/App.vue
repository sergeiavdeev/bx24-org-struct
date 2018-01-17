<template>
  <div>
    <Tree></Tree>
  </div>
</template>

<script>

  import Tree from './Tree';

  export default {
    name: "app",
    data(){
      return {
        text: "Структура предприятия"
      }
    },
    components: {
      Tree
    }
  }
</script>
