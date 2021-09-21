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
                lazy-src="../assets/logoap.png"
                max-height="200"
                max-width="200"
                src="../assets/logoap.png"
              ></v-img>

              <v-card-title primary-title class="justify-center">
                <div>
                  <h3>
                    Consulta de Docentes Registrados
                  </h3>
                  <v-flex>
                    <v-form>
                      <v-simple-table height="300px">
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left">
                                Área académica
                              </th>
                              <th class="text-left">
                                Docente
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in areas" :key="item.name">
                              <td class="text-xs-left">{{ item.name }}</td>
                              <td class="text-xs-left">{{ item.docente }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-form>
                  </v-flex>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-flex>
                  <v-form>
                    <v-divider inset vertical></v-divider>
                    <v-btn
                      block
                      color="primary"
                      @click="$router.push('/register')"
                      >Registro de Docentes</v-btn
                    >
                    <v-divider inset vertical></v-divider>
                  </v-form>
                </v-flex>
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
  data() {
    return {
      areas: [
        {
          name: "Ciencias naturales y educación ambiental",
          docente: "Ximena",
        },
        {
          name:
            "Ciencias sociales, historia, geografía, constitución política y democracia",
          docente: "Carlos",
        },
        {
          name: "Educación artística y cultural",
          docente: "Marcela",
        },
        {
          name: "Educación ética y en valores humanos",
          docente: "Marcela",
        },
        {
          name: "Educación física, recreación y deportes",
          docente: "Carlos",
        },
        {
          name: "Humanidades, lengua castellana e idiomas extranjeros",
          docente: "Marcela",
        },
        {
          name: "Matemáticas",
          docente: "Sergio",
        },
        {
          name: "Tecnología e informática",
          docente: "Sergio",
        },
      ],
    };
  },
};
</script>

<style>
td {
  width: 50%;
}
</style>
