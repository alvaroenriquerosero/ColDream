<template>
  <div id="app">
    <v-app id="inspire">
      <v-row>
        <v-col align-self="center" cols="12" sm="6" md="4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Fecha a elegir"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker align="center" v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>

        <v-row justify="space-around" align="center">
          <v-time-picker v-model="picker" ampm-in-title></v-time-picker>
        </v-row>
      </v-row>
      <v-btn x-large depressed color="green lighten-4">
        Asignar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn x-large depressed color="primary" @click="$router.push('/menu')">
        Volver
      </v-btn>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
