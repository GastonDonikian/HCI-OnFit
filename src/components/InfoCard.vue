<template>
  <v-card max-width="300px" min-height="450px" align="center" color="#EBEBEB" >
    <v-row>
      <v-spacer></v-spacer>
      <v-btn
          fab
          x-small
          color="#EBEBEB"
          @click="overlaySettings = !overlaySettings"
      >
        <v-icon color="#E46271">mdi-cog</v-icon>
      </v-btn>
      <v-overlay
        :z-index="zIndexSettings" :value="overlaySettings">
        <v-btn
            class="white--text"
            color="#E46271"
            style="margin-bottom:10px"
            @click="overlaySettings = false"
        >
          Salir
        </v-btn>
        <ProfileSettings></ProfileSettings>
      </v-overlay>
    </v-row>
    <v-row justify="center">
      <v-avatar style="margin-top: 5%;border-style: solid; border-color:darkgrey;" size="130">
        <v-img draggable="false">
        </v-img>
      </v-avatar>
    </v-row>
    <v-list-item-title style="margin-top: 5%" class="headline mb-1">NOMBRE</v-list-item-title>
    <v-btn
        disabled
        class="profileButton"
        rounded
        dark
        large
        text
        min-width="240px"
    >
      X rutinas completadas
    </v-btn>
    <v-btn
        color="rgb(87,71,255)"
        disabled
        class="profileButton"
        rounded
        large
        dark
        text
        min-width="240px"
    >
      X trofeos ganados
    </v-btn>
    <v-btn
        disabled
        class="profileButton"
        rounded
        large
        dark
        text
        min-width="240px"
    >
      X días entrenando
    </v-btn>
  </v-card>
</template>

<script>

import ProfileSettings from "../components/ProfileSettings";
export default {
  name: "InfoCard.vue",
  components: {ProfileSettings},
  data(){
    return{
      overlaySettings:false,
      zIndexSettings:1
    }
  }
}
</script>


<style scoped>
.profileButton {
  background-color:#E46271;
  margin-top: 5%;
  color: #EBEBEB !important;
}
</style>
