<template>
  <div style="margin-left: 20px; margin-top: 20px">
    <v-card width="600px" min-height="500px" style="color: #EBEBEB; padding-bottom: 20px">
      <v-row>
        <v-col>
          <v-text-field
              v-model="store.tempRoutine.titulo"
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
      <v-row style="margin-top: -10%; margin-left: 0.5%">
        <v-col>
          <v-switch
              v-model="store.tempRoutine.isPublic"
              inset
          >
            <template #prepend>
              <v-label>Público:</v-label>
            </template>
          </v-switch>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <v-textarea
              label="Descripción"
              v-model="store.tempRoutine.detail"
              counter>
          </v-textarea>
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
                :nombreejercicio="exercise.name"></ExBanner>
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
                :nombreejercicio="exercise.name"></ExBanner>
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
                :nombreejercicio="exercise.name"></ExBanner>
      <AddExToRoutine seccion="elongacion"></AddExToRoutine>
      <v-btn right color="success" @click="this.finalizeRoutine" style="margin-top: 5%; margin-left: 2.5%">Aceptar</v-btn>
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
    isPublic: "",
    repeticionesEntradaEnCalor: 1,
    repeticionesPrincipal: 1,
    repeticionesElongacion: 1,
    dropdown_icon: [
      {text: 'Pesas', callback: () => this.changeCategory("Pesas")},
      {text: 'Running', callback: () => this.changeCategory("Running")},
      {text: 'En casa', callback: () => this.changeCategory("En casa")},
    ]
  }),
  created() {
    if(!this.store.edit)
      this.store.vaciarTemp();
  },
  methods: {
    finalizeRoutine() {
      this.changeCategory(this.category);
      // this.setInfo();
      this.store.addRoutine();
      window.location.href = '/#/Rutinas'
    },
    changeCategory(category) {
      this.category = category;
    },
    // setInfo(){
    //   this.store.tempRoutine.titulo = this.titulo;
    //   this.store.tempRoutine.isPublic = this.isPublic;
    //   this.store.tempRoutine.
    // }
  },
}
</script>

<style scoped>

</style>