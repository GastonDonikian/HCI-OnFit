<template>
  <div style="margin-left: 20px; margin-top: 20px">
    <v-card width="600px" min-height="500px" style="color: #EBEBEB; padding-bottom: 20px" >
      <v-row>
        <v-col>
          <v-text-field
              label="Nombre"
              style="padding-left: 5%; padding-right: 2%; display: inline-block"
          ></v-text-field>
          <v-icon
              style="color: #E46271"
          >mdi-square-edit-outline</v-icon>
        </v-col>
        <v-col id="dropdown-example-2" >
          <v-overflow-btn
              class="my-2"
              :items="dropdown_icon"
              label="Categorias"
              segmented
              target="#dropdown-example-2"
              style="padding-right: 5%"
          ></v-overflow-btn>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col style="padding-left: 5%">
          <s1 class="black--text">Entrada en calor</s1>
        </v-col>
        <v-col align="center">
          <MinusPlusField></MinusPlusField>
        </v-col>
      </v-row>
        <ExBanner></ExBanner>
        <AddExToRoutine></AddExToRoutine>
      <v-row align="center">
        <v-col style="padding-left: 5%">
          <s1 class="black--text">Principal</s1>
        </v-col>
        <v-col align="center">
          <MinusPlusField></MinusPlusField>
        </v-col>
      </v-row>
        <AddExToRoutine></AddExToRoutine>
      <v-row align="center">
        <v-col style="padding-left: 5%">
          <s1 class="black--text">Elongación</s1>
        </v-col>
        <v-col align="center">
          <MinusPlusField></MinusPlusField>
        </v-col>
      </v-row>
      <AddExToRoutine></AddExToRoutine>
    </v-card>
  </div>
</template>

<script>
import MinusPlusField from "./MinusPlusField";
import AddExToRoutine from "./AddExToRoutine";
import ExBanner from "./ExBanner";
export default {
  name: "CreateRoutineCard",
  components: {ExBanner, AddExToRoutine, MinusPlusField},
  data: () => ({
    dropdown_icon: [
      { text: 'Pesas', callback: () => console.log('Pesas')},
      { text: 'Running', callback: () => console.log('Running') },
      { text: 'En casa', callback: () => console.log('En casa')},
    ]
  }),
}
</script>

<style scoped>

</style>