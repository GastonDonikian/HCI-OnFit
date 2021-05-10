<template>
  <div>
    <v-btn
        icon
        color="#E46271"
        @click="decrement"
        small
        style="display: inline-block"
    >
      <v-icon
          small
      >mdi-minus
      </v-icon>
    </v-btn>
    <v-text-field  v-model="foo" label="Series" style="display: inline-block; width: 40px" align="center"></v-text-field>
    <v-btn
        icon
        color="#E46271"
        small
        @click="increment"
    >
      <v-icon
          small
      >mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import CreateRoutineStore from "../store/CreateRoutineStore";

export default {
  name: "MinusPlusField",
  props: {
    seccion: String
  },
  data: () => ({
    foo: 1,
    store: CreateRoutineStore
  }),
  methods: {
    increment() {
      this.foo = parseInt(this.foo, 10) + 1;
      this.setSeriesRepetition(this.foo);

    },
    decrement() {
      if (this.foo === 1)
        return
      this.foo = parseInt(this.foo, 10) - 1;
      this.setSeriesRepetition(this.foo);
    },
    setSeriesRepetition(number) {
      if (this.seccion === "entradaEnCalor") {
        this.store.tempRoutine.repeticionesEntradaEnCalor = number;
        console.log(this.store.tempRoutine.repeticionesEntradaEnCalor);
      }
      else if (this.seccion === "principal")
        this.store.tempRoutine.repeticionesPrincipal = number;
      else
        this.store.tempRoutine.repeticionesElongacion = number;
    },
  }
}
</script>

<style scoped>

</style>