<template>
  <v-col>
  <v-card style="background-color: #EBEBEB; width: 600px" align="center">
    <h2>Por favor confirme su cuenta</h2>
    <form align = "center">
        <v-row wrap>
      <v-text-field
          class="principal"
          v-model="email"
          outlined
          background-color="#FFFFFF"
          label ="Mail"
          placeholder="usuario@ejemplo.com"
      ></v-text-field>
        </v-row>
        <v-row>
      <v-text-field
          class="principal"
          v-model="code"
          outlined
          background-color="#FFFFFF"
          label ="Código"
      ></v-text-field>
        </v-row>
      <p style="color: red" v-if="wrongCode">Código incorrecto</p>
      <p style="color: red" v-if="wrongMail">Mail incorrecto</p>
      <v-row >
          <v-flex xs12 sm6 class="pa-1">
        <v-btn
          @click="this.submit"
          class="white--text" rounded large color="#E77381">Confirmar</v-btn>
          </v-flex>
            <v-flex xs12 sm6 class="pa-1">
        <v-btn
          class="white--text"
          rounded large color="#E77381"
          @click="this.resend">Reenviar código</v-btn>
        </v-flex>
      </v-row>
    </form>
  </v-card>
    </v-col>
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
    wrongCode:false,
    wrongMail:false,
  }),
  methods: {
    async submit() {
      this.wrongCode=false;
      this.wrongMail=false;
      await this.store.validateEmail(this.email, this.code);
      if(this.store.connect){
        console.log('validaste correctamente tus datos');
        window.location.href = '/#/Rutinas'
        this.store.loggedIn=true;

        return;
      }
        window.location.href = '/#/validarEmail'
        this.store.authorized=false;
        if(!this.store.correctCode){
          this.wrongCode=true;
        }
        if(!this.store.found) {
          this.wrongMail = true;
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