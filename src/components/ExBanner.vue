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
          tile>
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
export default {
  name: "ExBanner",
  props: {
    nombreejercicio: String,
  },
  components: {}
}
</script>

<style scoped>

</style>