<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid>
        <v-row justify="space-around">
          <v-col cols="5">
                        
          </v-col>
        </v-row>
        <div class="text-center">
          <h1>
            Gestor Administrativo Para Plataformas Web "ColDream"
          </h1>
          <v-divider inset vertical></v-divider>
          <div class="text-center"></div>
          <div class="my-2">
            <v-btn x-large color="primary" dark @click="$router.push('/login')">
              Inicio De Sesión
            </v-btn>
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
