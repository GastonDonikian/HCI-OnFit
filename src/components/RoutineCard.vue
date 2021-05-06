<template>
  <div class="menu">

    <v-card
        class="mx-auto"
        width="344"
        v-bind:color= this.routine.disciplina
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
            {{ routine.titulo }}
          </v-list-item-title>
          <v-list-item-subtitle class="black--text">{{ routine.description }}</v-list-item-subtitle>
          <v-rating
              v-model=this.routine.estrellas
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
    routine: {title: String,description: String,rating: Number,color: String}
  },
  data: () => ({
    store: RoutineStore,
    storeCreate: CreateRoutineStore
  }),
  methods: {
    // //Decido validar en la routine list cuando lo pido desde la API y no aca asi puedo elegir no crear la routine card.
    // newRoutineCard(titulo, description, estrellas, color) {
    //   this.titulo = titulo;
    //   this.description = description;
    //   this.estrellas = estrellas;
    //   this.color = color;
    // },
    toView(){
      window.location.href = '/#/ViewRutine';
    },
    buscarRutina(){
      console.log(this.routine.titulo)
      let aux = this.store.findByName(this.routine.titulo)
      console.log(aux)
      if(aux != null)
        this.storeCreate.cargarRutina(aux)
      window.location.href = '/#/RoutineCreator'
    }
  },
  computed: {
    isValidDescriptionName() {
      return (this.description.length)
    },
  },
}
</script>
export default {}
<style scoped>

</style>