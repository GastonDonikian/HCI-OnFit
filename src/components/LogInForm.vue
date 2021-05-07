<template>
  <v-card width="570px" max-height="350px" class="principal" style="background-color: #EBEBEB; border-radius: 25px;">
    <h3>INICIAR SESIÓN</h3>
    <v-text-field
        v-model="userName"
        outlined
        background-color="#FFFFFF"
        label ="Mail"
        placeholder="usuario@ejemplo.com">
    </v-text-field>
    <v-text-field
        background-color="#FFFFFF"
        outlined
        label="Contraseña"
        v-model="userPassword"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        @click:append="show1 = !show1">
    </v-text-field>
    <v-checkbox
        v-model="remindMe"
        :label="`Recuerdame`"
    ></v-checkbox>
    <v-btn color="#E77381" class="white--text" rounded large @click="arrancaElBaile">Ingresar</v-btn>
  </v-card>
</template>


<script>
import LoginStore from "../store/LoginStore";

export default {
  data: () => ({
    name: "LogInForm",
    userName: "",
    userPassword: "",
    store: LoginStore,
    remindMe: false,
    show1: false
  }),
  methods: {
    arrancaElBaile() {
      //Es lo mismo que hacer :to rutinas solo que desde javascript
      if (this.userName === "0" || this.userPassword === "0") {
        // Tambien habria que checkear que no use el caracter '|' que se rompe toda la pagina
        return null;
      }
      if (this.remindMe) {
        //  Aca tendria que guardarse la informacion para proximas sesiones
        //  Podria hacer que si no hace el save en local storage lo haga en session storage,
        //  pero me parece redundante ya que puedo usar directamente las variables de LoginStore
        this.store.save() ;
      }
      this.store.startSession(this.userName,this.userPassword);
      window.location.href = '/#/Rutinas';
    }
  }
}
</script>

<style scoped>
.principal {
  padding-top: 15px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 50px;
  padding-bottom: 15px;
}
</style>