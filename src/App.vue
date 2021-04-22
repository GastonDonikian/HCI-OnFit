<template>
  <v-app>
    <BackgroundImage/>
    <Header/>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";

export default {
  name: 'App',

  components: {
    BackgroundImage,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
