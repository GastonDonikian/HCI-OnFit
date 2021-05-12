<template>
  <div style="padding-left: 5%; padding-top: 2%">
    <h1 style="padding-bottom: 30px">Editar Cuenta</h1>
    <h3 class="titleText">Cambiar nombre</h3>
    <v-text-field class="inputField"
        v-model="firstName"
        outlined
        background-color="#FFFFFF"
        placeholder="Luis">
    </v-text-field>
    <p v-if="this.error_first_name" class="errorText">Nombre invalido</p>
    <h3 class="titleText">Cambiar apellido</h3>
    <v-text-field class="inputField"
                  v-model="lastName"
                  outlined
                  background-color="#FFFFFF"
                  placeholder="Spinetta">
    </v-text-field>
    <p v-if="this.error_last_name" class="errorText">Apellido invalido</p>
    <h3 class="titleText">Cambiar foto de perfil</h3>
    <v-text-field class="inputField"
                  v-model="avatarImage"
                  outlined
                  background-color="#FFFFFF"
                  placeholder="https://flic.kr/p/3ntH2u">
    </v-text-field>
    <p v-if="this.error_avatar_image" class="errorText">Link invalido</p>
    <v-btn color="#E77381" class="white--text" rounded large @click="exit" style="margin-right: 20px">Salir</v-btn>
    <v-btn color="#E77381" class="white--text" rounded large @click="saveInfo">Aceptar Cambios</v-btn>
  </div>
</template>


<script>

import LoginStore from "../store/LoginStore";

export default {
  data: () => ({
    name: "LogInForm",
    firstName: "",
    lastName: "",
    avatarImage: "",
    error_first_name: false,
    error_last_name: false,
    error_avatar_image: false,
    store: LoginStore,
  }),
  methods: {
    exit() {
      window.location.href = '/#/Profile'
    },
    saveInfo() {
      this.validations();
    },
    validations() {
      if (this.firstName == null || this.firstName == "") {
        this.error_first_name = true;
      } else {
        this.error_first_name = false;
      }
      if (this.lastName == null || this.lastName == "") {
        this.error_last_name = true;
      } else {
        this.error_last_name = false;
      }
      if (!this.isValidAvatarUrl()) {
        this.error_avatar_image = true;
      } else {
        this.error_avatar_image = false;
      }
      return !this.error_first_name && !this.error_last_name
          && !this.error_avatar_image;
    },
    // https://flic.kr/p/3ntH2u
    isValidAvatarUrl() {
      let flickrSubstring = this.avatarImage.substring(0,16);
      return flickrSubstring == "https://flic.kr/";
    }
  }
}
</script>

<style>
.inputField {
  max-width: 300px;
}
.titleText {
  padding-bottom: 5px;
}
.errorText {
  color: red;
  margin-top: -20px;
}
</style>