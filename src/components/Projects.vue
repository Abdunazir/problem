<template>
  <div class="back">
    <div class="container">
    <div class="project">
      <h2 class="project_title">Recent projects</h2>
      <div class="rectangel"></div>

      <div class="project_cards">
        <div class="card">
          <img :src="img1" alt="" srcset="" />
          <h2 class="card_title">woods</h2>
          <p class="card_des">Photography</p>
        </div>

        <div class="card">
          <img :src="img2" alt="" srcset="" />
          <h2 class="card_title">path</h2>
          <p class="card_des">Website • Photography</p>
        </div>

        <div class="card">
          <img :src="img3" alt="" srcset="" />
          <h2 class="card_title">darkness</h2>
          <p class="card_des">Website</p>
        </div>

        <div class="card">
          <img :src="img4" alt="" srcset="" />
          <h2 class="card_title">waves</h2>
          <p class="card_des">Photography</p>
        </div>

        <div class="card">
          <img :src="img5" alt="" srcset="" />
          <h2 class="card_title">drops</h2>
          <p class="card_des">Website</p>
        </div>

        <div class="card">
          <img :src="img6" alt="" srcset="" />
          <h2 class="card_title">ocean</h2>
          <p class="card_des">Website</p>
        </div>

        <div class="card">
          <img :src="img7" alt="" srcset="" />
          <h2 class="card_title">town</h2>
          <p class="card_des">Website</p>
        </div>

        <div class="card">
          <img :src="img8" alt="" srcset="" />
          <h2 class="card_title">mountain</h2>
          <p class="card_des">Website</p>
        </div>

        <div class="card">
          <img :src="img9" alt="" srcset="" />
          <h2 class="card_title">camera</h2>
          <p class="card_des">Website</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "../assets/IMAGE (21).jpg";
import img2 from "../assets/IMAGE (22).jpg";
import img3 from "../assets/IMAGE (23).jpg";
import img4 from "../assets/IMAGE (24).jpg";
import img5 from "../assets/IMAGE (25).jpg";
import img6 from "../assets/IMAGE (26).jpg";
import img7 from "../assets/IMAGE (27).jpg";
import img8 from "../assets/IMAGE (28).jpg";
import img9 from "../assets/IMAGE (29).jpg";
</script>

<style lang="scss" scoped>

// .container1 {
//     width: 1440px;
// }
.back {
  background: #f5f5f5;
}

.project {
  text-align: center;
  padding: 69px 3%;
}

.project_title {
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
  margin: 28px auto 0 auto;
  background: rgba(0, 0, 0, 0.09);
  width: 80px;
  height: 2px;
  flex-shrink: 0;
}

.project_cards {
  display: flex;
  //   width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 43px;
}

.card {
  width: 30%;
  padding-bottom: 15px;
  text-align: center;
  transition: all 0.2s ease;

  background: #fff;
}

.card:hover {
  scale: 1.05;
  box-shadow: 0px 20px 55px 0px rgba(0, 0, 0, 0.08);
}

.card_title {
  color: #333;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  text-transform: uppercase;
  margin-top: 19px;
}

.card_des {
  color: #333;
  text-align: center;
  font-family: Vollkorn;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-top: 4px;
  line-height: 20px; /* 142.857% */
}

@media (max-width: 992px) {
  .project {
    text-align: center;
    padding: 69px 3%;
  }

  .project_title {
    font-size: 23px;
    line-height: 36px; /* 156.522% */
  }

  .rectangel {
    margin: 28px auto 0 auto;
    width: 80px;
    height: 2px;
  }

  .project_cards {
    display: flex;
    //   width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 43px;
  }

  .card {
    width: 32%;
    padding-bottom: 15px;
  
  }

  .card_title {
    font-size: 15px;
    line-height: 20px; /* 125% */
    margin-top: 19px;
  }

  .card_des {
    font-size: 14px;

    margin-top: 4px;
    line-height: 20px; /* 142.857% */
  }
}

@media (max-width: 786px) {
  .project {
    text-align: center;
    padding: 40px 3%;
  }

  .project_title {
    font-size: 21px;
    line-height: 36px; /* 156.522% */
  }

  .rectangel {
    margin: 25px auto 0 auto;
    width: 70px;
    height: 2px;
  }

  .project_cards {
    display: flex;
    //   width: 100%;
    // justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 35px;
  }

  .card {
    width: 45%;
    padding-bottom: 12px;
  
  }

  .card_title {
    font-size: 14px;
    margin-top: 15px;
  }

  .card_des {
    font-size: 12px;
    margin-top: 3px;
  }
}

@media (max-width: 576px) {
  .project {
    text-align: center;
    padding: 30px 3%;
  }

  .project_title {
    font-size: 17px;
    line-height: 36px; /* 156.522% */
  }

  .rectangel {
    margin: 20px auto 0 auto;
    width: 70px;
    height: 2px;
  }

  .project_cards {
    display: flex;
    //   width: 100%;
    // justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
  }

  .card {
    width: 45%;
    padding-bottom: 1px;
  
  }

  .card_title {
    font-size: 12px;
    margin-top: 10px;
  }

  .card_des {
    font-size: 10px;
    margin-top: 1px;
  }
}

@media (max-width: 447px) {
  .project {
    text-align: center;
    padding: 30px 3%;
  }

  .project_title {
    font-size: 15px;
    line-height: 36px; /* 156.522% */
  }

  .rectangel {
    margin: 13px auto 0 auto;
    width: 60px;
    height: 2px;
  }

  .project_cards {
    display: flex;
    //   width: 100%;
    // justify-content: start;
    // flex-wrap: wrap;x
    gap: 10px;
    margin-top: 30px;
    // margin: 0 auto;
  }

  .card {
    width: 45%;
    padding-bottom: 1px;
  
  }

  .card_title {
    font-size: 12px;
    margin-top: 10px;
  }

  .card_des {
    font-size: 10px;
    margin-top: 1px;
  }
}
</style>
