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
            cols="9"
            sm="1"
            lg="7"
            style="margin-left: 5px"
        >NAME</v-col>
        <v-col
            align="right"

        ><v-icon
              color="#5767FF"
          >mdi-trash-can-outline</v-icon>
        </v-col>
        <v-col>
          <MinusPlusField></MinusPlusField>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import MinusPlusField from "./MinusPlusField";
export default {
  name: "ExBanner",
  components: {MinusPlusField}
}
</script>

<style scoped>

</style>