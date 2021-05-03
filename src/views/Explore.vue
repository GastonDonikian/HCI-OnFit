<template>
  <div style="margin-top: 20px">
    <span class="imgBack"></span>
    <v-row>
      <v-col>
        <div align="center">
          <v-btn
              rounded
              color="#89D9D2"
              width="300"
              height="80"
              class="textStyle"
          ><v-icon
            x-large
            left
            style="margin-right: 30px"
          >mdi-star-shooting-outline</v-icon>
            DESTACADOS
          </v-btn>
        </div>
      </v-col>
      <v-col >
        <div align="center">
<!--          Ya se que es una solucion nefasta pero era facil-->
          <v-btn @click="filtrarPorDisciplina('#7885FF')"
              rounded
              color="#7885FF"
              width="300"
              height="80"
              class="textStyle"
          ><v-icon
            x-large
            left
            style="margin-right: 30px"
          >mdi-dumbbell</v-icon>
            PESAS
          </v-btn>
        </div>
      </v-col >
      <v-col >
        <div align="center">
          <!--          Ya se que es una solucion nefasta pero era facil-->
          <v-btn @click="filtrarPorDisciplina('#F1B0B8')"
              rounded
              color="#F1B0B8"
              width="300"
              height="80"
              class="textStyle"
          ><v-icon
              x-large
              left
              style="margin-right: 30px"
          >mdi-run-fast</v-icon>RUNNING
          </v-btn>
        </div>
      </v-col>
      <v-col>
        <div align="center">
          <!--          Ya se que es una solucion nefasta pero era facil-->
          <v-btn @click="filtrarPorDisciplina('#B495C2')"
              rounded
              color="#B495C2"
              width="300"
              height="80"
              class="textStyle"
          >
            <v-icon
                x-large
                left
                style="margin-right: 30px"
            >mdi-home-roof</v-icon>
            EN CASA
          </v-btn>
        </div>
      </v-col>
    </v-row>




    <v-card
        width="344"
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
            titulo
          </v-list-item-title>
          <v-list-item-subtitle class="black--text">la description de la rutina</v-list-item-subtitle>
<!--          <v-rating-->
<!--              v-model=this.routine.estrellas-->
<!--              background-color="black"-->
<!--              color="black"-->
<!--              small-->
<!--              readonly-->
<!--          ></v-rating>-->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                rounded
                small
                text
                color="black"
            >
              Ver rutina
            </v-btn>
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>
    </v-card>



  </div>
</template>


<script>
import RoutineStore from "../store/RoutineStore";


export default {
  name: "Explore.vue",
  components: {},
  data: function () {
    return {
      routineStore: RoutineStore,
    }
  },
  methods: {
    filtrarPorDisciplina(disciplina) {
      for (const rutina of this.routineStore.routines) {
        if (rutina.disciplina == disciplina) {
          console.log(rutina.titulo);
        }
      }
    }
  }
}
</script>

<style scoped>
  .textStyle{
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