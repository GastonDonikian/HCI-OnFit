<template>
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
            {{ exercise.name }}
            <v-btn @click="deleteExercise.deleteExercise(exercise.name)" depressed style="margin-left: 10px" color="red"
                   fab x-small>
<!--TODO ACA NO CONVIENE PASARLE EL ID QUE ES DIRECTGO DEL METODO? EN EL BOTON-->
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
          </v-list-item-title>
<!--          <v-list-item-subtitle class="black&#45;&#45;text">{{ exercise.metadata.repetitions }}</v-list-item-subtitle>-->
<!--          <br>-->
<!--          <v-list-item-subtitle v-if="exercise.metadata.repetitions !== null" class="black&#45;&#45;text">Repeticiones:-->
<!--            x{{ exercise.metadata.repetitions }}-->
<!--          </v-list-item-subtitle>-->
<!--          <v-list-item-subtitle v-if="exercise.metadata.duration !== null" class="black&#45;&#45;text">Duracion: {{-->
<!--              exercise.metadata.duration-->
<!--            }}-->
<!--            s-->
<!--          </v-list-item-subtitle>-->
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
    exercise: {
      id: Number,
      name: String,
      detail: String,
      type: String,
      metadata: {
        repetitions: Number, duration: Number
      }
    }
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