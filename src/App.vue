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