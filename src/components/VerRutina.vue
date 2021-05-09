<template>
  <div align="center" @loadstart="loadRoutine">
    <v-card width="500px" color="#EBEBEB" class="principalRutina">
      <v-col style="padding-left: 5%; padding-top: 5%; padding-bottom: 5%">
        <v-row>
          <h2>NOMBRE</h2>
        </v-row>
        <v-row>
          <h3>Categoria</h3>
        </v-row>
        <v-row>
          <h3>Descripcion</h3>
        </v-row>
        <v-row>
          <v-card
              elevation="0"
              color="#EBEBEB"
              outlined
              style="border-color: #E46271"
              class="text-left"
          >
            <h4>Entrada en calor</h4>
            <v-banner v-for="ex in this.entrada" :key="ex.id">
              <v-row style="padding: 5% 5% 5% 5%">
                <v-col>
                  <v-row class="text--black"><h4>{{ ex.titulo }}</h4></v-row>
                  <v-row class="text--darken-4">{{ex.description}}</v-row>
                </v-col>

                <v-spacer></v-spacer>
                <v-col v-if="ex.repetitions != null">x{{ex.repetitions}}</v-col>
                <v-col v-if="ex.duration != null">{{ex.duration}}s</v-col>
              </v-row>
            </v-banner>
            <h4>Principal</h4>
            <h4>Elongación</h4>
          </v-card>
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>

<script>
import RoutineStore from "../store/RoutineStore";

export default {
  name: "VerRutina",
  data() {
    return{
      store: RoutineStore,
      elong: [],
      entrada: [],
      prin: []
    }
  },
  methods: {
    loadRoutine(){
      let routine = this.store.get(this.store.currentRoutine)
      this.entrada = routine.entradaEnCalor;
      this.prin = routine.principal;
      this.elong = routine.entradaEnCalor
    }
  },
  created(){
    this.loadRoutine();
  }
}
</script>

<style scoped>
.principalRutina{
  margin-top: 5%;
}

</style>