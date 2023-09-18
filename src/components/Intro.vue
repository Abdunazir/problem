<template>
  <div class="con">
    <div class="intro">
      <h1 class="intro_title">
        Making brands stand out <br />
        is our obsession
      </h1>
      <div class="rectangel"></div>
      <p class="intro_des">Let us help your brand stand out.</p>
      <!-- <img class="x" :src="x" alt="" srcset=""> -->
    </div>
  </div>
  <div class="con2">
    <!-- <div class="x"></div> -->
    <p class="con2_des">
      Minimalist is a full-service digital creative agency located in Ontorio
      Canada. We focus on design, consulting, technology, and photography. We’ve
      been building unique digital products, platforms, and experiences for the
      past 6 years. Let us help your company grow.
    </p>
    <button class="con2_btn">Get in Touch</button>
  </div>
</template>

<script setup>
import x from "../assets/X.png";
</script>

<style lang="scss" scoped>
.con {
  margin-top: 87px;
  background-image: url("../assets/head_background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.intro {
  padding: 105px 0 101px 0;
}

.intro_title {
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 44px;
  font-style: normal;
  font-weight: 400;
  line-height: 55px; /* 125% */
  text-transform: uppercase;
}

.intro_des {
  color: rgba(255, 255, 255, 0.81);
  text-align: center;
  font-family: Vollkorn;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  margin-top: 25px;
}

.rectangel {
  margin: 0 auto;
  width: 80px;
  height: 2px;
  flex-shrink: 0;
  background: #fff;
  margin-top: 28px;
}

.x {
  position: absolute;
  top: 468px;
  left: 650px;
  // margin: 0 0 50% 200px
  // top:300px;
}

.con2 {
  background: #fefec9;
  text-align: center;
  padding: 60px 0;
}

.con2_des {
  color: #47474f;
  text-align: center;
  font-family: Vollkorn;
  font-size: 18px;
  font-style: normal;
  padding: 0 250px;
  font-weight: 400;
  line-height: 25px; /* 138.889% */

}

.con2_btn {
  color: #47474f;
  text-align: center;
  font-family: Vollkorn;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  background-color: transparent;
  margin-top: 40px;
  line-height: 20px; /* 125% */
  border: 1px solid #47474f;
  padding: 13px 34px 20px 34px;
}

@media (max-width: 992px) {
  .intro {
    padding: 80px 0;
  }
  .intro_title {
    font-size: 40px;
  }

  .con2_des {
    font-size: 16px;
    padding: 0 150px;
  }

  @media (max-width: 786px) {
    .intro {
    padding: 60px 0;
  }
  .intro_title {
    font-size: 33px;
  line-height: 45px; /* 125% */

  }

  .con2_des {
    font-size: 18px;
    padding: 0 150px;
  }

  .con2_btn {
  color: #47474f;
  text-align: center;
  font-family: Vollkorn;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  background-color: transparent;
  margin-top: 40px;
  line-height: 20px; /* 125% */
  border: 1px solid #47474f;
  padding: 10px 30px 15px 30px;
}
  }

  @media (max-width: 576px) {
    .con{
        margin-top: 67px;
    }
    .intro {
    padding: 40px 0;
  }
  .intro_title {
    font-size: 25px;
  line-height: 35px; /* 125% */

  }

  .intro_des{
    margin-top: 20px;

  }

  .con2{
  padding: 40px 0;
    
  }

  .con2_des {
    font-size: 16px;
    padding: 0 50px;
  }

.rectangel {
margin-top: 20px;
}
  .con2_btn {
  color: #47474f;
  text-align: center;
  font-family: Vollkorn;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  background-color: transparent;
  margin-top: 20px;
  line-height: 20px; /* 125% */
  border: 1px solid #47474f;
  padding: 10px 25px 12px 25px;
}
  }

  @media (max-width: 447px) {
    .con{
        margin-top: 67px;
    }
    .intro {
    padding: 40px 0;
  }
  .intro_title {
    font-size: 23px;
  line-height: 30px; /* 125% */

  }

  .intro_des{
    margin-top: 20px;

  }

  .con2{
  padding: 30px 0;
    
  }

  .con2_des {
    font-size: 14px;
    padding: 0 50px;
  line-height: 20px; /* 138.889% */

  }

.rectangel {
margin-top: 15px;
}
  .con2_btn {
  color: #47474f;
  text-align: center;
  font-family: Vollkorn;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  background-color: transparent;
  margin-top: 10px;
  line-height: 20px; /* 125% */
  border: 1px solid #47474f;
  padding: 7px 20px 10px 20px;
}
  }
}
</style>
