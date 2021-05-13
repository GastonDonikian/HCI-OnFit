<template>
  <div style="margin-top: 20px">
    <span class="imgBack"></span>
    <v-row>
      <v-col v-for="category in this.categoryArray" :key="category.id">
        <div align="center">
          <v-btn
              rounded
              width="300"
              height="80"
              :color=category.color
              class="textStyle"
              @click="currentCategory = category.name;"
          >
            <v-icon
                x-large
                left
                style="margin-right: 30px"
            >{{ category.icon }}
            </v-icon>
            {{ category.name }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <RoutineList :key="currentCategory" :category="this.currentCategory" :can-edit="false" style="margin-top: 12%"></RoutineList>
  </div>
</template>


<script>

import RoutineList from "../components/RoutineList";
import RoutineStore from "../store/RoutineStore";
import RutinasEnum from "../store/RutinasEnum";


export default {
  //TODO: ver como acceder a todas las rutinas publicas de todos los usuarios
  name: "Explore.vue",
  components: {RoutineList},
  data: function () {
    return {
      currentCategory: 'Pesas',
      routineStore: RoutineStore,
      categoryArray: [{name: 'Destacados', icon: 'mdi-star-shooting-outline', color: RutinasEnum.Destacados}, {
        name: 'Pesas',
        icon: 'mdi-dumbbell', color: RutinasEnum.Pesas
      }, {name: 'Running', icon: 'mdi-run-fast', color: RutinasEnum.Running}, {
        name: 'En Casa',
        icon: 'mdi-home-roof',
        color: RutinasEnum.EnCasa
      }]
    }
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>
.textStyle {
  font-size: 20px;
  color: #EBEBEB;
}

.imgBack {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  margin: 0 0 0 0;
  left: 0;
  z-index: 0;
  background: url('../assets/backgroundImage2.png') no-repeat center center fixed;
  background-size: cover;
}
</style>