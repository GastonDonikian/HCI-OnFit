<template>
  <div style="margin-left: 20px; margin-top: 20px">
    <v-card width="600px" min-height="500px" style="color: #EBEBEB; padding-bottom: 20px">
      <v-row>
        <v-col>
          <v-text-field
              :v-model="this.titulo"
              type="text"
              label="Nombre"
              style="padding-left: 5%; padding-right: 2%; display: inline-block"
              ></v-text-field>
          <v-icon
              style="color: #E46271"
          >mdi-square-edit-outline
          </v-icon>
        </v-col>
        <v-col id="dropdown-example-2">
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
          <p class="black--text">Entrada en calor</p>
        </v-col>
        <v-col align="center">
          <MinusPlusField seccion="entradaEnCalor"></MinusPlusField>
        </v-col>
      </v-row>
      <ExBanner v-for="exercise in store.tempRoutine.entradaEnCalor" :key="exercise.id"
                :nombreejercicio="exercise.titulo"></ExBanner>
      <AddExToRoutine seccion="entradaEnCalor"></AddExToRoutine>
      <v-row align="center">
        <v-col style="padding-left: 5%">
          <p class="black--text">Principal</p>
        </v-col>
        <v-col align="center">
          <MinusPlusField seccion="principal"></MinusPlusField>
        </v-col>
      </v-row>
      <ExBanner v-for="exercise in store.tempRoutine.principal" :key="exercise.id"
                :nombreejercicio="exercise.titulo"></ExBanner>
      <AddExToRoutine seccion="principal"></AddExToRoutine>
      <v-row align="center">
        <v-col style="padding-left: 5%">
          <p class="black--text">Elongación</p>
        </v-col>
        <v-col align="center">
          <MinusPlusField seccion="elongacion"></MinusPlusField>
        </v-col>
      </v-row>
      <ExBanner v-for="exercise in store.tempRoutine.elongacion" :key="exercise.id"
                :nombreejercicio="exercise.titulo"></ExBanner>
      <AddExToRoutine seccion="elongacion"></AddExToRoutine>
      <v-btn right color="success" @click="this.finalizeRoutine"></v-btn>
    </v-card>
  </div>
</template>

<script>
import MinusPlusField from "./MinusPlusField";
import AddExToRoutine from "./AddExToRoutine";
import ExBanner from "./ExBanner";
import CreateRoutineStore from "../store/CreateRoutineStore";

export default {
  name: "CreateRoutineCard",
  components: {ExBanner, AddExToRoutine, MinusPlusField},
  data: () => ({
    store: CreateRoutineStore,
    titulo: "",
    category: "",
    repeticionesEntradaEnCalor: null,
    repeticionesPrincipal: null,
    repeticionesElongacion: null,
    dropdown_icon: [
      {text: 'Pesas', callback: () => this.changeCategory("Pesas")},
      {text: 'Running', callback: () => this.changeCategory("Running")},
      {text: 'En casa', callback: () => this.changeCategory("En casa")},
    ]
  }),
  methods: {
    finalizeRoutine() {
      this.store.setName(this.titulo);
      this.store.setDisciplina(this.category);
      this.store.addRoutine();
    },
    changeCategory(category){
      this.category = category;
    }
  },
}
</script>

<style scoped>

</style>