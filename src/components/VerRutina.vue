<template>
  <div>
    <v-card width="500px" color="#EBEBEB" class="principalRutina">
      <v-col style="padding-left: 5%; padding-top: 5%; padding-bottom: 5%">
        <v-row  style="margin-bottom: -5%">
          <v-col>
          <h2 style="font-weight: bold" align="left">{{ this.store.tempRoutine.titulo.toUpperCase() }}</h2>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-rating
            v-model="average"
            background-color="black"
            color="black"
            small>
            </v-rating>
          </v-col>
        </v-row>
        <v-row>
          <h4 style="color: #E46271; font-weight: normal" >Categoría: </h4>
          <h4 style="width: 10px"></h4>
          <h4 style="font-weight: normal">{{ findCategory(this.store.tempRoutine.category.id) }}</h4>
        </v-row>
        <v-row>
          <h4 style="color: #E46271; font-weight: normal">Descripción: </h4>
          <h4 style="width: 10px"></h4>
          <h4 style="font-weight: normal"> {{ this.store.tempRoutine.detail }}</h4>
        </v-row>
        <v-row>
          <v-card
              elevation="0"
              color="#EBEBEB"
              outlined
              style="border-color: #E46271; margin-bottom: 2%"
              class="text-left"
              width="475"
          >
            <h4 style="padding: 5px" >Entrada en calor x{{this.store.tempRoutine.repeticionesEntradaEnCalor}}</h4>
            <div v-if="this.store.tempRoutine.entradaEnCalor.length !== 0">
            <v-banner v-for="ex in this.store.tempRoutine.entradaEnCalor" :key="ex.id">
              <v-row style="padding: 2.5% 0 0 5%; margin-bottom: 1%">
                <v-col cols="10">
                  <v-row class="text--black">{{ ex.name }}</v-row>
                  <v-row class="text--secondary" style="font-size: 10px">{{ex.detail}}</v-row>
                  <v-row v-if="noDetail(ex.detail)" class="grey--text" style="font-size: 11px">sin descripción</v-row>
                </v-col>

                <v-spacer></v-spacer>
                <v-col v-if="ex.metadata.repetitions != null">x{{ex.metadata.repetitions}}</v-col>
                <v-col v-if="ex.metadata.duration != null">{{ex.metadata.duration}}s</v-col>

              </v-row>
            </v-banner>
            </div>
            <div v-else>
              <h5 style="margin-left: 2%; font-weight: normal" class="text--secondary">No hay ejercicios</h5>
            </div>
          </v-card>
          <v-card
              elevation="0"
              color="#EBEBEB"
              outlined
              style="border-color: #E46271; margin-bottom: 2%"
              class="text-left"
              width="475"
          >
            <h4 style="padding: 5px">Principal x{{this.store.tempRoutine.repeticionesPrincipal}}</h4>
            <div v-if="this.store.tempRoutine.principal.length !== 0">
              <v-banner v-for="ex in this.store.tempRoutine.principal" :key="ex.id">
                <v-row style="padding: 2.5% 0 0 5%; margin-bottom: 1%">
                  <v-col cols="10">
                    <v-row class="text--black">{{ ex.name }}</v-row>
                    <v-row class="text--secondary" style="font-size: 10px">{{ex.detail}}</v-row>
                    <v-row v-if="noDetail(ex.detail)" class="grey--text" style="font-size: 11px">sin descripción</v-row>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col v-if="ex.metadata.repetitions != null">x{{ex.metadata.repetitions}}</v-col>
                  <v-col v-if="ex.metadata.duration != null">{{ex.metadata.duration}}s</v-col>
                </v-row>
              </v-banner>
            </div>
            <div v-else>
              <h5 style="margin-left: 2%; font-weight: normal" class="text--secondary">No hay ejercicios</h5>
            </div>
          </v-card>
          <v-card
              elevation="0"
              color="#EBEBEB"
              outlined
              style="border-color: #E46271"
              class="text-left"
              width="475"
          >
            <h4 style="padding: 5px">Elongación x{{this.store.tempRoutine.repeticionesElongacion}}</h4>
            <div v-if="this.store.tempRoutine.elongacion.length !== 0">
            <v-banner v-for="ex in this.store.tempRoutine.elongacion" :key="ex.id">
              <v-row style="padding: 2.5% 0 0 5%; margin-bottom: 1%">
                <v-col cols="10">
                  <v-row class="text--black">{{ ex.name }}</v-row>
                  <v-row class="text--secondary" style="font-size: 12px">{{ex.detail}}</v-row>
                  <v-row v-if="noDetail(ex.detail)" class="grey--text" style="font-size: 11px">sin descripción</v-row>
                </v-col>
                <v-spacer></v-spacer>
                <v-col v-if="ex.metadata.repetitions != null">x{{ex.metadata.repetitions}}</v-col>
                <v-col v-if="ex.metadata.duration != null">{{ex.metadata.duration}}s</v-col>
              </v-row>
            </v-banner>
            </div>
            <div v-else>
              <h5 style="margin-left: 2%; font-weight: normal" class="text--secondary">No hay ejercicios</h5>
            </div>
          </v-card>
        </v-row>
      </v-col>
      <v-btn color="#E46271" @click="goTo()" style="color: #EBEBEB; margin-bottom: 2%; margin-left: 70%" >Salir</v-btn>
    </v-card>
  </div>
</template>

<script>


import CreateRoutineStore from "../store/CreateRoutineStore";

export default {
  name: "VerRutina",
  data() {
    return{
      average: 0,
      store: CreateRoutineStore,
    }
  },
  props: {
    toExplore: {type: Boolean, required: true},
  },
  methods: {
    noDetail(detail) {
      return detail === "";
    },
    findCategory(category) {
      if (category === 1) {
        return "En Casa";
      } else if (category === 2) {
        return "Pesas";
      } else
        return "Running";
    },

    goTo(){
      if(this.toExplore)
        window.location.href = '/#/Explore'
      else
        window.location.href = '/#/Rutinas'
    }
  },
  async destroyed() {
    if(this.average!==0) {
      await this.store.voteRaiting(this.store.rutineAEditar.id, this.average);
    }
    this.store.vaciarTemp();
  }
}
</script>

<style scoped>
.principalRutina{
  margin-top: 5%;
}

</style>