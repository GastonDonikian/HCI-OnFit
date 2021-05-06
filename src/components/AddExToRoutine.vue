<template>
  <div style="padding: 0 2% 0 2%">
    <v-btn
        block
        outlined
        rounded
        height="60px"
        @click="store.activate(seccion)"
    ><v-icon
        color="#E46271"
    >mdi-plus-circle</v-icon></v-btn>
  </div>
</template>

<script>
import CreateRoutineStore from "../store/CreateRoutineStore";
export default {
  name: "AddExToRoutine",
  data(){
    return {
      store: CreateRoutineStore
    }
  },
  props: {
    seccion : String
  }
}
</script>

<style scoped>

</style>