<template>
  <div id="app">
    
    <v-app id="inspire">
      <v-container fluid>        
        <div class="text-center">
          <h1>
            Ingreso De Usuario
          </h1>
          <v-divider inset vertical></v-divider>
          <div>
            <v-row justify="space-around">
              <v-col cols="5">
                <v-form>
                  <v-text-field
                    name="login"
                    label="Usuario"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    name="password"
                    label="Contraseña"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-col>
            </v-row>
            <v-divider inset vertical></v-divider>
          </div>
          <div class="text-center"></div>
          <div class="my-2">
            <v-btn x-large color="primary" dark @click="$router.push('/menu')">
              Entrar
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
