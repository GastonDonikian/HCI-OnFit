<template>
  <div class ="menu" style="margin-left: 2%" >
    <BackgroundImage2 style="z-index: 0 !important;"></BackgroundImage2>
    <h2 style="z-index: 10 !important;">MIS RUTINAS</h2>

    <RutinCard></RutinCard>

    <h2 style="z-index: 10 !important;">MIS EJERCICIOS</h2>
    <ExCard></ExCard>
  </div>
</template>

<script>
import RutinCard from "../components/RutinCard";
import ExCard from "../components/ExCard";
import BackgroundImage2 from "../components/BackgroundImage2"
export default {
  name: "Rutinas.vue",
  components: {BackgroundImage2, RutinCard, ExCard}

}
</script>
  export default {}
<style scoped>

</style>