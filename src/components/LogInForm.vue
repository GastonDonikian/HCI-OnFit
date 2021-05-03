<template>
  <v-card width="570px" max-height="412px" class="principal" style="background-color: #EBEBEB; border-radius: 25px;">
    <h3>INICIAR SESIÓN</h3>
    <p>MAIL</p>
    <v-text-field v-model="userName" outlined background-color="#FFFFFF" label="usuario@ejemplo.com"></v-text-field>
    <p>CONTRASEÑA</p>
    <v-text-field
        background-color="#FFFFFF"
        outlined
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
    userName: null,
    userPassword: null,
    store: LoginStore,
    remindMe: false
  }),
  methods: {
    arrancaElBaile() {
      //Es lo mismo que hacer :to rutinas solo que desde javascript
      if (this.userName == null || this.userPassword == null) {
        // Tambien habria que checkear que no use el caracter '|' que se rompe toda la pagina
        return null;
      }
      this.store.setUserName(this.userName);
      this.store.setUserPassword(this.userPassword);
      if (this.remindMe) {
        //  Aca tendria que guardarse la informacion para proximas sesiones
        //  Podria hacer que si no hace el save en local storage lo haga en session storage,
        //  pero me parece redundante ya que puedo usar directamente las variables de LoginStore
        this.store.save() ;
      }
      this.store.startSession();
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