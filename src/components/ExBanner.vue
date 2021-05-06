<template>
  <div style="padding: 0 2% 2% 2%">
    <v-card
        outlined
        rounded
        style="outline-color: black"
        height="60px"
    >
      <v-row style="align-items: baseline">
        <v-col
            cols="8"
            sm="1"
            lg="7"
            style="margin-left: 5px"
        >{{nombreejercicio}}
        </v-col>
        <v-col
            align="right"
        >
          <v-btn
          fab
          depressed
          tile
          @click="deleteEx">
            <v-icon
                color="#5767FF"
            >mdi-trash-can-outline
            </v-icon>
          </v-btn>
        </v-col>

      </v-row>
    </v-card>
  </div>
</template>

<script>
import CreateRoutineStore from "../store/CreateRoutineStore";

export default {
  name: "ExBanner",
  data() {
    return{
      store: CreateRoutineStore
    }
  },
  props: {
    nombreejercicio: String,
    category: String,
  },
  methods:{
    deleteEx(){
      this.store.remove(this.nombreejercicio, this.category)
    }
  }
}
</script>

<style scoped>

</style>