<!-- Header.vue -->
<template>
    <header>
      
      <nav class="nav">
        <div class="logo">
        <img src="..\src\assets\starburst-four-point-icon.svg" alt="Starburst icon" />
        <h1> Melissa Lacheb </h1>
      </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Experiences</a></li>
          <li><a href="/">Get in touch!</a></li>
        </ul>
        </nav>
    </header>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  /* Ajoutez des styles CSS spécifiques à l'en-tête ici */
  header {
    background-color: #ECE5D9;
    padding: 1rem;
    font-family: Lora;
    width : 100vw;
  }

  ul {
    display: flex;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    float : right;
    margin : 30px;
    font-family : 'inter';

  }

  li {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 15px;
    margin : 40px;
  }

  img {
    display : flex;
    float : left;
    margin : 25px;
  }

  h1 {
    font-family : 'Brasika Display';
    font-size: 20px;
    margin-top : 25px;
    float : left;
  }
  
  </style>
  