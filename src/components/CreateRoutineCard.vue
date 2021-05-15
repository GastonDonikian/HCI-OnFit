<template>
  <div style="margin-left: 60px; margin-top: 20px">
    <v-card width="600px" min-height="500px" style="color: #EBEBEB; padding-bottom: 20px">
      <v-row>
        <v-col>
          <v-text-field
              v-model="store.tempRoutine.titulo"
              type="text"
              label="Nombre"
              color="#E46271"
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
              v-model="store.tempRoutine.disciplina"
              :items="dropdown_icon"
              label="Categorías"
              segmented
              target="#dropdown-example-2"
              style="padding-right: 5%"
          ></v-overflow-btn>
          <p v-if="this.error_category_empty" style="color: red !important;">No has seleccionado categoria</p>
        </v-col>
      </v-row>

      <v-row style="margin-top: -10%; margin-left: 0.5%">
        <v-col>
          <p v-if="this.error_name_too_long" style="color: red !important;">Nombre muy largo</p>
          <p v-if="this.error_name_empty" style="color: red !important;">Nombre vacio</p>
          <v-switch
              v-model="store.tempRoutine.isPublic"
              inset
              color="#E46271"
          >
            <template #prepend>
              <v-label>Público:</v-label>
            </template>
          </v-switch>
        </v-col>
      </v-row>
      <v-row justify="center" style="margin: 0 5px 0 5px" >
        <v-col>
          <v-textarea
              label="Descripción"
              v-model="store.tempRoutine.detail"
              counter
              color="#E46271"
          >
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
        <p v-if="this.store.errorEntradaEnCalor" style="color: red; padding-left: 5%">Este ejercicio ya se encuentra en Entrada en calor</p>
      </v-row>
      <ExBanner v-for="(exercise,index) in store.tempRoutine.entradaEnCalor" :key="(exercise.id,category.id,index)"
                :ejercicio="exercise" :category="'entrada'" :number="index"></ExBanner>
      <AddExToRoutine seccion="entradaEnCalor"></AddExToRoutine>
      <v-row align="center">
        <v-col style="padding-left: 5%">
          <p class="black--text">Principal</p>
        </v-col>
        <v-col align="center">
          <MinusPlusField seccion="principal"></MinusPlusField>
        </v-col>
      </v-row>
      <p v-if="this.store.errorPrincipal" style="color: red; padding-left: 5%">Este ejercicio ya se encuentra en Principal</p>
      <ExBanner v-for="(exercise,index) in store.tempRoutine.principal" :key="(exercise.id,category.id,index)"
                :ejercicio="exercise" :category="'principal'" :number="index"></ExBanner>
      <AddExToRoutine seccion="principal"></AddExToRoutine>
      <v-row align="center">
        <v-col style="padding-left: 5%">
          <p class="black--text">Elongación</p>
        </v-col>
        <v-col align="center">
          <MinusPlusField seccion="elongacion"></MinusPlusField>
        </v-col>
      </v-row> <p v-if="this.store.errorElongar" style="color: red; padding-left: 5%">Este ejercicio ya se encuentra en Elongación</p>
      <ExBanner v-for="(exercise,index) in store.tempRoutine.elongacion" :key="(exercise.id,category.id,index)"
                :ejercicio="exercise" :category="'elongación'" :number="index"></ExBanner>
      <AddExToRoutine seccion="elongacion"></AddExToRoutine>
      <v-btn right color="success" @click="this.finalizeRoutine" style="margin-top: 5%; margin-left: 2.5%">Aceptar</v-btn>
      <v-btn left color="red" text style="margin-top: 5%; margin-left: 2.5%" :to="'/Rutinas'">Cancelar</v-btn>
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
  props:{
    rutina: {type: Object},
  },
  data: () => ({
    store: CreateRoutineStore,
    titulo: "",
    category: "",
    isPublic: "",
    error_name_too_long: false,
    error_name_empty: false,
    error_category_empty:false,
    repeticionesEntradaEnCalor: 1,
    repeticionesPrincipal: 1,
    repeticionesElongacion: 1,
    dropdown_icon: [
      {text: 'Pesas', callback: () => null},
      {text: 'Running', callback: () => null},
      {text: 'En casa', callback: () => null},
    ]
  }),
  created() {
    if(!this.store.edit)
      this.store.vaciarTemp();
  },
  destroyed() {
    this.store.edit = false;
  },

  methods: {
    finalizeRoutine() {
      this.error_name_too_long= false;
      this.error_name_empty= false;
      this.error_category_empty=false;
      // Validaciones del input "nombre"
      if (this.store.tempRoutine.titulo.length > 15) {
        this.error_name_too_long = true;
        this.error_name_empty = false;
        return;
      }
      if (this.store.tempRoutine.titulo.length === 0) {
        this.error_name_empty = true;
        this.error_name_too_long = false;
        return;
      }
      if(this.store.tempRoutine.disciplina===null){
        this.error_category_empty = true;
        return;
      }
      if(!this.store.edit){
        this.store.addRoutine();
      }
      else
        this.store.editRoutine();
      window.location.href = '/#/Rutinas'
    },
  },
}

</script>

<style scoped>

</style>