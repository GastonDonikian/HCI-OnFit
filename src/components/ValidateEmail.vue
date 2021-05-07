<template>
  <div style="width: 600px">
  <v-col>
    <h2>Por favor confirme su cuenta</h2>
  <v-card style="background-color: #EBEBEB" align="center">
    <form align = "center">
      <v-text-field
          class="principal"
          v-model="email"
          outlined
          background-color="#FFFFFF"
          label ="Mail"
          placeholder="usuario@ejemplo.com"
      ></v-text-field>
      <v-text-field
          class="principal"
          v-model="code"
          outlined
          background-color="#FFFFFF"
          label ="Código"
      ></v-text-field>
      <v-row >
        <v-col>
        <v-btn
          @click="this.submit"
          class="white--text" rounded large color="#E77381">Confirmar
        </v-btn>
        </v-col>
        <v-col>
        <v-btn
          class="white--text"
          rounded large color="#E77381"
          @click="this.resend">Reenviar código
        </v-btn>
        </v-col>
      </v-row>
    </form>
  </v-card>
    </v-col>
  </div>
</template>

<script>
import LoginStore from "../store/LoginStore";
import RegisterForm from "./RegisterForm";

export default {
  name: "ValidateEmail",
  data: () => ({
    store: LoginStore,
    email: RegisterForm.data().email,
    code: '',
  }),
  methods: {
    submit() {
      if (this.store.validateEmail(this.email, this.code)) {
        console.log('validaste correctamente tus datos');
        //ME TIENE QUE MANDAR A EXPLORAR
        window.location.href = '/#/Rutinas'

      } else {
        alert('Something went wrong...');
        window.location.href = '/#/validarEmail'
      }
    },
    resend() {
      this.store.resendEmail(this.email);
      this.email = '';
      this.code = '';
    }
  }
}
</script>

<style scoped>
.principal{
  padding-top: 25px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 5px;
}
</style>