<template>
  <div>
    <v-card
        v-if="this.fav === 0"
    >
      <h3>NO TENES FAVS</h3>
    </v-card>
  </div>
</template>

<script>

export default {
  name: "Favoritos",
  //fav: FavouritesApi.getRoutinesFav().content.length
}
//TODO:mañana prometo que lo hago
</script>
<style scoped>

</style>