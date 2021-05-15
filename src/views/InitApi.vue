<template>
  <v-container/>
</template>

<script>
import InitStore from "../store/InitStore";

export default {
  name: "InitApi",
  async created() {
    await InitStore.createCategories();
  }
}

</script>

<style scoped>

</style>