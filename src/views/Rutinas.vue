<template>
  <div class ="menu" style="margin-left: 2%">
    <h2 style="display: inline-block; margin-top: 10px">MIS RUTINAS</h2>
    <v-btn
        fab
        x-small
        style="margin-left: 10px; margin-top: -10px"
        color="#EBEBEB"
    ><v-icon
        color="#E46271"
    >mdi-plus</v-icon>
    </v-btn>
    <RoutineList></RoutineList>

<!--    <v-carousel hide-delimiters height="200px" v-for="routine in routines" :key="routine">-->
<!--      <v-carousel-item>-->
<!--        <RutinCard style="margin-bottom: 10px"></RutinCard>-->
<!--      </v-carousel-item>-->
<!--    </v-carousel>-->
    <h2 style="margin-bottom: 10px; margin-top: 10px; display: inline-block;">MIS EJERCICIOS</h2>
    <v-btn
        fab
        x-small
        style="margin-left: 10px; margin-top: -10px"
        color="#EBEBEB"
    ><v-icon
        color="#E46271"
    >mdi-plus</v-icon>
    </v-btn>

    <v-carousel hide-delimiters height="200px">
      <v-carousel-item>
        <ExCard style="margin-bottom: 10px"></ExCard>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import ExCard from "../components/ExCard";
import RoutineList from "../components/RoutineList";

export default {
  name: "Rutinas.vue",
  components: {RoutineList, ExCard},
  data() {
    return {
      routines: []
    }
  },
  methods: {

  },
  computed: {
    isValidDescriptionName() {
      return (this.description.length)
    }
  }
}
</script>
  export default {}
<style scoped>

</style>