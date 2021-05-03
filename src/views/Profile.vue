<template>
  <div align="center" style="margin-left: 2%; margin-top: 5%" >
    <InfoCard></InfoCard>
  </div>
</template>

<script>
import InfoCard from "../components/InfoCard";
export default {
  name: "Profile.vue",
  components: {InfoCard},
  sideBarFlag: false,
  data: () => ({
    key: 0,
    sideBarFlag: false,
    loggedIn: true,//esto se cambia por lo que traiga el api
    tabsLoggedOut: [
      {name: "Menú", icon: null, route: "/Home"}
    ],
    tabsLoggedIn: [
      {name: "Menú", icon: null, route: "/Home"},
      {name: "Crear Rutinas", icon: null, route: "/Rutinas"},
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
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    toggleSideBar() {
      console.log("hola");
    },
  }
}
</script>

<style scoped>
.main {
  margin: auto;
}
</style>