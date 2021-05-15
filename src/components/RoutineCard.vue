<template>
  <div class="menu">
    <v-card
        class="mx-auto"
        width="344"
        v-bind:color=this.getColor()
    >
      <v-list-item three-line>
        <v-list-item-avatar class="imageCard"
            rounded
            height="150"
            width="80"
            color="grey"
        ><v-img
            v-if="this.routine.category.id === 2"
            src="../assets/Fotopesas.png">
        </v-img>
          <v-img
              v-if="this.routine.category.id === 3"
              src="../assets/FotoRunning.png">
          </v-img>
          <v-img
              v-if="this.routine.category.id === 1"
              src="../assets/FotoEnCasa.png">
          </v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 black--text">
            {{ routine.name }}
            <v-btn v-if="this.canEdit" @click="deleteRoutine(routine.id)" depressed style="margin-left: 10px" color="red"
                   fab x-small>
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
          </v-list-item-title>
          <v-list-item-subtitle class="black--text">{{ routine.detail }}</v-list-item-subtitle>
          <v-rating
              :value=this.average
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
                @click="toView(routine)"
            >
              Ver rutina
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                v-if="this.canEdit"
                rounded
                small
                text
                color="black"
                @click="buscarRutina(routine)"
            >
              Editar rutina
            </v-btn>
            <div
                v-if="!this.canEdit"
            >
              <v-icon v-if="!isFav" @click="addToFavs(routine)" color="black">mdi-heart-outline</v-icon>
              <v-icon v-if="isFav" @click="removeFavs(routine)" color="red">mdi-cards-heart</v-icon>
            </div>
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>

import RoutineStore from "../store/RoutineStore";
import CreateRoutineStore from "../store/CreateRoutineStore";
import {FavouritesApi} from "../api/FavouritesApi";


export default {
  name: "RoutineCard",
  props: {
    routine: {type: Object},
    canEdit: {type: Boolean},
  },
  data: () => ({
    store: RoutineStore,
    storeCreate: CreateRoutineStore,
    isFav: false,
    average: null,
  }),
  methods: {
    getColor(){
      return this.store.getColor(this.routine)
    },
    toView(routine) {
      this.storeCreate.cargarTemp(routine);
      window.location.href = '/#/ViewRoutine';
    },
    buscarRutina(routine) {
      this.storeCreate.edit = true;
      this.storeCreate.cargarTemp(routine);
      window.location.href = '/#/RoutineCreator'
    },
    getRutineRaiting(routine){
      return this.store.getRoutineAverageRating(routine);
    },
    async deleteRoutine(id) {
      await this.store.deleteRoutine(id);
    },
    async addToFavs(routine) {
      this.isFav = true;
      await FavouritesApi.addFav(routine.id);
    },
    async removeFavs(routine) {
      this.isFav = false;
      await FavouritesApi.removeFav(routine.id);
    },
    async routineIsFav(routine) {
      let favs = (await FavouritesApi.getRoutinesFav());
      for (const fav of favs) {
        if(fav.id === routine.id)
          return true;
      }
      return false;
    },
  },
  async mounted() {
    this.isFav = await this.routineIsFav(this.routine);
    this.average = await this.getRutineRaiting(this.routine);
  }
}
</script>
export default {}
<style scoped>
</style>