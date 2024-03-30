<template>
 <section id="Education">
    <div class = "header">
    <h2>
        <img :src="cap" alt="school cap" width="50px" height="50px">
        Education
    </h2>
    <img :src="resume" alt="Cool resume text">

</div>
 </section>
</template>

<script>
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

    h2 {
        font-family: 'Brasika Display';
        font-size: 48px;
        position : relative;
        margin : 4%;
        }

    img {
        display : flex;
        float : left;
        margin-right : 35px;
        margin-top : 15px;
        }
</style>