<template>
  <div id="app">
    <v-app id="inspire">
      

      <v-content>
        <v-container fluid fill-height>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-img
                class="mx-auto"
                lazy-src="../assets/logoap.png"
                max-height="400"
                max-width="400"
                src="../assets/logoap.png"
              ></v-img>

              <v-card-title primary-title class="justify-center">
                <div>
                  <h3>
                    Gestor administrativo web "ColDream"
                  </h3>
                  <div>
                    <v-flex>
                    <v-form>
                      <v-divider inset vertical></v-divider>
                      <v-btn
                        block
                        color="primary"
                        @click="$router.push('/login')"
                        >Inicio de sesión</v-btn
                      >
                    </v-form>
                  </v-flex>
                  </div>
                </div>
              </v-card-title>

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
  data() {
    return {
      menu: [
        //{ icon: "login", title: "login" },
      ],
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    },
  },
};
</script>
