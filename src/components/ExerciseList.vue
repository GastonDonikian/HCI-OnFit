<template>
  <div>
    <v-carousel hide-delimiters height="200px">
      <v-carousel-item v-for="(exercises) in exercisesArray" :key="exercises">
        <v-row>
          <v-col v-for="exercise in exercises" :key="exercise.id">
            <ExCard style="margin-bottom: 10px"
                    v-bind:exercise="exercise"/>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import ExerciseStore from "../store/ExerciseStore";
import ExCard from "./ExCard";
import {bus} from "../main";

export default {
  name: "ExerciseList",
  components: {ExCard},
  data: function () {
    return {
      store: ExerciseStore,
      exercisesArray: this.getDisplayExercises()
    }
  },
  methods: {
    getDisplayExercises() {
      let i;
      let exercisesArray = [];
      let exercises = ExerciseStore.getAllExercises();
      let listSize = this.getListSize();
      for (i = 0; i + listSize < exercises.length; i += listSize) {
        exercisesArray.push(exercises.slice(i, i + listSize));
      }
      exercisesArray.push(exercises.slice(i));
      return exercisesArray;
    },
    getListSize() {
      if (innerWidth <= 750)
        return 1;
      if (innerWidth <= 1050)
        return 2;
      if (innerWidth <= 1400)
        return 3;
      return 4;
    },
    onResize() {
      this.exercisesArray = this.getDisplayExercises();
    },

    onChange() {
      this.exercisesArray = this.getDisplayExercises();
    }


  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    bus.$on('exercisechange',this.onChange);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  }

}
</script>

<style scoped>

</style>