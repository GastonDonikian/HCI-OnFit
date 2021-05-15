<template>
  <v-app>
    <BackgroundImage/>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import LoginStore from "./store/LoginStore";
// import ProfileStore from "./store/ProfileStore";

export default {
  name: 'App',
  store: LoginStore,
  components: {
    BackgroundImage,
    Header
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {

  },
  created() {
    window.location.href = '/#/Home';
    // LoginStore.closeSession();
  }
};
</script>