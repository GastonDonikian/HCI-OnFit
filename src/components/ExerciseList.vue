<template>
  <div>
    <v-carousel hide-delimiters height="200px">
      <v-carousel-item v-for="exercises in this.exercisesArray" :key="exercises.id">
        <v-row>
          <v-col v-for="exercise in exercises" :key="exercise.id">
            <ExCard style="margin-bottom: 10px"
                    :exercise="exercise"/>
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
      exercisesArray: [],
      emptyExArray:true,
    }
  },
  async created(){
    this.exercisesArray = await this.getDisplayExercises();
    if(this.exercisesArray.length > 1)
      this.emptyExArray=false;
  },

  methods: {
    async getDisplayExercises() {
      let i;
      let exercisesArray = [];
      let exercises = (await ExerciseStore.getAllExercises());
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
      if (innerWidth <= 1050
    )
      return 2;
      if (innerWidth <= 1400)
        return 3;
      return 4;
    },
    async onResize() {
      this.exercisesArray = await this.getDisplayExercises();
    },

    async onChange() {
      this.exercisesArray = await this.getDisplayExercises();
    }


  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    bus.$on('exercisechange', this.onChange);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  }

}
</script>

<style scoped>

</style>