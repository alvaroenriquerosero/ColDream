<template>
  <div id="app">
    <v-app id="inspire">
      

      <v-content>
        <v-container fluid fill-height>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-img
                class="mx-auto"
                lazy-src="../assets/logoat.png"
                max-height="250"
                max-width="250"
                src="../assets/logoat.png"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h2>
                    Solicituda de Hora Cátedra
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
                      <v-btn depressed color="green lighten-4" @click="$router.push('/schedule')">
                        Consultar
                      </v-btn>                      
                      <v-btn depressed color="error">
                        Eliminar
                      </v-btn>
                      <v-btn depressed color="primary" @click="$router.push('/menu')">
                        Menú
                      </v-btn>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>

              <v-card-actions>
              
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-container>
      </v-content>

      
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
    docente: ["Ximena", "Carlos", "Marcela", "Sergio",],
  }),
};
</script>