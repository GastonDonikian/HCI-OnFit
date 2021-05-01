<template>
  <div class="menu">

    <v-card
        class="mx-auto"
        width="344"
        v-bind:color= this.routine.color
    ><!--color cambia con la API-->
      <v-list-item three-line>
        <v-list-item-avatar
            rounded
            height="150"
            width="80"
            color="grey"
        ></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 black--text">
            {{ routine.titulo }}
          </v-list-item-title>
          <v-list-item-subtitle class="black--text">{{ routine.description }}</v-list-item-subtitle>
          <v-rating
              v-model="routine.rating"
              background-color="black"
              color="black"
              small
              readonly
          ></v-rating>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                rounded
                small
                text
                color="black"
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
  name: "RoutineCard",
  props: {
    routine: {title: String,description: String,rating: Number,color: String}
  },
  data: () => ({
    titulo: "Rutina 1",
    description: "Rutina de entrenamiento partido",
    estrellas: 4,
    color: "#F1B0B8"
  }),
  methods: {
    //Decido validar en la routine list cuando lo pido desde la API y no aca asi puedo elegir no crear la routine card.
    newRoutineCard(titulo, description, estrellas, color) {
      this.titulo = titulo;
      this.description = description;
      this.estrellas = estrellas;
      this.color = color;
    }
  },
  computed: {
    isValidDescriptionName() {
      return (this.description.length)
    },

  }
}
</script>
export default {}
<style scoped>

</style>