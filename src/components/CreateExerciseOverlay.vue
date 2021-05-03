<template>
  <v-container  style="background-color: grey;opacity: 0.9; border-radius: 10px">
    <v-row class="justify-center">
      <h1>Crear nuevo ejercicio</h1>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
        label="Nombre del ejercicio" v-model="titulo"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-textarea
        label="Descripción"
        v-model="description"
        counter></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
            type="number"
            label="Repeticiones"
            prefix="#"
            v-model="repetitions"
            dense
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
            type="number"
            label="Duración"
            suffix="s"
            dense
            v-model="duration"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="this.addExercise()" style="margin-left: 240px" color="success">Crear ejercicio</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExerciseStore from "../store/ExerciseStore";

export default {
  name: "CreateExerciseOverlay",
  data: () => ({
    store: ExerciseStore,
    titulo: "",
    description: "",
    repetitions: null,
    duration: null
  }),
  methods: {
    addExercise(titulo, description, repetitions, duration) {
      this.store.addExercise(titulo,description,repetitions,duration);
    }
  }
}
</script>

<style scoped>

</style>