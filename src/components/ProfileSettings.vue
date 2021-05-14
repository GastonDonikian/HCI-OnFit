<template>
  <v-card max-width="300px" min-height="250px" color="#EBEBEB" style="padding: 30px; border-radius: 5px">
    <div align="left" style="color: #E46271">
      <h3>CONFIGURACIÓN</h3>
    </div>
<!--    <v-avatar  style="margin-top: 5%; border-style: solid; border-color:darkgrey;" size="50">-->
<!--      <v-img draggable="false"-->
<!--             @load="viewImg">-->
<!--      </v-img>-->
<!--    </v-avatar>-->

    <v-btn @click="editAvatar"
      class="settingsButton"
      rounded
      large
      dark
      text
      min-width="240px"
      >
      <v-icon>mdi-account-edit</v-icon>
      Editar Cuenta
    </v-btn>
    <v-btn @click="closeSession"
        class="settingsButton"
        rounded
        large
        dark
        text
        min-width="240px"
    >
      <v-icon>mdi-logout</v-icon>
      Cerrar sesión
    </v-btn>
    <v-btn @click="deleteAccount"
        class="settingsButton"
        rounded
        large
        dark
        text
        min-width="240px"
    >
      <v-icon>mdi-delete</v-icon>
      Eliminar Cuenta
    </v-btn>
  </v-card>
</template>

<script>

import ProfileStore from "../store/ProfileStore";
import LoginStore from "../store/LoginStore";

export default {
  name: "ProfileSettings.vue",
  data(){
    return {
      profileStore: ProfileStore,
      loginStore: LoginStore,
    }
  },
  methods: {
    closeSession() {
      window.location.href = '/#/Home';
      this.loginStore.closeSession();
    },
    deleteAccount() {
      window.location.href = '/#/Home';
      this.profileStore.deleteAccount();
    },
    editAvatar() {
      console.log(this.profileStore.userInfo.firstName);
      window.location.href='/#/EditAccount';
    },
  }
}
</script>

<style scoped>
.settingsButton {
  background-color:white;
  margin-top: 5%;
  color: black !important;
  opacity: 1 !important;
}
</style>