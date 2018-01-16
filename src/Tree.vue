<template>
  <ul>
    <item :item="items" v-on:add="onAdd"></item>
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
      },
      addDepartament (parent, name) {

        return new Promise( (resolve, reject) => {

          var item = this.findDepartament(this.items, parent);

          if (item) {
            if (!item.children) {
              item.children = [];
            }
            item.children.push({ID: -1, NAME: name});
            resolve(item);
          }

          reject();
        });
      },
      findDepartament (item, id) {

        var result = null;

        if( Array.isArray(item)) {
          for (var i = 0; i < item.length; i ++) {

            if (item[i].ID == id) {
              result = item[i];
              break;
            }

            if (item[i].children) {
                var result = this.findDepartament(item[i].children, id);
                if (result != null) {
                  break;
                }
            }
          }
        } else {
          if (item.ID == id) {
            result =  item;
          }else if (item.children) {
            result = this.findDepartament(item.children, id);
          }
        }

        return result;
      },
      onAdd(id) {
        console.log("Tree add, parent" + id);
        this.addDepartament(id, "Новый элемент")
          .then( (item) => {
            console.log("Успешно: " + item);
          })
          .catch( (err) => {
            console.log("Неудача: " + err);
          })
      }
    }
  }
</script>

<style scoped>

</style>