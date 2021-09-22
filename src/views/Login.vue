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
                    Ingreso de usuario
                  </h2>
                  <div>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </v-card-title>

              <v-card-text>
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
                  <v-btn block color="primary" @click="$router.push('/menu')">Entrar</v-btn>
                </v-form>
              </v-card-text>

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
  name: "Login",
  props: {
    source: String,
  },
};
</script>
