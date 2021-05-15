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
    <RoutineList :can-edit="true" style="margin-top: 30px" v-if="!this.boolHasRutines"></RoutineList>
    <PlusCard v-if="this.boolHasRutines"></PlusCard>
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
          @click="this.salir"
      >
        Salir
      </v-btn>
      <CreateExerciseOverlay></CreateExerciseOverlay>
    </v-overlay>
    <ExerciseList style="margin-top: 30px" v-if="!this.booleanHasExc"></ExerciseList>
    <PlusCardExcercise v-if="this.booleanHasExc"></PlusCardExcercise>
  </div>
</template>

<script>

import RoutineList from "../components/RoutineList";
import ExerciseList from "../components/ExerciseList";
import CreateExerciseOverlay from "../components/CreateExerciseOverlay";
import ExerciseStore from "../store/ExerciseStore";
import RoutineStore from "../store/RoutineStore";
import PlusCard from "../components/PlusCard";
import PlusCardExcercise from "../components/PlusCardExcercise";

export default {
  name: "Rutinas.vue",
  components: {PlusCardExcercise, PlusCard, CreateExerciseOverlay, ExerciseList, RoutineList},
  data() {
    return {
      routines: [],
      overlayExercise: false,
      zIndexExercise: 1,
      boolHasRutines:false,
      booleanHasExc:false,
      store: ExerciseStore,
      exercise: {titulo: "Titulo", description: "Description", repetitions: 10, duration: null}
    }
  },
  methods: {
    async hasRutines(){
      this.boolHasRutines = (await RoutineStore.getAllRoutines()).length === 0
    },
    async hasExcercise(){
      this.booleanHasExc = (await ExerciseStore.getAllExercises()).length === 0
    },
    salir(){
      this.store.overlayCreator = false;
      if(this.store.edit)
        this.store.edit = false;
    }
  },
  created() {
    this.hasRutines();
    this.hasExcercise();
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