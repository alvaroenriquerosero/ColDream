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
                max-height="200"
                max-width="200"
                src="../assets/logoat.png"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h2>
                    Registro de Docentes
                  </h2>
                  <div>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </v-card-title>

              <v-col>
                <v-card ref="form">
                  <v-card-text>
                    <v-text-field
                      ref="name"
                      v-model="name"
                      :rules="[() => !!name || 'This field is required']"
                      :error-messages="errorMessages"
                      label="Nombre completo"
                      placeholder="John Doe"
                      required
                    ></v-text-field>
                    <v-text-field
                      ref="address"
                      v-model="address"
                      :rules="[
                        () => !!address || 'This field is required',
                        () =>
                          (!!address && address.length <= 60) ||
                          'Address must be less than 25 characters',
                        addressCheck,
                      ]"
                      label="Dirección"
                      placeholder="Calle/carrera etc."
                      counter="60"
                      required
                    ></v-text-field>
                    <v-text-field
                      ref="city"
                      v-model="city"
                      :rules="[
                        () => !!city || 'This field is required',
                        addressCheck,
                      ]"
                      label="Ciudad"
                      placeholder="Bogotá"
                      required
                    ></v-text-field>
                    <v-text-field
                      ref="state"
                      v-model="state"
                      :rules="[() => !!state || 'This field is required']"
                      label="Departamento"
                      required
                      placeholder="Cund"
                    ></v-text-field>
                    <v-text-field
                      ref="phone"
                      v-model="phone"
                      :rules="[() => !!phone || 'This field is required']"
                      label="Telefono"
                      required
                      placeholder="1234567890"
                    ></v-text-field>
                    <v-text-field
                      ref="email"
                      v-model="email"
                      :rules="[() => !!email || 'This field is required']"
                      label="Correo electrónico"
                      required
                      placeholder="example@example.com"
                    ></v-text-field>
                  </v-card-text>
                  <v-divider class="mt-12"></v-divider>
                  <v-card-actions>
                    <v-btn text>
                      Cancelar
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="$router.push('/menu')">
                      Menú
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-slide-x-reverse-transition>
                      <v-tooltip v-if="formHasErrors" left>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            icon
                            class="my-0"
                            v-bind="attrs"
                            @click="resetForm"
                            v-on="on"
                          >
                            <v-icon>mdi-refresh</v-icon>
                          </v-btn>
                        </template>
                        <span>Refresh form</span>
                      </v-tooltip>
                    </v-slide-x-reverse-transition>
                    <v-btn color="primary" text @click="submit">
                      ingresar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

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
  //new Vue({
  //el: '#app',
  //vuetify: new Vuetify(),
  data: () => ({
    errorMessages: "",
    name: null,
    address: null,
    city: null,
    state: null,
    phone: null,
    email: null,
    formHasErrors: false,
  }),

  computed: {
    form() {
      return {
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        phone: this.phone,
        email: this.email,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    addressCheck() {
      this.errorMessages =
        this.address && !this.name ? `Hey! I'm required` : "";

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    },
  },
};
</script>
