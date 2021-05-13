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
    <RoutineList :can-edit="true" style="margin-top: 30px"></RoutineList>
    <h2 style="margin-bottom: 10px; margin-top: 10px; display: inline-block;">MIS EJERCICIOS</h2>
    <v-btn
        fab
        x-small
        style="margin-left: 10px; margin-top: -10px"
        color="#EBEBEB"
        @click="store.overlayCreator = !store.overlayCreator"
    >
      <v-icon color="#E46271" >mdi-plus </v-icon>
    </v-btn>
    <v-overlay
        :z-index="zIndexExercise" :value="store.overlayCreator">

      <v-btn
          class="white--text"
          color="#E46271"
          style="margin-bottom:10px"
          @click="store.overlayCreator = false"
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
import ExerciseStore from "../store/ExerciseStore";

export default {
  name: "Rutinas.vue",
  components: {CreateExerciseOverlay, ExerciseList, RoutineList},
  data() {
    return {
      routines: [],
      overlayExercise: false,
      zIndexExercise: 1,
      store: ExerciseStore,
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
.imgBack {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  margin: 0 0 0 0;
  left: 0;
  z-index: 0;
  background: url('../assets/backgroundImage2.png') no-repeat center center fixed;
  background-size: cover;
}
</style>