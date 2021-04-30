<template>
  <div>
  <v-card
      class="mx-auto"
      max-width="344"
      min-height="170"
      color="#EBEBEB"
      style="opacity: 0.8"
  ><!--color cambia con la API-->
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        <v-card-actions >
          <v-spacer></v-spacer>
          <v-btn
              style="margin-top: 50px"
              rounded
              small
              text
              color="#E46271"
          >
            Ver ejercicio
          </v-btn>
        </v-card-actions>
      </v-list-item-content>
    </v-list-item>

  </v-card>
  </div>
</template>

<script>
export default {
  name: "ExCard.vue"
}
</script>
export default {}
<style scoped>

</style>