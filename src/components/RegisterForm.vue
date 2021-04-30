<template>
  <v-card class="principal" max-width="400px">
    <h3>REGISTRARSE</h3>
    <!--      <v-text-field outlined background-color="#FFFFFF" class="cortados"></v-text-field>-->
    <!--      <v-text-field outlined background-color="#FFFFFF" class="cortados"></v-text-field>-->

    <v-layout wrap>
      <v-flex xs12 sm6  class="pa-1">
        <v-text-field
            label="Nombre"
            outlined
            background-color="#FFFFFF"
            placeholder="Maria Luisa"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6  class="pa-1">
        <v-text-field
            label="Apellido"
            chips
            placeholder="Campos"
            outlined
            background-color="#FFFFFF"
            multiple
        >
        </v-text-field>
      </v-flex>
    </v-layout>

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
    <p>CONFIRMAR CONTRASEÑA</p>
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
    <v-btn color="#E77381" class="white--text" rounded large>Ingresar</v-btn>

  </v-card>
</template>

<script>
export default {
  name: "RegisterForm"
}
</script>

<style scoped>
.principal {
  padding-right: 30px;
  padding-left: 30px;
  background-color: #EBEBEB;
}
</style>