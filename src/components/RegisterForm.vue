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
            v-model="firstName"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 class="pa-1">
        <v-text-field
            label="Apellido"
            chips
            placeholder="Campos"
            outlined
            v-model="lastName"
            background-color="#FFFFFF"
            multiple
        >
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-text-field outlined background-color="#FFFFFF" label="Mail" v-model="email" placeholder="usuario@ejemplo.com"></v-text-field>
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
        v-model="checkPassword"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'"
        name="input-10-1"
        @click:append="show2 = !show2">
    </v-text-field>
    <v-btn color="#E77381" class="white--text" @click="this.register" rounded large>Registrarse</v-btn>

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
      checkPassword:"",
      password: "",
      firstName: "",
      lastName: "",
      gender: "",
      birthdate: 0,
      email: "",
      username: "null",
      phone: "",
      avatarUrl: "",
      metadata: "null",
      user:{
        firstName:"",
        username:"",
        password:"",
        lastName:"",
        email:"",
        gender: "male",
        birthdate: 0,
        phone: "",
        avatarUrl: "",
        metadata: null
      },
    }

  },
  methods: {
    register() {
      this.setUserName();
      this.setUser();
      this.store.register(this.user);
      window.location.href = '/#/validarEmail'
    },
    setUserName() {
      this.username = this.email
    },
    setUser(){
      this.user.firstName=this.firstName;
      this.user.username=this.username;
      this.user.password=this.password;
      this.user.lastName=this.lastName;
      this.user.email=this.email;
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