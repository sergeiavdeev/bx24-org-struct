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
    },
    mounted () {
      if (!window.BX24) {
        return;
      }
      this.getDepartaments("")
        .then( (res) => {
          console.log("Успешно!");
          console.log(res);
          this.items = {
            NAME: res[0].NAME
          };
          this.getDepartaments(res[0].ID)
            .then( (res) => {
              console.log(res);
              this.items.children = res;

            })
        })
        .catch( (err) => {
          console.log("Ошибка!");
          console.log(err);
        });
    },
    methods: {
      getDepartaments: function (parentDep) {

        return new Promise((resolve, reject) => {

          BX24.callMethod('department.get',
            {"PARENT": parentDep},
            function (result) {
              if (result.data()) {
                resolve (result.data());
              }
              reject (result.error());
            }
          )
        })
      }
    }
  }
</script>

<style scoped>

</style>