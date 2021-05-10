<template>
  <v-container style="background-color: grey;opacity: 1; border-radius: 10px">
    <v-row class="justify-center">
      <h1>Crear nuevo ejercicio</h1>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
            label="Nombre del ejercicio" v-model="name"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-textarea
            label="Descripción"
            v-model="detail"
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
        <v-btn @click="addExercise()" style="margin-left: 240px"
               color="success">Crear ejercicio
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="error" style="color: darkred">Por favor completar bien los campos</v-col>
    </v-row>
    <v-row>
      <v-col v-if="repe === 400" style="color: darkred">Ya existe un ejercicio con este mismo nombre</v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExerciseStore from "../store/ExerciseStore";

export default {
  name: "CreateExerciseOverlay",
  data: () => ({
    store: ExerciseStore,
    error:false,
    repe: null,
    name: "",
    detail: "",
    repetitions: null,
    duration: null
  }),

  methods: {
    addExercise() {
      if(this.name === "" || (this.repetitions === null && this.duration === null))
        this.error = true;
      else {
        this.error = false;
        try {
          this.store.addExercise(this.name, this.detail, this.repetitions, this.duration);
        } catch (e){
          console.log(this.repe)
        }
        if(this.repe !== 2)
          ExerciseStore.overlayCreator = false;
      }
    }
  }
}
</script>

<style scoped>

</style>