<template>
  <v-app>
    <BackgroundImage/>
    <Header/>
    <v-btn
        height="300"
        style="margin-top: 70px; margin-left: 5%"
        width="500">
      <v-img
          height="300"
          width="500"
          src="./assets/logoOnFit.png"
      ></v-img>
    </v-btn>
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
