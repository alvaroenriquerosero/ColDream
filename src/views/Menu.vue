<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid>
        <div class="text-center">
          <h1 class="text-center display-2">
            Menú Principal
          </h1>
          <v-divider inset vertical></v-divider>
          <div>
            <v-row justify="space-around">
              <v-col cols="5">
                <v-form>
                  <v-divider inset vertical></v-divider>
                  <v-btn
                    block
                    rounded
                    x-large
                    color="primary"
                    @click="$router.push('/register')"
                    >Registro de Docentes</v-btn
                  >
                  <v-divider inset vertical></v-divider>
                  <v-btn
                    block
                    rounded
                    x-large
                    color="primary"
                    @click="$router.push('/areas')"
                    >Asignación de áreas académicas</v-btn
                  >
                  <v-divider inset vertical></v-divider>
                  <v-btn
                    block
                    rounded
                    x-large
                    color="primary"
                    @click="$router.push('/requests')"
                    >Solicitud de Hora Cátedra</v-btn
                  >
                  <v-divider inset vertical></v-divider>
                  <v-btn
                    block
                    rounded
                    x-large
                    color="secondary"
                    @click="$router.push('/')"
                    >Finalizar sesión</v-btn
                  >
                </v-form>
              </v-col>
            </v-row>
            <v-divider inset vertical></v-divider>
          </div>
        </div>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
