<template>
  <v-container style="background-color: grey;opacity: 1; border-radius: 10px">
    <v-row class="justify-center">
      <h1 v-if="!this.store.edit">Crear nuevo ejercicio</h1>
      <h1 v-else>Editar ejercicio</h1>
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
        <v-btn v-if="!this.store.edit" @click="addExercise()" style="margin-left: 240px"
               color="success">Crear ejercicio
        </v-btn>
        <v-btn v-else @click="addExercise()" style="margin-left: 240px"
               color="success">
          Editar ejercicio
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="error_nombre" style="color: darkred">Por favor completar el nombre</v-col>
      <v-col v-if="error_nombre_largo" style="color: darkred">El nombre tiene un maximo de 15 caracteres</v-col>
    </v-row>
    <v-row>
      <v-col v-if="error_repe_dur" style=" color: darkred">Por favor completar repeticiones o duración</v-col>
    </v-row>
    <v-row>
      <v-col v-if="error_repe_dur_2" style="color: darkred">Por favor completar solo duración o solo repeticiones</v-col>
    </v-row>
    <v-row>
      <v-col v-if="repeatedExName" style="color: darkred">Ya existe un ejercicio con este mismo nombre</v-col>
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
    repeatedExName:false,
    name: "",
    detail: "",
    repetitions: "",
    duration: ""
  }),

  methods: {

    validations() {
      this.error_nombre = this.name === "";
      this.error_nombre_largo = this.name.length > 15;
      this.error_repe_dur = this.duration === "" && this.repetitions === "";
      if (this.repetitions !=="" && this.duration !=="") {
        this.error_repe_dur_2 = true;
        this.duration = "";
        this.repetitions = "";
      } else {
        this.error_repe_dur_2 = false;
      }
      return !this.error_nombre && !this.error_nombre_largo
          && !this.error_repe_dur && !this.error_repe_dur_2;
    },

    async addExercise() {
      this.repeatedExName = false;
      this.error_nombre= false;
      this.error_nombre_largo= false;
      this.error_repe_dur= false;
      this.error_repe_dur_2= false;
      if (!this.validations()) {
        return;
      }
      await this.store.addExercise(this.name, this.detail, this.repetitions, this.duration, this.store.id);
      if(this.store.repeatedName){
          this.repeatedExName = true;
          return;
      }
      else{
        this.repeatedExName = false;
      }

      this.store.overlayCreator= false;
    }
  },
  created() {
    if(this.store.edit) {
      this.name = this.store.name;
      this.detail= this.store.detail;
      this.repetitions= this.store.repetitions;
      this.duration= this.store.duration;
    } else {
      this.name = "";
      this.detail = "";
      this.repetitions = "";
      this.duration = "";
    }
  }
}
</script>

<style scoped>

</style>
