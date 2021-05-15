<template>
  <div style="margin-top: 20px; margin-left: 60px">
    <v-card width="600px" height="625px" style="color: #EBEBEB; padding-bottom: 20px; overflow-y: scroll; overflow-x: hidden; position: fixed">
      <v-row style="padding-top: 10px; padding-bottom: 20px">
        <h3 style="color: black;display: inline;margin-top: 20px ;padding-left: 5%">EJERCICIOS</h3>
        <v-btn style="margin-top: 15px ;margin-left: 350px" color="warning" @click="storeR.deactivate()">Salir</v-btn>
      </v-row>
      <v-expansion-panels v-for="exercise in this.exercises" :key="exercise.id" style="padding: 2% 2% 0 2%">
        <v-expansion-panel
            rounded
            color="#707070"
            height="60px"
        >
          <v-expansion-panel-header v-if="exercise.metadata !== null">
            <v-row no-gutters>
              <v-col cols="4">
                {{ exercise.name }}
              </v-col>
              <v-col
                  cols="7"
                  class="text--secondary"
                  v-if="exercise.metadata.duration !== null">{{ exercise.metadata.duration }} segundos
              </v-col>
              <v-col cols="7"
                     class="text--secondary"
                     v-if="exercise.metadata.repetitions !== null">{{ exercise.metadata.repetitions }} repeticiones
              </v-col>
            </v-row>
            <v-btn max-width="100px" @click.stop="storeR.addExercise(exercise)" color="#E46271" class="white--text" style="margin-right: 5%">Agregar
            </v-btn>
          </v-expansion-panel-header>
          <v-expansion-panel-content>{{ exercise.detail }}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
import ExerciseStore from "../store/ExerciseStore";
import CreateRoutineStore from "../store/CreateRoutineStore";

export default {
  name: "AddExCard",
  data() {
    return {
      store: ExerciseStore,
      storeR: CreateRoutineStore,
      exercises: []
    }
  },
  async created() {
    this.exercises = (await this.store.getAllExercises());
  }
}
</script>
<style scoped>

</style>