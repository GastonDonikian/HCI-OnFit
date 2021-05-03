<template>
  <div width="600px" class="estadisticasHerni" >
    <v-card width="560px" min-height="309px" class="cardClass">
      <v-row>
        <v-col>
          <h3>Entrenamientos completados</h3>
          <h2>(Num)</h2>
          <h3>Horas entrenadas</h3>
          <h2>(Num)</h2>
          <h3>Calorias quemadas</h3>
          <h2>(Num)</h2>
        </v-col>
        <v-col>
          <h3>Entrenadores</h3>
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