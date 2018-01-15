<template>
  <h1>{{text}}</h1>
</template>

<script>
  export default {
    name: "install",
    data () {
      return {
        text: "Установка...",
        installing: true
      }
    },
    mounted () {
      if (window.BX24) {
        BX24.installFinish();
      }
      this.text = "Установка завершена";
      this.installing = false;
    }
  }
</script>

<style scoped>

</style>