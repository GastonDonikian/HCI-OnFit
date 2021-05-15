<template>
<div align="center">
  <VerRutina :to-explore="this.store.fromExplore"></VerRutina>
</div>
</template>

<script>

import VerRutina from "../components/VerRutina";
import RoutineStore from "../store/RoutineStore";
export default {
  name: "ViewRoutine",
  components: {VerRutina},
  data: ()=> ({
    store: RoutineStore,
  })
}
</script>

<style scoped>

</style>