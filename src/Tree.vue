<template>
  <ul>
    <item v-if="root.ID != ''" :item="root"></item>
  </ul>
</template>

<script>

  import Item from './Item';
  import items from './data/tree';

  export default {
    name: "tree",
    data () {
      return {
        root: {
          ID: '',
          NAME: ""
        },
        id: 15
      }
    },
    components: {
      Item
    },
    mounted () {
      if (!window.BX24) {
        //this.root = items;
        this.root = {
          ID: "1",
          NAME: "Моя компания"
        }
        return;
      }
      this.getDepartaments("")
        .then( (res) => {
          console.log("Успешно!");
          console.log(res);
          this.root = {
            ID: res[0].ID,
            NAME: res[0].NAME
          };
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
              this.$set(item, "children", []);
            }
            item.children.push({ID: this.id, NAME: name});
            this.id ++;
            resolve(item);
          }

          reject("Елемент родитель не найден!");
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
      }
    }
  }
</script>

<style scoped>

</style>