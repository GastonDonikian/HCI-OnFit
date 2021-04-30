<template>
  <v-card width="570px" max-height="412px" class="principal" style="background-color: #EBEBEB">
    <h3>INICIAR SESIÓN</h3>
    <p>MAIL</p>
    <v-text-field outlined background-color="#FFFFFF" label="usuario@ejemplo.com"></v-text-field>
    <p>CONTRASEÑA</p>
    <v-text-field
        background-color="#FFFFFF"

        outlined
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        counter
        @click:append="show1 = !show1">
    </v-text-field>
    <v-btn color="#E77381" class="white--text" rounded large :to="'/Rutinas'">Ingresar</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "LogInForm"
}
</script>

<style scoped>
.principal {
  padding-right: 30px;
  padding-left: 30px;
}
</style>