<template>
  <div>
    <v-carousel height="200px">
      <v-carousel-item v-for="(routines,index) in routineArray" :key="routines">
        <v-row>
          <v-col v-for="routine in routineArray[index]" :key="routine">
            <RoutineCard style="margin-bottom: 10px"
                         v-bind:routine="routine"/>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>

import RoutineCard from "./RoutineCard";
import RoutineStore from "../store/RoutineStore";

export default {
  name: "RoutineList",
  components: {RoutineCard},
  data: function () {
    return {
      store: RoutineStore,
      routineArray: this.getDisplayRoutine(),
      winWidth: 0
    }
  },
  methods: {
    getDisplayRoutine() {
      let i;
      let routineArray = [];
      let routines = RoutineStore.routines;
      let listSize = this.getListSize();
      for (i = 0; i + listSize < routines.length; i += listSize) {
        routineArray.push(routines.slice(i, i + listSize));
      }
      routineArray.push(routines.slice(i));
      return routineArray;
    },
    getListSize() { //Veo cuantas cartas puedo mostrar el -200 es lo del costado
      return (innerWidth - 400) / 344;
    },


  },
  computed: {

  }

}
</script>

<style scoped>

</style>