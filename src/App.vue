<template>
  <v-app>
    <Header />
    <Logo />
    
    
    <v-container>
      

      <router-view></router-view>

    </v-container>
<Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home.vue';
import Logo from './components/Logo.vue';

export default {
  name: 'App',
  components: {
    Header,
    Logo,
    Footer,
    Home,
    
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
