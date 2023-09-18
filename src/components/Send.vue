<template>
    <div class="back">
<div class="container">
    <section>
        <form class="form" action="">
            <input class="name cl" type="name" placeholder="Name">
            <input class="email cl" type="email" placeholder="Email">
            <input class="budget " type="text" placeholder="Budget">
            <input class="des" type="text" placeholder="Describe your ptoject...">
        </form>
        <button class="send_btn">Send Message</button>
        <div class="logo"><img :src="logo" alt="" srcset=""></div>
        <p>Minimal Template made in Webflow. All rights reserved.</p>
    </section>
</div>
    </div>
</template>

<script setup>
import logo from "../assets/logo_white.png"
</script>

<style lang="scss" scoped>
.back{
    background: #000;
}

section{
    padding: 79px 0 45px 0;
    text-align: center;
}

.form{
    width: 50%;
    margin: 0 auto;
}

input{
    border: none;
    width: 100%;
    padding: 18px 0 17px 30px;
    color: #FFF;
// text-align: center;
font-family: Vollkorn;
font-size: 17px;
font-style: italic;
font-weight: 400;
line-height: 22px; /* 129.412% */
}

.name, .budget{
    background: rgba(255, 255, 255, 0.18);
}

.email, .des{
    background: rgba(255, 255, 255, 0.20);
}

.des{
    padding-bottom: 88px;
}

.send_btn{

    background-color: transparent;
    color: #8BCAC3;
text-align: center;
font-family: Vollkorn;
font-size: 17px;
font-style: italic;
font-weight: 400;
line-height: 22px; /* 129.412% */
border: 1px solid #7EC4BD;
padding: 15px 60px;
margin-top: 20px;
}

.logo{
margin-top: 35px;}

p{
    color: rgba(255, 255, 255, 0.40);
text-align: center;
font-family: Vollkorn;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 146.667% */
margin-top: 15px;
}

@media (max-width: 992px) {
    section{
    padding: 79px 0 45px 0;
    text-align: center;
}

.form{
    width: 50%;
    margin: 0 auto;
}

input{
    width: 100%;
    padding: 18px 0 17px 30px;
// text-align: center;
font-size: 17px;

font-weight: 400;
line-height: 22px; /* 129.412% */
}



.des{
    padding-bottom: 68px;
}

.send_btn{

font-size: 17px;
padding: 15px 60px;
margin-top: 20px;
}

.logo{
margin-top: 35px;}

p{

font-size: 15px;
line-height: 22px; /* 146.667% */
margin-top: 15px;
}
}

@media (max-width: 786px) {
    section{
    padding: 69px 0 45px 0;
}

.form{
    width: 70%;
    margin: 0 auto;
}

input{
    width: 100%;
    padding: 18px 0 17px 25px;
// text-align: center;
font-size: 15px;

font-weight: 400;
line-height: 22px; /* 129.412% */
}



.des{
    padding-bottom: 65px;
}

.send_btn{

font-size: 15px;
padding: 13px 50px;
margin-top: 17px;
}

.logo{
margin-top: 30px;}

p{

font-size: 13px;
line-height: 22px; /* 146.667% */
margin-top: 13px;
}
}
@media (max-width: 447px) {
    section{
    padding: 55px 0 35px 0;
}

.form{
    width: 70%;
    margin: 0 auto;
}

input{
    width: 100%;
    padding: 15px 0 17px 20px;
// text-align: center;
font-size: 13px;

font-weight: 400;
line-height: 22px; /* 129.412% */
}



.des{
    padding-bottom: 40px;
}

.send_btn{

font-size: 13px;
padding: 12px 30px;
margin-top: 15px;
}

.logo{
margin-top: 25px;}

p{

font-size: 11px;
line-height: 22px; /* 146.667% */
margin-top: 12px;
}
}

</style>