<template>
  <div class ="menu">

    <v-card
        class="mx-auto"
        max-width="344"
        color="#F1B0B8"
    ><!--color cambia con la API-->
      <v-list-item three-line>
        <v-list-item-avatar
            rounded
            height="150"
            width="80"
            color="grey"
        ></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          <v-rating
            v-model="rating"
            background-color="black"
            color="black"
            small
            readonly
          ></v-rating>
          <v-card-actions >
            <v-spacer></v-spacer>
            <v-btn
                rounded
                small
                text
                color="white"
            >
              Ver rutina
            </v-btn>
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "RutinCard.vue",
  data: () => ({
    rating: 4,
  }),
}
</script>
  export default {}
<style scoped>

</style>