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
        <v-icon
            v-if="!this.profileStore.availableAvatar"
            size="90">mdi-account</v-icon>
<!--        https://www.famousbirthdays.com/faces/miranda-lin-manuel-image.jpg-->
        <v-img
            v-if="this.profileStore.availableAvatar"
            :src="this.profileStore.userInfo.avatarUrl"
            draggable="false">
        </v-img>
      </v-avatar>
    </v-row>
    <v-list-item-title style="margin-top: 10%" class="headline mb-1">{{this.profileStore.userInfo.firstName.toUpperCase()}}
       {{this.profileStore.userInfo.lastName.toUpperCase()}}</v-list-item-title>
    <v-btn
        v-if="this.routineCount !== 1"
        disabled
        style="background-color:#E46271; margin-top: 5%; color: #EBEBEB !important;"
        rounded
        dark
        large
        text
        min-width="240px"
    >
      {{routineCount}} rutinas creadas
    </v-btn>
    <v-btn
        v-if="this.routineCount === 1"
        disabled
        style="background-color:#E46271; margin-top: 5%; color: #EBEBEB !important;"
        rounded
        dark
        large
        text
        min-width="240px"
    >
      {{routineCount}} rutina creada
    </v-btn>
    <v-btn
        v-if="this.exerciseCount !== 1"
        disabled
        style="background-color:#E46271; margin-top: 5%; color: #EBEBEB !important;"
        rounded
        large
        dark
        text
        min-width="240px"
    ><!--si  pongo el style abajo no funciona bien-->
      {{this.exerciseCount}} ejercicios creados
    </v-btn>
    <v-btn
        v-if="this.exerciseCount === 1"
        disabled
        style="background-color:#E46271; margin-top: 5%; color: #EBEBEB !important;"
        rounded
        large
        dark
        text
        min-width="240px"
    ><!--si  pongo el style abajo no funciona bien-->
      {{this.exerciseCount}} ejercicio creado
    </v-btn>
    <v-btn
        v-if="this.date !== 1"
        disabled
        style="background-color:#E46271; margin-top: 5%; color: #EBEBEB !important;"
        rounded
        large
        dark
        text
        min-width="240px"
    >
      {{this.date}} días entrenando
    </v-btn>
    <v-btn
        v-if="this.date === 1"
        disabled
        style="background-color:#E46271; margin-top: 5%; color: #EBEBEB !important;"
        rounded
        large
        dark
        text
        min-width="240px"
    >
      {{this.date}} día entrenando
    </v-btn>
  </v-card>
</template>

<script>

import ProfileSettings from "../components/ProfileSettings";
import ProfileStore from "../store/ProfileStore";

export default {
  name: "InfoCard.vue",
  components: {ProfileSettings},
  data(){
    return{
      overlaySettings:false,
      profileStore: ProfileStore,
      zIndexSettings:1,
      routineCount: null,
      exerciseCount: null,
      date: null,
    }
  },
  created() {
    this.profileStore.getRoutineCount().then((x) => this.funcioncitaMagica(x));
    this.profileStore.getExerciseCount().then((x) => this.funcioncitaMagica2(x));
    this.profileStore.readUserInfo().then((x) => this.funcioncitaMagica3(x));
  },
  methods : {
    funcioncitaMagica(x) {
      this.routineCount = x;
    },
    funcioncitaMagica2(x) {
      this.exerciseCount = x;
    },
    funcioncitaMagica3(dateOG) {
      let dateMilli = Date.now() - dateOG.date;
      this.date = this.convertMiliseconds(dateMilli);
    },
    convertMiliseconds(miliseconds) {
      var total_hours, total_minutes, total_seconds;

      total_seconds = parseInt(Math.floor(miliseconds / 1000));
      total_minutes = parseInt(Math.floor(total_seconds / 60));
      total_hours = parseInt(Math.floor(total_minutes / 60));
      return parseInt(Math.floor(total_hours / 24));
    }
  }
}
</script>


<style scoped>
</style>
