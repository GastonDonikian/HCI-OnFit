<template>
  <v-card>
    <form >
      <v-text-field
          v-model="email"
          label="Email"
      ></v-text-field>
      <v-text-field
          v-model="code"
          label="Code"
      ></v-text-field>
      <v-btn
          @click="this.submit"
          class="mr-4">Confirmar
      </v-btn>
      <v-btn
          class="mr-4"
          @click="this.resend"
      >Re-enviar codigo
      </v-btn>
    </form>
  </v-card>
</template>

<script>
import LoginStore from "../store/LoginStore";

export default {
  name: "ValidateEmail",
  data: () => ({
    email: 'gastondonikian@gmail.com',
    code: '',
    store: LoginStore
  }),
  methods: {
    submit() {
      if (this.store.validateEmail(this.email, this.code)) {
        console.log('validaste correctamente tus datos');
        //ME TIENE QUE MANDAR A EXPLORAR
        window.location.href = '/#/Rutinas'
      } else {
        alert('Something went wrong...');
        window.location.href = '/#/validarEmail'
      }
    },
    resend() {
      this.store.resendEmail(this.email);
      this.email = '';
      this.code = '';
    }
  }
}
</script>

<style scoped>

</style>