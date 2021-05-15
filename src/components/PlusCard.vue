<template>
  <div>
    <v-card class="mx-auto"
            width="344"
            height="183"
            color="#EBEBEB" style="align-content: center">
      <v-btn plain @click="goToRutineCreator" style="color: #EBEBEB" class="vCard">
        <v-icon color="#E46271" size="175" style="border: 1px">mdi-plus-circle</v-icon>
      </v-btn>
    </v-card>

  </div>
</template>

<script>
export default {
  name: "PlusCard",
  methods:{
    goToRutineCreator(){
      window.location.href = '/#/RoutineCreator';
    }
  }
}
</script>

<style scoped>
.vCard{
  margin: 21% 0 20% 19%;
}
</style>