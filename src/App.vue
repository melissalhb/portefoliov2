<!-- App.vue -->
<template>
  <div id="app">
    <Header/>
    <Portfolio/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Hearder.vue'
import Portfolio from './Portefolio.vue'


export default {
  name: 'App',
  components: {
    Header,
    Portfolio,
    Footer
  }
}
</script>

<style>
/* Ajoutez des styles CSS globaux ici */
body {
  font-family: 'Brasika Display';
  margin: 0;
  padding: 0;
  background-color: #ECE5D9;

}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


</style>
