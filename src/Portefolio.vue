<!-- Portfolio.vue -->
<template>
    <section class="portfolio">
      <!-- Ajoutez ici le contenu principal de votre portefolio, comme vos projets, compétences, etc. -->
      <body>
        <div class="content">
          <div class="test">
        <h1> Hello ! <br>
          I'm <a>Melissa Lacheb</a>
        </h1>
      </div>
      <div class="image">
        <img :src="myPic" alt="Beautiful picture of myself" />
        <img :src="Elipse" alt="Elipse" />
      </div>
      </div>
    </body>
    </section>
</template>
  
  <script>
  import myPic from './assets/profile_pic.png'
  import Elipse from './assets/elipse.png'
  export default {
    name: 'Portfolio',
    data() {
      return {
        myPic,
        Elipse
      }
    }
  }
  </script>
  
  <style scoped>
  /* Ajoutez des styles CSS spécifiques au contenu principal ici */

  .portfolio {
    background-color: #ECE5D9;
    padding: 30px;
    font-family: Lora;}

   h1 {
    font-family: 'Brasika Display';
    font-size : 56px;
    margin : 110px;
    margin-top : 10%;
    margin-right : 10px;
   }
   a {
  
    background-image: linear-gradient(to right,#f5af19, #f57119, #f111c0, #b719f5, #116bf1, #b719f5, #f111c0, #f57119, #f5af19);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    background-size : 700%;

    animation: animatedText 8s infinite alternate linear;
   }

   @keyframes animatedText {
      to {
        background-position: 100%;
      }
    }

    .content {
      display : flex;
      justify-content : space-between;
      align-items : center;
    }

    .image {
      display : flex;
      float : right;  
      margin-right : 200px;
      
    }

    .text {
      display : flex;
      float : left;
    }
  </style>