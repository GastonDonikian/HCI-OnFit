<template>
  <div >
    <v-row justify="center">
      <v-spacer></v-spacer>
<!--      <v-col>-->
        <v-card
            v-if="this.fav_length=== 0"
            color="#EBEBEB"
            width="500"
            style="margin-top: 15%"
        >
          <v-card-title
              style="font-weight: normal; margin-bottom: 20px"
              class="justify-center"
          >NO TENES FAVORITOS</v-card-title>
          <v-card-text
              class="text-center"
              style="font-weight: normal; margin-bottom: 20px"
          >Busca en explorar y encontra las rutinas perfectas para vos</v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions
              class="justify-center"
          >
            <v-btn
                color="#E46271"
                class="white--text"
                style=" margin-bottom: 20px"
                :to="'../Explore'"
            >Ir a Explorar</v-btn>
          </v-card-actions>
        </v-card>
        <v-card
            v-else
            width="1400"
            style="background-color: transparent; margin-top: 2%"

        >
          <v-card-title
              class="justify-center"
          >FAVORITOS</v-card-title>

            <v-row>
              <v-col>
                <RoutineCard v-for="fav in this.favs3" :key="fav.id" :routine="fav" :can-edit="false" style="margin-bottom: 5%; margin-left: 5%"></RoutineCard>
              </v-col>
              <v-col>
                <RoutineCard v-for="fav in this.favs2" :key="fav.id" :routine="fav" :can-edit="false" style="margin-bottom: 5%; margin-right: 5%"></RoutineCard>
              </v-col>
              <v-col>
                <RoutineCard v-for="fav in this.favs1" :key="fav.id" :routine="fav" :can-edit="false" style="margin-bottom: 5%; margin-right: 5%"></RoutineCard>
              </v-col>
            </v-row>
          </v-card>
<!--      </v-col>-->
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>

import {FavouritesApi} from "../api/FavouritesApi";
import RoutineCard from "../components/RoutineCard";

export default {
  name: "Favoritos",
  components: {RoutineCard},
  data: () => ({
    fav_length: null,
    favs: null,
    favs1: null,
    favs2: null,
    favs3: null,
  }),

  async created() {
    this.favs = (await FavouritesApi.getRoutinesFav());
    this.fav_length = this.favs.length;
    this.favs1 = this.favs.slice(0,this.fav_length/3);
    this.favs2 = this.favs.slice(this.fav_length/3,2*this.fav_length/3);
    this.favs3 = this.favs.slice(2*this.fav_length/3);
  }
}


//TODO:mañana prometo que lo hago
</script>
<style scoped>

</style>