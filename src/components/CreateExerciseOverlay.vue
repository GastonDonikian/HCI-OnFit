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
            min="0"
            v-model="repetitions"
            dense
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
            type="number"
            label="Duración"
            suffix="s"
            min="0"
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
      <v-col v-if="error_nombre" style="color: darkred">Por favor completar el nombre</v-col>
      <v-col v-if="error_nombre_largo" style="color: darkred">El nombre tiene un maximo de 15 caracteres</v-col>
    </v-row>
    <v-row>
      <v-col v-if="error_repe_dur" style="color: darkred">Por favor completar repeticiones o duración</v-col>
    </v-row>
    <v-row>
      <v-col v-if="error_repe_dur_2" style="color: darkred">Por favor completar solo duración o solo repeticiones</v-col>
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
    error_nombre: false,
    error_nombre_largo: false,
    error_repe_dur: false,
    error_repe_dur_2: false,
    repe: null,
    name: "",
    detail: "",
    repetitions: null,
    duration: null
  }),

  methods: {

    validations() {
      if (this.name === "") {
        this.error_nombre = true;
      } else {
        this.error_nombre = false;
      }
      if (this.name.length > 15) {
        this.error_nombre_largo = true;
      } else {
        this.error_nombre_largo = false;
      }
      if (this.duration === null && this.repetitions === null) {
        this.error_repe_dur = true;
      } else {
        this.error_repe_dur = false;
      }
      if (this.repetitions !== null && this.duration !== null) {
        this.error_repe_dur_2 = true;
        this.duration = null;
        this.repetitions = null;
      } else {
        this.error_repe_dur_2 = false;
      }
      return !this.error_nombre && !this.error_nombre_largo
          && !this.error_repe_dur && !this.error_repe_dur_2;
    },



    addExercise() {
      if (!this.validations()) {
        return;
      }
      // if(this.name === "")
      //   this.error_nombre = true;
      // else if(this.name.length > 15)
      //   this.error_nombre_largo = true;
      // else if(this.duration === null && this.repetitions === null){
      //   this.error_nombre = false;
      //   this.error_repe_dur = true;
      // }
      // else if(this.duration !== null && this.repetitions !== null){
      //   this.duration = null;
      //   this.repetitions = null;
      //   this.error_nombre = false;
      //   this.error_repe_dur = false;
      //   this.error_repe_dur_2 = true;
      // }
      // else {
      //   this.error_nombre = false;
      //   this.error_repe_dur_2 = false;
      //   this.error_repe_dur = false;
      //   this.error_nombre_largo = false;
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
</script>

<style scoped>

</style>
