<template>
  <div class="logros">
    <v-card width="613px" class="cardClass">
      <v-row>
        <v-col>
          <!--          Aca iria un v-for iterando sobre los objetos de data-->
          <h3>Fotito</h3>
          <h3>Fotito</h3>
          <h3>Fotito</h3>
          <h3>Fotito</h3>
          <h3>Fotito</h3>
          <h3>Fotito</h3>
        </v-col>
        <v-col>
<!--          Aca iria un v-for iterando sobre los objetos de data-->
          <h3>Enhorabuena!</h3>
          <h3>Enhorabuena!</h3>
          <h3>Enhorabuena!</h3>
          <h3>Enhorabuena!</h3>
          <h3>Enhorabuena!</h3>
          <h3>Enhorabuena!</h3>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Logros"
}
</script>

<style scoped>
.logros {
  margin: 10% auto;
  /*padding-right: 20px;*/
  /*padding-left: 20px;*/
}
.cardClass {
  border-radius: 20px;
  padding: 20px;
}
</style>