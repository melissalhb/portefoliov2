<!-- App.vue -->
<template>
  <div id="app">
    <Header/>
    <Portfolio/>
    <Education/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Hearder.vue'
import Portfolio from './Portefolio.vue'
import Education from './Education.vue'


export default {
  name: 'App',
  components: {
    Header,
    Portfolio,
    Education,
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
  width : 100vw;
  overflow-x: hidden;

}
  
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


</style>
