<template>
  <v-app-bar
      class="header"
      color="rgb(87, 71, 255)"
      max-height="128px"
      app fixed>
    <v-img max-height="120px" max-width="120px" src="../assets/logoOnFit.png"/>
    <v-tabs class="white--text" v-if="!store.isLogged()">
      <v-tab class="white--text" v-for="tab in tabsLoggedOut" v-bind:key="tab.name" :to="tab.route">
        {{ tab.name }}
        <v-icon class="white--text" right>{{ tab.icon }}</v-icon>
      </v-tab>
      <v-spacer/>

      <v-btn large color="rgb(87, 71, 255)" @click="iniciarSesion" depressed dark height="64px" >
        Iniciar Sesión
<!--        AGREGUE EL START SESSION ACA PARA ACTUALIZARLO1!!!!-->
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn large color="rgb(87, 71, 255)"  @click="iniciarSesion" depressed dark height="64px">
        Crear Cuenta
        <v-icon>mdi-account-plus-outline</v-icon>
      </v-btn>
    </v-tabs>
    <v-tabs v-else>
      <v-tab v-for="tab in tabsLoggedIn" v-bind:key="tab.name" class="white--text" :to="tab.route">
        {{ tab.name }}
        <v-icon right>{{ tab.icon }}</v-icon>
      </v-tab>
      <v-spacer/>
      <v-btn large color="rgb(87, 71, 255)" @click="logOut" depressed dark height="64px">
        Cerrar Sesión
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-tabs>
  </v-app-bar>
</template>

<script>
import LoginStore from "../store/LoginStore";


export default {
  name: "Header",
  data: () => ({
    key: 0,
    store : LoginStore,
    loggedIn: LoginStore.loggedIn,//esto se cambia por lo que traiga el api
    tabsLoggedOut: [
    ],
    tabsLoggedIn: [
      {name: "Mis Rutinas", icon: null, route: "/Rutinas"},
      {name: "Explorar", icon: null, route: "/Explore"},
      {name: "Mis Trofeos", icon: null, route: "/Logros"},
      {name: "Mi Perfil", icon: null, route: "/profile"},
    ],
    active: 0,

  }),
  methods: {
    logOut() {
      window.location.href = '/#/Home';
      return LoginStore.closeSession();
    },
    iniciarSesion() {
      window.location.href = '/#/LogIn';
    }
  },
};
</script>

<style scoped>

</style>