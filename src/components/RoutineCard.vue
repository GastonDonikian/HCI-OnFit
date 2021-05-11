<template>
  <div class="menu">
    <v-card
        class="mx-auto"
        width="344"
        v-bind:color=this.getColor()
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
            <v-btn @click="deleteRoutine(routine.id)" depressed style="margin-left: 10px" color="red"
                   fab x-small>
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
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
            <v-btn
                rounded
                small
                text
                color="black"
                @click="toView"
            >
              Ver rutina
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                rounded
                small
                text
                color="black"
                @click="buscarRutina(routine)"
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
    buscarRutina(routine) {
      this.storeCreate.edit = true;
      console.log(routine);
      this.storeCreate.cargarTemp(routine);
      window.location.href = '/#/RoutineCreator'
    },
    async deleteRoutine(id) {
      await this.store.deleteRoutine(id);
    }
  },
}
</script>
export default {}
<style scoped>

</style>