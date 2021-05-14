<template>
  <div>
    <v-card class="mx-auto"
            width="344"
            height="200"
            color="#EBEBEB" style="align-content: center">
      <v-btn plain  @click="store.overlayCreator = !store.overlayCreator" style="color: #EBEBEB" class="vCard">
        <v-icon color="#E46271" size="175" style="border: 1px">mdi-plus-circle</v-icon>
      </v-btn>
    </v-card>

  </div>
</template>

<script>
import ExerciseStore from "../store/ExerciseStore";

export default {
  name: "PlusCardExcercise",
  data(){
    return {
      store: ExerciseStore
    }
  }
}
</script>

<style scoped>
.vCard{
  margin: 24% 0 20% 19%;
}
</style>