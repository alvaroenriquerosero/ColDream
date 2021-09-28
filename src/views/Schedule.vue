<template>
  <div id="app">
    <h1 class="text-center display-2">Disponibilidad de Agenda Docente</h1>
    <v-divider inset vertical></v-divider>
    <v-app id="inspire">
      <v-row>
        <v-row>
          <div>
            <v-col style="width: 350px; flex: 0 1 auto;">
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
                    label="Fecha a solicitar"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  align="center"
                  v-model="date"
                  no-title
                  scrollable
                >
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
          </div>
        </v-row>
        <v-spacer></v-spacer>

        <v-row justify="space-around" align="center">
          <div>
            <h1>Horario a solicitar:</h1>
            <v-row justify="space-around" align="center">
              <v-col style="width: 350px; flex: 0 1 auto;">
                <h2>Inicio:</h2>
                <v-time-picker v-model="start" :max="end"></v-time-picker>
              </v-col>
              <v-col style="width: 350px; flex: 0 1 auto;">
                <h2>Final :</h2>
                <v-time-picker v-model="end" :min="start"></v-time-picker>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <v-divider inset vertical></v-divider>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="first"
                      label="Fundación que solicita"
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="last"
                      label="Dirección de la Fundación"
                      solo-inverted
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </div>
        </v-row>
      </v-row>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Docente
              </th>
              <th class="text-left">
                Fecha
              </th>
              <th class="text-left">
                Hora
              </th>
              <th class="text-left">
                Fundación
              </th>
              <th class="text-left">
                Dirección
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in solicitudes" :key="item.docente">
              <td>{{ item.docente }}</td>
              <td>{{ item.fecha }}</td>
              <td>{{ item.hora }}</td>
              <td>{{ item.fundacion }}</td>
              <td>{{ item.direccion }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-spacer></v-spacer>
      <v-btn rounded x-large depressed color="green lighten-4">
        Asignar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        rounded
        x-large
        depressed
        color="primary"
        @click="$router.push('/requests')"
      >
        Volver
      </v-btn>
      <v-spacer></v-spacer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      solicitudes: [
        {
          docente: "Ximena",
          fecha: "01-01-2022",
          hora: "02:00 pm - 04:00 pm",
          fundacion: "example",
          direccion: "example",
        },
        {
          docente: "Ximena",
          fecha: "01-01-2022",
          hora: "12:00 pm - 02:00 pm",
          fundacion: "example",
          direccion: "example",
        },
        {
          docente: "Ximena",
          fecha: "01-01-2022",
          hora: "02:00 pm - 04:00 pm",
          fundacion: "example",
          direccion: "example",
        },
        {
          docente: "Ximena",
          fecha: "01-01-2022",
          hora: "04:00 pm - 06:00 pm",
          fundacion: "example",
          direccion: "example",
        },
      ],
    };
  },
};
</script>

<style></style>
