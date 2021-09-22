<template>
  <v-app>
    <Header />
    
    <v-container>

      <router-view></router-view>

    </v-container>
<Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    
  },

  data: () => ({
    
  }),
};
</script>
<style>
#container {
  text-align: center;
  margin: 0 auto;
  width: 360px;
}
</style>
