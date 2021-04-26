<template>
  <v-app>
    <BackgroundImage/>
    <Header/>
    <v-btn
        height="300"
        style="margin-top: 10%; margin-left: 5%"
        width="600">
      <v-img
          height="300"
          width="600"
          src="./assets/logoOnFit.png"
      ></v-img>
    </v-btn>
  </v-app>
</template>

<script>
import header from "../components/Header";

export default {
  name: "Home",
  components: {header}
}
</script>

<style scoped>

</style>