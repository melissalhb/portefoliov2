<template>
 <section id="Education">
    <div class = "text">
    <h1>
        <img :src="cap" alt="school cap" width="50px" height="50px">
        Education
    </h1>
    <div class="content">
        <img src="..\src\assets\starburst-four-point-icon.svg" alt="Starburst icon " class="starIcon"/>
        <h2>2021-2026</h2>
        <a>EFREI Paris, IT engineering school</a>
        <p>Cycle ingénieur en software engineering</p>
        <img src="..\src\assets\starburst-four-point-icon.svg" alt="Starburst icon" class="starIcon"/>
        <img src="..\src\assets\starburst-four-point-icon.svg" alt="Starburst icon" class="starIcon"/>
    </div>
</div>
<img :src="resume" alt="Cool resume text" class = "resumeText">
 </section>
</template>

<script>
import './main.js'
import cap from '../src/assets/cap.svg'
import resume from '../src/assets/resumev2.svg'

export default {
    name: 'Education',
    data() {
        return {
            cap,
            resume,
        }
    }
};
</script>

<style scoped>
    section {
        background-color: #F2B6D6;
        height : 100vh;
        width : 100vw;
        padding :30px;
        font-family: Lora;
        }

    h1 {
        font-family: 'Brasika Display';
        font-size: 48px;
        position : relative;
        margin : 4%;
        }
    
    h2 {
        font-family: 'Brasika Display';
        font-size: 20px;
        position : relative;
        float : right;
        margin : 4%;
        }
    

    img {
        margin-right : 35px;
        margin-top : 15px;
        }

    .resumeText {
        display : flex;
        float : right;
        position: relative;
        margin-right : 5%;
        bottom : 500px;
    }

    a {
        font-display: 'Lora';
        font-size: 20px;
        font-weight: bold;
        
        
    }
    
    .starIcon {
        margin : 70px;
    }
</style>