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
  name: "Login",
  props: {
    source: String,
  },
};
</script>
