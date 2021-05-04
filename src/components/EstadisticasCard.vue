<template>
  <div width="600px" class="estadisticasHerni" >
    <v-card width="560px" min-height="309px" class="cardClass">
      <v-row>
        <v-col>
          <h4>Entrenamientos completados</h4>
          <h2>(Num)</h2>
          <h4>Horas entrenadas</h4>
          <h2>(Num)</h2>
          <h4>Calorias quemadas</h4>
          <h2>(Num)</h2>
        </v-col>
        <v-col>
          <h4>Entrenadores</h4>
          <h1>Fotitos</h1>
        </v-col>
      </v-row>
    </v-card>
  </div >
</template>

<script>
export default {
  name: "Estadisticas"
}
</script>

<style scoped>
.cardClass {
  border-radius: 20px;
  padding: 20px;
}
.estadisticasHerni {
  margin: 5% auto ;
  padding-right: 20px;
}
</style>