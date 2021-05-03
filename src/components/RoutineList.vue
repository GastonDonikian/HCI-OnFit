<template>
  <div>
    <v-carousel hide-delimiters height="200px">
      <v-carousel-item v-for="routines in routineArray" :key="routines.id">
        <v-row>
          <v-col v-for="(routine) in routines" :key="routine.id">
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
    }
  },
  methods: {
    getDisplayRoutine() {
      console.log('entrey');
      let i;
      let routineArray = [];
      let routines = RoutineStore.getAll();
      let listSize = this.getListSize();
      for (i = 0; i + listSize < routines.length; i += listSize) {
        routineArray.push(routines.slice(i, i + listSize));
      }
      routineArray.push(routines.slice(i));
      return routineArray;
    },
    getListSize() { //Veo cuantas cartas puedo mostrar el -200 es lo del costado
      if (innerWidth <= 750)
        return 1;
      if (innerWidth <= 1050)
        return 2;
      if (innerWidth <= 1400)
        return 3;
      return 4;
    },
    onResize() {
      this.routineArray = this.getDisplayRoutine();
    },

  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  }
}
</script>

<style scoped>

</style>