<template>
  <div style="margin-top: 20px">
    <v-row>
      <v-col>
        <div align="center">
          <v-btn
              rounded
              color="#89D9D2"
              width="300"
              height="80"
              class="textStyle"
          ><v-icon
            x-large
            left
            style="margin-right: 30px"
          >mdi-star-shooting-outline</v-icon>
            DESTACADOS
          </v-btn>
        </div>
      </v-col>
      <v-col >
        <div align="center">
          <v-btn
              rounded
              color="#7885FF"
              width="300"
              height="80"
              class="textStyle"
          ><v-icon
            x-large
            left
            style="margin-right: 30px"
          >mdi-dumbbell</v-icon>
            PESAS
          </v-btn>
        </div>
      </v-col >
      <v-col >
        <div align="center">
          <v-btn
              rounded
              color="#F1B0B8"
              width="300"
              height="80"
              class="textStyle"
          ><v-icon
              x-large
              left
              style="margin-right: 30px"
          >mdi-run-fast</v-icon>RUNNING
          </v-btn>
        </div>
      </v-col>
      <v-col>
        <div align="center">
          <v-btn
              rounded
              color="#B495C2"
              width="300"
              height="80"
              class="textStyle"
          >
            <v-icon
                x-large
                left
                style="margin-right: 30px"
            >mdi-home-roof</v-icon>
            EN CASA
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  name: "Explore.vue"
}
</script>

<style scoped>
  .textStyle{
    font-size: 20px;
    color: #EBEBEB;
  }
</style>