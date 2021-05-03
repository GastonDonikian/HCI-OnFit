<template>
  <div style="margin-top: 7px">
    <v-card width="600px" min-height="500px" style="color: #EBEBEB; padding-bottom: 20px">
      <h3 style="color: black; padding-left: 5%; padding-top: 10px">EJERCICIOS</h3>
      <div v-for="exercise in store.getAllExercises()" :key="exercise" style="padding: 2% 2% 0 2%">
        <v-btn
            block
            outlined
            rounded
            color="#707070"
            height="60px"
            @click="storeR.deactivate()"
        >{{exercise.titulo}}</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import ExerciseStore from "../store/ExerciseStore";
import CreateRoutineStore from "../store/CreateRoutineStore";
export default {
  name: "AddExCard",
  data(){
    return {
      store: ExerciseStore,
      storeR: CreateRoutineStore
    }
  }
}
</script>
<!--            aca estaria bueno tener una funcion que al hacer click, me acutualice la tarjerta de la creacion de ritina-->
<style scoped>

</style>