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
        <button id = "CV"> Download my CV ^^ </button>
    </body>
    </section>
</template>
  
  <script>
  /*import myPic from './assets/profile_pic.png'*/
  import Education from './Education.vue'
  import myPic from 'C:/Users/mella/Documents/portefoliov2/src/assets/profile_picture.png'

  export default {
    name: 'Portfolio',
    data() {
      return {
        myPic,
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
    padding: 50px;
    font-family: Lora;
    height : 80vh;  
  }

   h1 {
    font-family: 'Brasika Display';
    font-size : 56px;
    margin-top : 10%;
     }

   a {
  
    background-image: linear-gradient(45deg,#f5af19, #f57119, #f111c0, #b719f5, #116bf1, #b719f5, #f111c0, #f57119, #f5af19);
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
      margin-bottom: 0px;
    }

    button {
      background-color: #ECE5D9;
      color: #000000;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      cursor: pointer;
      border-radius: 40px;
      margin :50px;
    }

    p {
      font-family: 'inter';
      font-size : 20px;
    }

    .CV {
      color: #f111c0;
    }

  </style>

