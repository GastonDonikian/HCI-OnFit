<template>
  <v-container class="container-scoped">
  <div class="mainDiv">
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

.mainDiv {
  position: fixed;
  bottom: 100px;
  right: 800px;
  width: 400px;
  border: 2px solid #707070;
  background-color: #EBEBEB;
  border-radius: 20px;
  padding: 40px;
}
.pink-button {
  color: pink;
}
</style>