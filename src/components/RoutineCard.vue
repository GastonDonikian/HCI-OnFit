<template>
  <div class="menu">

    <v-card
        class="mx-auto"
        width="344"
        v-bind:color=this.getColor()
        @click="toView"
    ><!--color cambia con la API-->
      <v-list-item three-line>
        <v-list-item-avatar
            rounded
            height="150"
            width="80"
            color="grey"
        ></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 black--text">
            {{ routine.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="black--text">{{ routine.detail }}</v-list-item-subtitle>
          <v-rating
              v-model=this.routine.averageRating
              background-color="black"
              color="black"
              small
              readonly
          ></v-rating>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                rounded
                small
                text
                color="black"
                @click="buscarRutina"
            >
              Editar rutina
            </v-btn>
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>

import RoutineStore from "../store/RoutineStore";
import CreateRoutineStore from "../store/CreateRoutineStore";

export default {
  name: "RoutineCard",
  props: {
    routine: {name: String, detail: String, averageRating: Number, category: Object}
  },
  data: () => ({
    store: RoutineStore,
    storeCreate: CreateRoutineStore
  }),
  methods: {
    getColor(){
      return this.store.getColor(this.routine)
    },
    // //Decido validar en la routine list cuando lo pido desde la API y no aca asi puedo elegir no crear la routine card.
    // newRoutineCard(titulo, description, estrellas, color) {
    //   this.titulo = titulo;
    //   this.description = description;
    //   this.estrellas = estrellas;
    //   this.color = color;
    // },
    toView() {
      window.location.href = '/#/ViewRoutine';
    },
    buscarRutina() {
      console.log(this.routine.name)
      let aux = this.store.findByName(this.routine.name)
      console.log(aux)
      if (aux != null)
        this.storeCreate.cargarRutina(aux)
      window.location.href = '/#/RoutineCreator'
    }
  },
}
</script>
export default {}
<style scoped>

</style>