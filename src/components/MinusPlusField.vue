<template>
  <div>
    <v-btn
      icon
      color="#E46271"
      @click="decrement"
      small
      style="display: inline-block"
  ><v-icon
        small
    >mdi-minus</v-icon>
  </v-btn>
    <v-text-field v-model= "foo" label="Series" style="display: inline-block; width: 40px" align="center"></v-text-field>
    <v-btn
        icon
        color="#E46271"
        small
        @click="increment"
    >
      <v-icon
          small
      >mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "MinusPlusField",
  data: () => ({
    foo: 1
  }),
  methods: {
    increment () {
      this.foo = parseInt(this.foo,10) + 1
    },
    decrement () {
      if (this.foo === 1)
        return
      this.foo = parseInt(this.foo,10) - 1
    }
  }
}
</script>

<style scoped>

</style>