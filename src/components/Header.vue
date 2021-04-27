<template>
  <v-app-bar
      class="header"
      color="rgb(87, 71, 255)"
      max-height="128px"
      app fixed>
    <v-img max-height="120px" max-width="120px" src="../assets/logoOnFit.png"/>
    <v-tabs class="white--text" v-if="!loggedIn">
      <v-tab class="white--text" v-for="tab in tabsLoggedOut" v-bind:key="tab.name" :to="tab.route">
        {{ tab.name }}
        <v-icon class="white--text" right>{{ tab.icon }}</v-icon>
      </v-tab>
      <v-spacer/>
      <v-btn large color="rgb(87, 71, 255)" @click="logIn" depressed dark height="64px">
        Iniciar Sesión
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn large color="rgb(87, 71, 255)" @click="logOut" depressed dark height="64px">
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
export default {
  name: "Header",
  data: () => ({
    key: 0,
    loggedIn: true,//esto se cambia por lo que traiga el api
    tabsLoggedOut: [
      {name: "Menú", icon: null, route: "/Home"}
    ],
    tabsLoggedIn: [
      {name: "Menú", icon: null, route: "/Home"},
      {name: "Crear Rutinas", icon: null, route: "/rutinas"},
      {name: "Mis Rutinas", icon: null, route: "/explore"},
      {name: "Mis Trofeos", icon: null, route: "/trophies"},
      {name: "Mi Perfil", icon: null, route: "/profile"},
    ],
    active: 0,

  }),
  methods: {
    logOut() {
      this.loggedIn = false;
      this.$router.reload();
    },
    logIn() {
      this.loggedIn = true;
      this.$router.reload();
    }
  }
};
</script>

<style scoped>

</style>