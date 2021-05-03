<template>
  <v-card max-width="300px" min-height="450px" color="#EBEBEB">
    <div align="left" style="color: #E46271"><s2>CONFIGURACIÓN</s2></div>
    <v-avatar @click="editAvatar" style="margin-top: 5%;border-style: solid; border-color:darkgrey;" size="50">
      <v-img draggable="false"
             @load="viewImg">
      </v-img>
    </v-avatar>
    <s1 style="color: black">David Visbal</s1>
    <v-icon style="color: black">mdi-account-edit</v-icon>
    <v-btn
      class="settingsButton"
      rounded
      large
      dark
      text
      min-width="240px"
      >
      <v-icon>mdi-key-variant</v-icon>
      Cambiar Contraseña
    </v-btn>
    <v-btn
        class="settingsButton"
        rounded
        large
        dark
        text
        min-width="240px"
    >
      <v-icon>mdi-bell</v-icon>
      Notificación
    </v-btn>
    <v-btn
        class="settingsButton"
        rounded
        large
        dark
        text
        min-width="240px"
    >
      <v-icon>mdi-hand-right</v-icon>
      Accesibilidad
    </v-btn>
    <v-btn
        class="settingsButton"
        rounded
        large
        dark
        text
        min-width="240px"
    >
      <v-icon>mdi-translate</v-icon>
      Idioma
    </v-btn>
    <v-btn
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
    <v-btn
        class="settingsButton"
        rounded
        large
        dark
        text
        min-width="240px"
    >
      <v-icon>mdi-delete</v-icon>
      Eliminar cuenta
    </v-btn>
  </v-card>
</template>

<script>


</script>

<style scoped>
.settingsButton {
  background-color:white;
  margin-top: 5%;
  color: black !important;
  opacity: 1 !important;
}
</style>