<template>
  <v-app id="inspire">
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="12">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2"
                        >Ingreso De Usuario</h1>
                        
                        <v-form>
                          <v-text-field
                            label="Correo"
                            name="Email"
                            type="text"                      
                          />

                          <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"                           
                            type="password"
                            />
                        </v-form>
                        <h3 class="text-center mt-4">Olvidó su contraseña?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn x-large rounded color="primary" dark
                        @click="$router.push('/menu')">Ingresar</v-btn>
                      </div>
                      <div class="text-center mt-3">
                        <v-btn x-large rounded color="primary" dark
                        @click="$router.push('/')">Volver</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="primary">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Registro</h1>
                        <h5
                          class="text-center"
                        >Ingrese su información si es un nuevo usuario</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn x-large rounded outlined dark @click="step++">Registrarse</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="primary">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Inicio de Sesión</h1>
                        <h5
                          class="text-center"
                        >Ingrese con su usuario y contraseña registrados</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn x-large rounded outlined dark @click="step--">Ingresar</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2">Registro de Usuario</h1>                        
                        <h4 class="text-center mt-4">Ingrese su información si es un nuevo usuario</h4>
                        <v-form>
                          <v-text-field
                            label="Nombres Completos"
                            name="Name"                            
                            type="text"                            
                          />
                          <v-text-field
                            label="Correo"
                            name="Email"                            
                            type="text"                            
                          />

                          <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"                           
                            type="password"                            
                          />
                          <v-text-field
                            label="Fundación"
                            name="Fundation"                          
                            type="text"                            
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn x-large rounded color="primary" dark>Registrarse</v-btn>
                      </div>
                      <div class="text-center mt-3">
                        <v-btn x-large rounded color="primary" dark
                        @click="$router.push('/')">Volver</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  }
};
</script>