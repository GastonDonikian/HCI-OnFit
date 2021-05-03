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

export default {
  name: 'App',
  store: LoginStore,
  components: {
    BackgroundImage,
    Header
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {

  },
  computed: {

  },
  beforeCreate() {
    if (localStorage.getItem('item') === null) {
      window.location.href = '/#/Home';
    }
    console.log("paso algo?");
    this.store.startSession();
  }
};
</script>