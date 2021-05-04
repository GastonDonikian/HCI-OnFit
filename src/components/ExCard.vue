<template :key="">
  <div>
    <v-card
        class="mx-auto"
        width="344"
        height="200"
        color="#EBEBEB"
    ><!--color cambia con la API-->
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 black--text">
            {{ exercise.titulo }}
            <v-btn @click="deleteExercise.deleteExercise(exercise.titulo)" depressed style="margin-left: 10px" color="red"
                   fab x-small>
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
          </v-list-item-title>
          <v-list-item-subtitle class="black--text">{{ exercise.description }}</v-list-item-subtitle>
          <br>
          <v-list-item-subtitle v-if="exercise.repetitions !== null" class="black--text">Repeticiones:
            x{{ exercise.repetitions }}
          </v-list-item-subtitle>
          <v-list-item-subtitle v-if="exercise.duration !== null" class="black--text">Duracion: {{
              exercise.duration
            }}
            s
          </v-list-item-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                style="margin-top: 50px"
                rounded
                small
                text
                color="#E46271"
            >
              Editar ejercicio
            </v-btn>
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>

    </v-card>
  </div>
</template>

<script>
import ExerciseStore from "../store/ExerciseStore";

export default {
  name: "ExCard",
  data: function () {
    return {
      store: ExerciseStore,
    };
  },
  props: {
    exercise: {title: String, description: String, repetitions: Number, duration: Number}
  },
  methods: {
  },
  computed : {
    deleteExercise() {
      return ExerciseStore;
    }
  }
}
</script>
export default {}
<style scoped>

</style>