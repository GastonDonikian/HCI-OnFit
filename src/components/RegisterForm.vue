<template>
  <v-card class="principal" max-width="450px" style="border-radius: 25px;">
    <h3>REGISTRARSE</h3>
    <v-layout wrap>
      <v-flex xs12 sm6 class="pa-1">
        <v-text-field
            label="Nombre"
            outlined
            background-color="#FFFFFF"
            placeholder="Maria Luisa"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 class="pa-1">
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
    <v-text-field outlined background-color="#FFFFFF" label="Mail" placeholder="usuario@ejemplo.com"></v-text-field>
    <v-text-field
        background-color="#FFFFFF"
        outlined
        label="Contraseña"
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        @click:append="show1 = !show1">
    </v-text-field>
    <v-text-field
        label="Confirmar contraseña"
        background-color="#FFFFFF"
        outlined
        v-model="password"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'"
        name="input-10-1"
        @click:append="show2 = !show2">
    </v-text-field>
    <v-btn color="#E77381" class="white--text" @click="this.register" rounded large>Ingresar</v-btn>

  </v-card>
</template>

<script>
import LoginStore from "../store/LoginStore";

export default {
  name: "RegisterForm",
  data() {
    return {
      store: LoginStore,
      show1: false,
      show2: false,
      user: {
        username: "gaston",
        password: "1234",
        firstName: "Gaston",
        lastName: "Donikian",
        gender: "male",
        birthdate: 284007600000,
        email: "gastondonikian@gmail.com",
        phone: "98295822",
        avatarUrl: "https://flic.kr/p/3ntH2u",
        metadata: null
      }
      //OKAY TODO LO QUE ESTA EN NULL NO HACE FALTA CARGAR, LO OTRO HAY QUE SACARLO
    }
  },
  methods: {
    register() {
      this.store.register(this.user);
    }
  }
}
</script>

<style scoped>
.principal {
  padding-right: 30px;
  padding-left: 30px;
  background-color: #EBEBEB;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>