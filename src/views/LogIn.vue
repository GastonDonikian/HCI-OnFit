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
  },
}
</script>

<style scoped>

.LogIn {
  margin: 0 auto;
}
.Register {
  margin: 0 auto;
}
.container-scoped {
  position: absolute;
  bottom: 0px
}

/*.LogInDiv {*/
/*  position: fixed;*/
/*  bottom: 100px;*/
/*  right: 800px;*/
/*  width: 400px;*/
/*  border: 2px solid #707070;*/
/*  background-color: #EBEBEB;*/
/*  border-radius: 20px;*/
/*  padding: 40px;*/
/*}*/
/*.RegistrarseDiv {*/
/*  position: fixed;*/
/*  bottom: 30px;*/
/*  right: 300px;*/
/*  width: 400px;*/
/*  border: 2px solid #707070;*/
/*  background-color: #EBEBEB;*/
/*  border-radius: 20px;*/
/*  padding: 40px;*/
/*}*/
</style>