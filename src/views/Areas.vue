<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid>
        <v-row align="center" justify="space-around">
          <v-col cols="6">
            <h2 class="text-center">
              Asignación de Áreas académicas
            </h2>
            <v-select :items="areas" label="Áreas académicas"></v-select>
          </v-col>
        </v-row>
        <v-row align="center" justify="space-around">
          <v-col cols="6">
            <v-select :items="docente" label="Docente"></v-select>
            <v-divider inset vertical></v-divider>
            <v-row align="center" justify="space-around">
              <v-btn x-large depressed>
                Consultar
              </v-btn>
              <v-btn x-large depressed color="green lighten-4">
                Asignar
              </v-btn>
              <v-btn x-large depressed color="error">
                Eliminar
              </v-btn>
              <v-btn
                x-large
                depressed
                color="primary"
                @click="$router.push('/menu')"
              >
                Volver
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions> </v-card-actions>
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
    docente: ["Ximena", "Carlos", "Marcela", "Sergio"],
  }),
};
</script>

<style></style>
