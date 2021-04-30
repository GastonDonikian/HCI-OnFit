<template>
  <v-container class="container-scoped">
  <div class="LogInDiv">
    <h3>INICIAR SESIÓN</h3>
    <p>MAIL</p>
    <v-text-field outlined background-color="#FFFFFF" label="usuario@ejemplo.com"></v-text-field>
    <p>CONTRASEÑA</p>
    <v-text-field
        background-color="#FFFFFF"
        outlined
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        counter
        @click:append="show1 = !show1">
    </v-text-field>
    <v-btn color="#E77381" class="white--text" rounded largee :to="'/Rutinas'">Ingresar</v-btn>

  </div>
    <div class="RegistrarseDiv">
      <h3>REGISTRARSE</h3>


<!--      <v-text-field outlined background-color="#FFFFFF" class="cortados"></v-text-field>-->
<!--      <v-text-field outlined background-color="#FFFFFF" class="cortados"></v-text-field>-->

      <v-container class="my-5">
        <v-layout row>
          <v-flex xs4 md4>
            <v-text-field></v-text-field>
            <v-text-field></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>

      <p>MAIL</p>
      <v-text-field outlined background-color="#FFFFFF" label="usuario@ejemplo.com"></v-text-field>
      <p>CONTRASEÑA</p>
      <v-text-field
          background-color="#FFFFFF"
          outlined
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          counter
          @click:append="show1 = !show1">
      </v-text-field>
      <p>CONFIRMAR CONTRASEÑA</p>
      <v-text-field
          background-color="#FFFFFF"
          outlined
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          counter
          @click:append="show1 = !show1">
      </v-text-field>
      <v-btn color="#E77381" class="white--text" rounded large>Ingresar</v-btn>

    </div>
  </v-container>




</template>


<script>
export default {
  data () {
    return {
      show1: false,
      password: '',
    }
  },
}
</script>

<style scoped>

.container-scoped {
  position: absolute;
  bottom: 0px
}

.LogInDiv {
  position: fixed;
  bottom: 100px;
  right: 800px;
  width: 400px;
  border: 2px solid #707070;
  background-color: #EBEBEB;
  border-radius: 20px;
  padding: 40px;
}
.RegistrarseDiv {
  position: fixed;
  bottom: 30px;
  right: 300px;
  width: 400px;
  border: 2px solid #707070;
  background-color: #EBEBEB;
  border-radius: 20px;
  padding: 40px;
}
.cortados {
  width: 40%;
}
.pink-button {
  color: pink;
}
</style>