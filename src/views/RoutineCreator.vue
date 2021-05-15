<template>
  <div>
    <v-row>
      <v-col>
        <v-spacer/>
        <CreateRoutineCard style="margin-top: 50px"></CreateRoutineCard>
      </v-col>
      <v-col>
        <AddExCard style="position: fixed; margin-top: 50px" v-if="store.popup"></AddExCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CreateRoutineCard from "../components/CreateRoutineCard";
import AddExCard from "../components/AddExCard";
import CreateRoutineStore from "../store/CreateRoutineStore";
export default {
  name: "RoutineCreator",
  components: {AddExCard, CreateRoutineCard},
  data() {
    return{
      store: CreateRoutineStore
    }
  }
}
</script>

<style scoped>

</style>