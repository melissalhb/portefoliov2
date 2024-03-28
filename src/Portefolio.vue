<!-- Portfolio.vue -->
<template>
    <section class="portfolio">
      <!-- Ajoutez ici le contenu principal de votre portefolio, comme vos projets, compétences, etc. -->
      <body>
        <div class="content">
          <div class="text">
        <h1> Hello ! <br>
          I'm <a>Melissa Lacheb</a>
        </h1>
        <p>I'm a student in computer engineering at EFREI Paris.</p>
        </div>
      <div class="image">
        <img :src="myPic" alt="Beautiful picture of myself" />
      </div>
        </div>
        <button @click="scroll"> Get to know me </button>
    </body>
    </section>
</template>
  
  <script>
  import myPic from './assets/profile_pic.png'
  import Elipse from './assets/elipse.png'
  import Education from './Education.vue'

  export default {
    name: 'Portfolio',
    data() {
      return {
        myPic,
        Elipse
      }
    },

    components :{
      Education
    },

    methods : {
      scroll() {
        const Education = document.getElementById('Education');
        Education.scrollIntoView({behavior: 'smooth'});
            }
    }
  };
  </script>
  
  <style scoped>
  .portfolio {
    background-color: #ECE5D9;
    padding: 30px;
    font-family: Lora;}

   h1 {
    font-family: 'Brasika Display';
    font-size : 56px;
    margin-top : 10%;
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
      margin : 4%;
    }

    button {
      background-color: #69bde7;
      color: #ECE5D9;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 12px;
      margin-top : 50px;
      margin-left : 50px;
    }

    p {
      font-family: 'inter';
      font-size : 20px;
    }

  </style>