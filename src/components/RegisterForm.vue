<template>
  <v-card class="principal" max-width="450px" style="border-radius: 25px;">
    <h3>REGISTRARSE</h3>
    <v-layout wrap>
      <v-flex xs12 sm6 class="pa-1">
        <p style="color: red; margin-left: 2%"  v-if="checkFirstNameFlag">Nombre no valido</p>
        <v-text-field
            label="Nombre"
            outlined
            background-color="#FFFFFF"
            placeholder="Maria Luisa"
            v-model="firstName"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 class="pa-1">
        <p style="color: red; margin-left: 2%"  v-if="checkLastNameFlag">Apellido no valido</p>
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
    <p style="color: red; margin-left: 2%"  v-if="checkMailFlag">Mail no valido</p>
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
    <p style="color: red; margin-left: 2%"  v-if="checkPasswordFlag">No coinciden las contraseñas</p>
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
      funciona: true,
      show1: false,
      show2: false,
      checkPassword:"",
      checkPasswordFlag: false,
      checkMailFlag: false,
      checkFirstNameFlag: false,
      checkLastNameFlag: false,
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
        gender: "other",
        birthdate: 0,
        phone: "",
        avatarUrl: "",
        metadata: null
      },
    }

  },
  methods: {
    register() {
      if (!this.validations()) {
        return
      }
      this.setUserName();
      this.setUser();
      this.store.register(this.user);
      this.checkPasswordFlag = false;
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
    },
    validations() {
      if (!this.checkPasswords()) {
        this.checkPasswordFlag = true;
      } else {
        this.checkPasswordFlag = false;
      }
      if (!this.checkMail()) {
        this.checkMailFlag = true;
      } else {
        this.checkMailFlag = false;
      }
      if (!this.checkFirstName()) {
        this.checkFirstNameFlag = true;
      } else {
        this.checkFirstNameFlag = false;
      }
      if (!this.checkLastName()) {
        this.checkLastNameFlag = true;
      } else {
        this.checkLastNameFlag = false;
      }
      return !this.checkMailFlag && !this.checkPasswordFlag
          && !this.checkFirstNameFlag && !this.checkLastNameFlag;
    },
    checkPasswords() {
      return this.password == this.checkPassword;
    },
    checkMail() {
      let emailArray = this.email.split("");
      let countOcc = 0;
      for (let i = 0; i < emailArray.length; i++) {
        if (emailArray[i] == "@") {
          countOcc++;
        }
      }
      return countOcc == 1 && emailArray[0] != "@" && emailArray[emailArray.length - 1] != "@";
    },
    checkFirstName() {
      return this.firstName != "";
    },
    checkLastName() {
      return this.lastName != "";
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
