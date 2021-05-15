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
              @click="changeFilter(category.name)"
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
    <v-row style="margin-top: 5%"></v-row>
    <div>
      <v-row justify="center">
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
  name: "Explore.vue",
  components: {RoutineCard},
  data: function () {
    return {
      currentCategory: 'Destacados',
      routineStore: RoutineStore,
      routinesFiltered: [],
      categoryArray: [{name: 'Destacados', icon: 'mdi-star-shooting-outline', color: RutinasEnum.Destacados}, {
        name: 'Pesas',
        icon: 'mdi-dumbbell', color: RutinasEnum.Pesas,
        categoryId: 2
      }, {name: 'Running', icon: 'mdi-run-fast', color: RutinasEnum.Running, categoryId: 3}, {
        name: 'En Casa',
        icon: 'mdi-home-roof',
        categoryId: 1,
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
    this.routinesFiltered = (await this.routineStore.getAllPublicRoutines());
  },
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