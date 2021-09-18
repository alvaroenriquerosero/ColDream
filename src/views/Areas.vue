<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar color="blue darken-4" dark fixed app>
        <v-toolbar-title>App ColDream</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="item in menu" :key="item.icon" :to="item.link" flat>{{
            item.title
          }}</v-btn>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-img
                class="mx-auto"
                lazy-src="../assets/logoat.png"
                max-height="400"
                max-width="400"
                src="../assets/logoat.png"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h2>
                    Asignación de Áreas académicas
                  </h2>
                  <div>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </v-card-title>

              <v-container fluid>
                <v-row align="center">
                  <v-col>
                    <v-select
                      :items="areas"
                      label="Áreas académicas"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col>
                    <v-select :items="docente" label="Docente"></v-select>
                    <v-divider inset vertical></v-divider>
                    <v-row align="center" justify="space-around">
                      <v-btn depressed>
                        Consultar
                      </v-btn>
                      <v-btn depressed color="primary">
                        Asignar
                      </v-btn>
                      <v-btn depressed color="error">
                        Eliminar
                      </v-btn>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>

              <v-card-actions>
                <v-divider inset vertical></v-divider>
                <div id="app">
                  <div id="nav">
                    | <router-link to="/">Home</router-link> | |
                    <router-link to="/Register">Registro</router-link> | |
                    <router-link to="/login">Login</router-link> |
                  </div>
                  <router-view />
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-container>
      </v-content>

      <v-footer height="auto" color="blue darken-4" dark>
        <v-layout justify-center row wrap>
          <v-flex
            color="blue darken-4"
            dark
            py-3
            text-xs-center
            white--text
            xs12
          >
            &copy;2011 — <strong>Fundación Colombian Dream</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    areas: [
      "Ciencias naturales y educación ambiental",
      "Ciencias sociales, historia, geografía, constitución política y democracia",
      "Educación artística y cultural",
      "Educación ética y en valores humanos",
      "Educación física, recreación y deportes",
      "Humanidades, lengua castellana e idiomas extranjeros",
      "Matemáticas",
      "Tecnología e informática",
    ],
    docente: ["Ximena", "Carlos", "Marcela"],
  }),
};
</script>
