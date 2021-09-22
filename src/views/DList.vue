<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid>
        <div class="text-center">
          <h1>
            Consulta De Áreas y Docentes
          </h1>
          <v-divider inset vertical></v-divider>
          <div>
            <v-row justify="space-around">
              <v-col cols="12">
                <v-card-title primary-title class="justify-center">
                  <div>
                    <v-flex>
                      <v-form>
                        <v-simple-table height="500px">
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-center">
                                  Área académica
                                </th>
                                <th class="text-center">
                                  Docente
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in areas" :key="item.name">
                                <td class="text-left">{{ item.name }}</td>
                                <td class="text-xs-left">{{ item.docente }}</td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                      </v-form>
                    </v-flex>
                  </div>
                </v-card-title>
              </v-col>
            </v-row>
          </div>
          <div class="text-center"></div>
          <div class="my-2">
            <v-btn
              x-large
              color="primary"
              dark
              @click="$router.push('/areas')"
            >
              Volver
            </v-btn>
          </div>
        </div>
      </v-container>
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
