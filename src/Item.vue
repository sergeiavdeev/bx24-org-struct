<template>
  <li>
    <div :class="item.children && item.children.length > 0 ? 'click' : ''">
      {{item.NAME}}
    </div>
    <!--<transition-group name="fade"> -->
    <ul v-show="open && children.length > 0" key="item.ID">
      <item v-for="item in children" :item="item" :key="item.ID"></item>
      <li :class="'click'" :key="-1">+</li>
    </ul>
    <!--</transition-group>-->
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
        open: true,
        children: []
      }
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
    },
    mounted () {
      if (!window.BX24) {
        return;
      }

      this.getDepartaments(this.item.ID)
        .then( (res) => {
          console.log(res);
          this.children = res;
        });
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