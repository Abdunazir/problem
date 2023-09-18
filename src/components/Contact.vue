<template>
  <div class="back">
    <div class="container">
      <div class="contact">
        <h1>LET’s Get in touch</h1>
        <div class="rectangel"></div>
        <div class="contacts">
          <div class="con">
            <img class="touch" :src="location" alt="" srcset="" />
            <h2>MEET US IN PERSON</h2>
            <p>
              8776 Juniper Street <br />Unit #204 <br />Merriweather, Ontorio
              <br />Canada
            </p>
          </div>
          <div class="con">
            <img class="touch" :src="email" alt="" srcset="" />
            <h2 class="mt1">The traditional way</h2>
            <p>
              Email us <br />contact@minimal.com <br /><br />Contact form
              <br />Scroll down
            </p>
          </div>
          <div class="con">
            <img class="touch" :src="love" alt="" srcset="" />
            <h2 class="mt2">Let’s get social</h2>
            <div class="ss">
                <div class="social">
                  <img :src="facebook" alt="" srcset="" />
                  Facebook
                </div>
                <div class="social">
                  <img :src="twitter" alt="" srcset="" />
                  Twitter
                </div>
                <div class="social">
                  <img :src="linkedin" alt="" srcset="" />
                  Linkdin
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import back from "../assets/back.jpg";
import email from "../assets/email.png";
import love from "../assets/love.png";
import location from "../assets/location.png";

import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
</script>

<style lang="scss" scoped>
.back {
  background-image: url("../assets/back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.contact {
  padding: 69px 0;
}

h1 {
  color: #333;
  text-align: center;
  font-family: Montserrat;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 156.522% */
  text-transform: uppercase;
}

.rectangel {
  background: rgba(0, 0, 0, 0.09);
  width: 80px;
  height: 2px;
  flex-shrink: 0;
  margin: 28px auto 0 auto;
}

.contacts {
  display: flex;
  justify-content: center;
  //   align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
}

.con {
    width: 32%;
  padding: 10px 70px;
  text-align: center;
//   border: 1px solid black;
}

.touch {
  margin: 0 auto;
}

h2 {
  color: #333;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  text-transform: uppercase;
  margin-top: 26px;
}

.mt1{
margin-top: 35px;
}

.mt2{
margin-top: 30px;
}

p {
  color: #1c1c1c;
  text-align: center;
  font-family: Vollkorn;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 129.412% */
  margin-top: 20px;
}

.social {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  color: #1c1c1c;
  text-align: center;
  font-family: Vollkorn;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  margin: 0 auto;;
//   line-height: 22px;
}

.ss{
    margin-top: 20px;
    margin-left: 50px;
}

@media (max-width: 992px) {

    .con {
    width: 32%;
  padding: 5px 0px;
  text-align: center;
//   border: 1px solid black;
}

.contact {
  padding: 50px 0;
}

h1{
  font-size: 20px;

}

.rectangel {
  margin: 23px auto 0 auto;

}

.contacts{
    margin-top: 30px;
}

h2 {
  font-size: 12px;
  margin-top: 20px;

}

p{
  font-size: 15px;
  margin-top: 15px;

}

.social{
  font-size: 15px;

}

}

@media (max-width: 786px) {

    .con {
    width: 32%;
  padding: 5px 0px;
  text-align: center;
//   border: 1px solid black;
}

.contact {
  padding: 40px 0;
}

h1{
  font-size: 17px;

}

.rectangel {
  margin: 20px auto 0 auto;

}

.contacts{
    margin-top: 25px;
}

h2 {
  font-size: 10px;
  margin-top: 15px;

}

p{
  font-size: 13px;
  margin-top: 12px;
  line-height: 18px; /* 129.412% */

}

.social{
  font-size: 12px;

}

}

@media (max-width: 576px) {

    .con {
    width: 32%;
  padding: 5px 0px;
  text-align: center;
//   border: 1px solid black;
}

.contact {
  padding: 35px 0;
}

h1{
  font-size: 15px;

}

.rectangel {
  margin: 15px auto 0 auto;

}

.contacts{
    margin-top: 20px;
}

h2 {
  font-size: 8px;
  margin-top: 12px;

}

p{
  font-size: 7px;
  margin-top: 10px;
  line-height: 12px; /* 129.412% */

}

.social{
  font-size: 10px;

}

.mt1{
margin-top: 25px;
}

.mt2{
margin-top: 20px;
}
.ss{
    margin-top: 10px;
    margin-left: 20px;
}

}
</style>
