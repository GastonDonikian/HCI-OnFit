<template>
  <div class="menu" style="margin-left: 2%">
    <h2 style="display: inline-block; margin-top: 10px">MIS RUTINAS</h2>
    <v-btn
        fab
        x-small
        style="margin-left: 10px; margin-top: -10px"
        color="#EBEBEB"
        :to="'../RoutineCreator'"
    >
      <v-icon
          color="#E46271"
      >mdi-plus
      </v-icon>
    </v-btn>
    <RoutineList style="margin-top: 30px"></RoutineList>
    <h2 style="margin-bottom: 10px; margin-top: 10px; display: inline-block;">MIS EJERCICIOS</h2>
    <v-btn
        fab
        x-small
        style="margin-left: 10px; margin-top: -10px"
        color="#EBEBEB"
        @click="overlayExercise = !overlayExercise"
    >
      <v-icon color="#E46271" >mdi-plus </v-icon>
    </v-btn>
    <v-overlay
        :z-index="zIndexExercise" :value="overlayExercise">

      <v-btn
          class="white--text"
          color="#E46271"
          style="margin-bottom:10px"
          @click="overlayExercise = false"
      >
        Salir
      </v-btn>
      <CreateExerciseOverlay></CreateExerciseOverlay>
    </v-overlay>
    <ExerciseList style="margin-top: 30px"></ExerciseList>
  </div>
</template>

<script>

import RoutineList from "../components/RoutineList";
import ExerciseList from "../components/ExerciseList";
import CreateExerciseOverlay from "../components/CreateExerciseOverlay";

export default {
  name: "Rutinas.vue",
  components: {CreateExerciseOverlay, ExerciseList, RoutineList},
  data() {
    return {
      routines: [],
      overlayExercise: false,
      zIndexExercise: 1,
      exercise: {titulo: "Titulo", description: "Description", repetitions: 10, duration: null}
    }
  },
  methods: {},
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