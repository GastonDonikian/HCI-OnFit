<template>
  <div>
    <v-card
        class="mx-auto"
        width="344"
        height="200"
        color="#EBEBEB"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 black--text">
            {{ exercise.name }}
            <v-btn @click="deleteExercise(exercise.id)" depressed style="margin-left: 10px" color="red"
                   fab x-small>
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
          </v-list-item-title>
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
            <v-btn
                style="margin-top: 50px"
                rounded
                small
                text
                color="#E46271"
                @click="editEx(exercise.id)"
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
    exercise: {type: Object, required: true}
  },
  methods: {
    async deleteExercise(id) {
      await this.store.deleteExercise(id);
    },
    async editEx(id){
      let ex = await this.store.getExercise(id);
      this.store.name = ex.name;
      this.store.detail = ex.detail;
      if(ex.metadata.duration === null)
        this.store.duration = "";
      else
        this.store.duration = ex.metadata.duration;
      if(ex.metadata.repetitions === null)
        this.store.repetitions = "";
      else
        this.store.repetitions = ex.metadata.repetitions;
      this.store.id = ex.id;
      this.store.edit = true;
      this.store.overlayCreator = true;
    }
  },
}
</script>
export default {}
<style scoped>

</style>