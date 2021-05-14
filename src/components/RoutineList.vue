<template>
  <div>
    <v-carousel hide-delimiters height="200px">
      <v-carousel-item v-for="routines in this.routineArray" :key="routines.id">
        <v-row>
          <v-col v-for="routine in routines" :key="routine.id">
            <RoutineCard style="margin-bottom: 10px"
                         v-bind:routine="routine"
                          :can-edit="canEdit.valueOf()"/>
          </v-col>
          <v-col>
            <PlusCard style="margin-bottom: 10px"></PlusCard>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>

import RoutineCard from "./RoutineCard";
import RoutineStore from "../store/RoutineStore";
import {bus} from "../main";
import PlusCard from "./PlusCard";


export default {
  name: "RoutineList",
  components: {PlusCard, RoutineCard},
  props: {
    category: null,
    canEdit: null,
  },
  data: function () {
    return {
      store: RoutineStore,
      routineArray: [],
    }
  },
  async created() {
    this.routineArray = await this.getDisplayRoutine();
  },
  methods: {
    async getDisplayRoutine() {
      let i;
      let routineArray = [];
      let routines = {type: Object};
      if(this.canEdit){
        routines = (await RoutineStore.getAllRoutines());
      } else
      //TODO: averiguar como acceder a las routinas privadas del current user
        routines = (await RoutineStore.getAllByCategory());
      let listSize = this.getListSize();
      for (i = 0; i + listSize < routines.length; i += listSize) {
        routineArray.push(routines.slice(i, i + listSize));
      }
      routineArray.push(routines.slice(i));
      return routineArray;
    },
    getListSize() {
      if (innerWidth <= 750)
        return 1;
      if (innerWidth <= 1050)
        return 2;
      if (innerWidth <= 1400)
        return 3;
      return 4;
    },
    async onResize() {
      this.routineArray = await this.getDisplayRoutine();
    },
    async onChange() {
      this.routineArray = await this.getDisplayRoutine();
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    bus.$on('routinechange', this.onChange);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  }
}
</script>

<style scoped>

</style>