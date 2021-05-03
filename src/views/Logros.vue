<template>
  <div style="margin-right: 200px; margin-left: 200px">
    <v-row>
      <v-col align-self="center" class="estadisticas">
        <div class="divPrincipal">

          <div class="divPrincipal">
            <h1>Estadisticas</h1>
            <div >
              <v-btn class="btnFilto white--text" color="#E77381" rounded x-large>SEMANAL</v-btn>
              <v-btn class="btnFilto white--text" color="#E77381" rounded x-large>MENSUAL</v-btn>
              <v-btn class=" white--text" color="#E77381" rounded x-large>ANUAL</v-btn>
            </div>
          </div>
          <EstadisticasCard></EstadisticasCard>
        </div>
      </v-col>
      <v-col align-self="center">
        <v-row>
          <v-spacer></v-spacer>
          <div style="margin:10%  10%">
            <h1>ME QUIERO MATAR</h1>
            <LogrosCard></LogrosCard>
          </div>
        </v-row>
      </v-col>
    </v-row>

  </div>
</template>


<script>
import EstadisticasCard from "../components/EstadisticasCard";
import LogrosCard from "../components/LogrosCard";

export default {
  components: {EstadisticasCard, LogrosCard},
  data() {
    return {
      show1: false,
      password: '',
    }
  },
}
</script>

<style scoped>
.estadisticas {
  margin: 5% 2%;
}

.btnFilto {
  margin: 0 5% 0 0;
}

.divPrincipal {
  max-width: 560px;
}

</style>