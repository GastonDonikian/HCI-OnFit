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
              @click="this.changeFilter(category)"
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
    <div>
      <v-row>
        <RoutineCard v-for="routine in this.routinesFiltered" :key="routine.id" :routine="routine" :can-edit="false" style="margin-bottom: 5%; margin-left: 2%"></RoutineCard>
      </v-row>
    </div>
  </div>
</template>


<script>

import RoutineCard from "../components/RoutineCard";
import RoutineStore from "../store/RoutineStore";
import RutinasEnum from "../store/RutinasEnum";


export default {
  //TODO: ver como acceder a todas las rutinas publicas de todos los usuarios
  name: "Explore.vue",
  components: {RoutineCard},
  data: function () {
    return {
      currentCategory: 'Destacados',
      routineStore: RoutineStore,
      routinesFiltered: [],
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
  methods: {
    async changeFilter(category){
      if(category === 'Pesas')
        this.routinesFiltered = (await this.routineStore.getPesasRoutines());
      else if(category === 'En Casa')
        this.routinesFiltered = (await this.routineStore.getCasaRoutines());
      else if(category === 'Running'){
        this.routinesFiltered = (await this.routineStore.getRunningRoutines());
      } else
        this.routinesFiltered = (await this.routineStore.getAllPublicRoutines());
    },
  },
  computed: {},
  async created() {
    console.log("hola")
    this.routinesFiltered = (await this.routineStore.getAllPublicRoutines());
    console.log(this.routinesFiltered)
  }
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