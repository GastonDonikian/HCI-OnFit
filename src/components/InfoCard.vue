<template>
  <v-card max-width="300px" min-height="450px" align="center">
    <v-row>
      <v-spacer></v-spacer>
      <v-btn
          fab
          x-small
          color="#EBEBEB"
      ><v-icon color="#E46271"
      >mdi-cog</v-icon>
      </v-btn>
    </v-row>
    <v-row justify="center">
      <v-avatar @click="editAvatar" style="margin-top: 5%;border-style: solid; border-color:darkgrey;" size="130">
        <v-img draggable="false"
               @load="viewImg">
        </v-img>
      </v-avatar>
    </v-row>
    <v-list-item-title style="margin-top: 5%" class="headline mb-1">NOMBRE</v-list-item-title>
    <v-btn
        class="profileButton"
        rounded
        large
        dark
        text
        min-width="240px"
        background-color="#E46271"
    >
      X rutinas completadas
    </v-btn>
    <v-btn
        class="profileButton"
        rounded
        large
        dark
        text
        min-width="240px"
        background-color="#E46271"
    >
      X trofeos ganados
    </v-btn>
    <v-btn
        class="profileButton"
        rounded
        large
        dark
        text
        min-width="240px"
        background-color="#E46271"
    >
      X días entrenando
    </v-btn>
    <v-icon color="black">mdi-account-plus-outlin</v-icon>
  </v-card>
</template>

<script>

export default {
  name: "InfoCard"
}
</script>

<style scoped>
.profileButton {
  background-color:#E46271;
  margin-top: 5%;
  color: #EBEBEB !important;
  opacity: 1 !important;
}
</style>