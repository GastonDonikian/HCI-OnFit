<template>
  <div style="margin-right: 5%">
    <v-row>
      <v-col class="estadisticas">
        <div class="divPrincipal" >
            <h1>ESTADISTICAS</h1>
            <div >
              <v-btn class="btnFilto white--text" color="#E77381" rounded x-large>SEMANAL</v-btn>
              <v-btn class="btnFilto white--text" color="#E77381" rounded x-large>MENSUAL</v-btn>
              <v-btn class="btnFilto white--text" color="#E77381" rounded x-large>ANUAL</v-btn>
            </div>
          <EstadisticasCard></EstadisticasCard>
        </div>
      </v-col>
      <v-col class="estadisticas">
          <div>
            <h1>TUS LOGROS</h1>
            <LogrosCard></LogrosCard>
          </div>
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
  margin: 2% 5% 0 0;
}

.divPrincipal {
  max-width: 560px;
}

</style>