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
                  <h2>Disponibiliidad de Agenda</h2>
                  <div>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </v-card-title>

              <v-container fluid>
                <v-row align="center">
                  <v-col>
                    <v-sheet height="400">
                      <v-calendar
                        ref="calendar"
                        :now="today"
                        :value="today"
                        :events="events"
                        color="primary"
                        type="week"
                      ></v-calendar>
                    </v-sheet>
                    <v-divider inset vertical></v-divider>
                    <v-row align="center" justify="space-around">
                      <v-btn
                        depressed
                        color="green lighten-4"
                        @click="$router.push('/schedule')"
                      >
                        Solicitar
                      </v-btn>
                      <v-btn depressed color="error"> Eliminar </v-btn>
                      <v-btn
                        depressed
                        color="primary"
                        @click="$router.push('/menu')"
                      >
                        Menú
                      </v-btn>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>

              <v-card-actions> </v-card-actions>
            </v-card>
          </v-flex>
        </v-container>
      </v-content>

      
    </v-app>
  </div>
</template>

<script>
export default {
    data: () => ({
      today: '2019-01-08',
      events: [
        {
          name: 'Weekly Meeting',
          start: '2019-01-07 09:00',
          end: '2019-01-07 10:00',
        },
        {
          name: `Thomas' Birthday`,
          start: '2019-01-10',
        },
        {
          name: 'Mash Potatoes',
          start: '2019-01-09 12:30',
          end: '2019-01-09 15:30',
        },
      ],
    }),
    mounted () {
      this.$refs.calendar.scrollToTime('08:00')
    },
  }
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>