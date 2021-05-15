<template>
  <div>
    <v-row>
      <LogInForm class="LogIn" style="margin-top: 4%"></LogInForm>
      <RegisterForm class="my-12 Register"></RegisterForm>
    </v-row>
  </div>
</template>


<script>
import LogInForm from "../components/LogInForm";
import RegisterForm from "../components/RegisterForm";

export default {
  components: {RegisterForm, LogInForm},
  data () {
    return {
      show1: false,
      password: '',
    }
  }
}
</script>

<style scoped>

.LogIn {
  margin: 0 auto;
}
.Register {
  margin: 0 auto;
}
</style>