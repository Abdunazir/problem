<template>
  <div>
    <div class="container">
      <div class="team">
        <h1>our team</h1>
        <div class="rectangel"></div>
        <div class="team_members">
          <div class="member">
            <img class="img" :src="img1" alt="" srcset="" />
            <h2 class="name">Ron Swanson</h2>
            <div class="position">Founder</div>
            <div class="social">
              <img :src="twitter" alt="" srcset="" />
              <img :src="linkedin" alt="" srcset="" />
              <img :src="mail" alt="" srcset="" />
            </div>
          </div>

          <div class="member">
            <img class="img" :src="img2" alt="" srcset="" />
            <h2 class="name">Julia Depish</h2>
            <div class="position">Marketing</div>
            <div class="social">
              <img :src="twitter" alt="" srcset="" />
              <img :src="linkedin" alt="" srcset="" />
              <img :src="mail" alt="" srcset="" />
            </div>
          </div>

          <div class="member">
            <img class="img" :src="img3" alt="" srcset="" />
            <h2 class="name">Danny Devry</h2>
            <div class="position">Designer</div>
            <div class="social">
              <img :src="insta" alt="" srcset="" />
              <img :src="twitter" alt="" srcset="" />
              <img :src="be" alt="" srcset="" />
              <img :src="top" alt="" srcset="" />
              <img :src="mail" alt="" srcset="" />
            </div>
          </div>

          <div class="member">
            <img class="img" :src="img4" alt="" srcset="" />
            <h2 class="name">Lisa Smith</h2>
            <div class="position">Developer</div>
            <div class="social">
              <img :src="facebook" alt="" srcset="" />
              <img :src="twitter" alt="" srcset="" />
              <img :src="mail" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "../assets/IMAGE (30).jpg";
import img2 from "../assets/IMAGE (31).jpg";
import img3 from "../assets/IMAGE (32).jpg";
import img4 from "../assets/IMAGE (33).jpg";

import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import be from "../assets/be.png";
import top from "../assets/top.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
</script>

<style lang="scss" scoped>
.team {
  padding: 68px 0;
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

.team_members {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
}

.member {
  width: 24%;
  // border:1px solid black;
  transition: all 0.2s ease;
  padding-bottom: 20px;
  margin-top: 10px;
}

.member:hover {
  scale: 1.05;
  box-shadow: 0px 20px 55px 0px rgba(0, 0, 0, 0.08);
}
.img {
  width: 100%;
  padding: 0 10px;
}

.social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 21px;
}

.name {
  color: #333;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  text-transform: uppercase;
  margin-top: 20px;
}

.position {
  color: #333;
  text-align: center;
  font-family: Vollkorn;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}

.social {
  margin-top: 17px;
}

.icon {
  color: black;
}

@media (max-width: 992px) {
  .member {
    width: 45%;
  }
}

@media (max-width: 786px) {
  .member {
    width: 40%;
  }
}

@media (max-width: 576px) {
  .member {
    width: 40%;
  }

  .team {
  padding: 40px 0;
}

  h1 {
    font-size: 20px;
    font-weight: 400;
  }

  .rectangel {
    width: 70px;
  margin: 22px auto 0 auto;

  }

.team_members {
  margin-top: 30px;

}

.name {
  font-size: 13px;
  margin-top: 15px;

}

.position {

  font-size: 12px;
  
}

.social {
  margin-top: 14px;
}

}

@media (max-width: 447px) {
  .member {
    width: 45%;
  }

  .team {
  padding: 30px 0;
}

  h1 {
    font-size: 18px;
    font-weight: 400;
  }

  .rectangel {
    width: 70px;
  margin: 15px auto 0 auto;

  }

.team_members {
  margin-top: 20px;

}

.name {
  font-size: 10px;
  margin-top: 10px;

}

.position {

  font-size: 9px;
  
}

.social {
  margin-top: 14px;
  padding: 0 50px;
}

.social img{
    width: 10px;
}

}
</style>
