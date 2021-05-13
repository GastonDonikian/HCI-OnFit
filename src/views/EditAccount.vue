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

    <v-row>
      <v-col>
        <h3 class="titleText">Cambiar foto de perfil</h3>
      </v-col>
      <v-col style="margin-right: 65%">
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-icon size="25"
                v-bind="attrs"
                v-on="on"
                color="#E77381"
            >
              mdi-help-circle-outline
            </v-icon>
          </template>
          <span>
            La imagen debe ser cuadrada. De no insertar un link, se borrara la foto de perfil actual
          </span>
        </v-tooltip>
      </v-col>
    </v-row>

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
import ProfileStore from "../store/ProfileStore";

export default {
  data: () => ({
    name: "LogInForm",
    firstName: "",
    lastName: "",
    avatarImage: "",
    error_first_name: false,
    error_last_name: false,
    error_avatar_image: false,
    loginStore: LoginStore,
    profileStore: ProfileStore,
  }),
  methods: {
    exit() {
      window.location.href = '/#/Profile'
    },
    saveInfo() {
      // this.validations();
      const userInfo = {
        firstName: this.firstName == "" ? this.profileStore.userInfo.firstName : this.firstName,
        lastName: this.lastName == "" ? this.profileStore.userInfo.lastName : this.lastName,
        gender: "male",
        birthdate: 284007600000,
        phone: "98295822",
        // avatarUrl: this.avatarUrl == "" ? this.profileStore.userInfo.avatarUrl : this.avatarUrl,
        avatarUrl: this.avatarImage,
        metadata: null
      }
      this.profileStore.modifyAccount(userInfo).then(x => this.setUserInfoValues(x));
      if (this.avatarImage === undefined || this.avatarImage === "") {
        console.log("no hay foto para mostrar");
        this.profileStore.availableAvatar = false;
      } else {
        console.log("hay foto para mostrar");
        this.profileStore.availableAvatar = true;
      }
      window.location.href = "/#/profile";
    },
    setUserInfoValues(newUserInfo) {
      this.profileStore.userInfo = newUserInfo
      console.log(this.profileStore.userInfo.avatarUrl);
    },

    // Esta de mas la funcion validations pero como estuve tanto tiempo haciendola le agarre cariño y no la pienso borrar
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