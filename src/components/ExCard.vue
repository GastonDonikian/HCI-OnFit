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


<!--          <v-list-item-title class="headline mb-1 black&#45;&#45;text">-->
<!--            {{ exercise.name }}-->
<!--            <v-btn @click="deleteExercise(exercise.id)" depressed style="margin-left: 10px" color="red"-->
<!--                   fab x-small>-->
<!--              &lt;!&ndash;              TODO: ¿Porque me tira un unathorized cuando refresheo esta parte y no con Routine?&ndash;&gt;-->
<!--              &lt;!&ndash;              TODO ¿PREGUNTAR COMO HACER ESTO SIN EL PROPERTY NULL, ERROR QUE TIRA&ndash;&gt;-->
<!--              &lt;!&ndash;              TODO: Sacar errores de consola&ndash;&gt;-->
<!--              <v-icon>mdi-delete-outline</v-icon>-->
<!--            </v-btn>-->
          <!--          </v-list-item-title>-->
          <v-container style="max-width: 1200px">
            <v-row>
              <v-col>
                <span class="headline mb-1 black--text" >
<!--                  TODO: Habria que hacer una validacion para que exercise.name sea menos de una cierta cantida de-->
<!--                  TODO: caracteres, porque sino se me rompe toda la carta-->
                  {{ exercise.name }}
                </span>
              </v-col>
              <v-col>
                <v-btn @click="deleteExercise(exercise.id)" depressed style="margin-left: 10px" color="red"
                       fab x-small>
                  <!--              TODO: ¿Porque me tira un unathorized cuando refresheo esta parte y no con Routine?-->
                  <!--              TODO ¿PREGUNTAR COMO HACER ESTO SIN EL PROPERTY NULL, ERROR QUE TIRA-->
                  <!--              TODO: Sacar errores de consola-->
                  <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>


          <v-list-item-subtitle class="black--text">{{ exercise.detail }}</v-list-item-subtitle>
          <br>
          <v-list-item-subtitle v-if="exercise.metadata !==null && exercise.metadata.repetitions !== null" class="black--text">Repeticiones:
            x{{ exercise.metadata.repetitions }}
          </v-list-item-subtitle>
          <v-list-item-subtitle v-if="exercise.metadata !==null && exercise.metadata.duration !== null" class="black--text">Duracion: {{
              exercise.metadata.duration
            }}
            s
          </v-list-item-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
<!--            <v-btn-->
<!--                style="margin-top: 50px; position: fixed !important;"-->
<!--                rounded-->
<!--                small-->
<!--                text-->
<!--                color="#E46271"-->

<!--            >-->
<!--              Editar ejercicio-->
<!--            </v-btn>-->
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>


    </v-card>
    <v-btn
        class="botonEditarRutina"
        rounded
        small
        text
        color="#E46271"
    >
      Editar ejercicio
    </v-btn>
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
    async deleteExercise(id) {
      console.log(this.exercise);
      await this.store.deleteExercise(id);
    }
  },
}
</script>
export default {}
<style scoped>
.botonEditarRutina {
  margin-top: 50px;
  position: fixed !important;
  margin-left: 240px;
  margin-top: -35px;
}
</style>