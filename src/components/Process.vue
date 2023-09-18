<template>
  <div class="container">
    <div class="process">
      <div class="proc_title">How we make brands thrive</div>
      <div class="rectangel"></div>
      <div class="proc_cards">
        <div class="proc_card">
          <img :src="card1" alt="" srcset="" />
          <div class="card_info">
            <h2 class="card_title">SET a target</h2>
            <p class="card_des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>

        <div class="proc_card">
          <img :src="card2" alt="" srcset="" />
          <div class="card_info">
            <h2 class="card_title">design a solution</h2>
            <p class="card_des">
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
            </p>
          </div>
        </div>

        <div class="proc_card">
          <img :src="card3" alt="" srcset="" />
          <div class="card_info">
            <h2 class="card_title">track the progress</h2>
            <p class="card_des">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import card1 from "../assets/nishon2.jpg";
import card2 from "../assets/nishon3.jpg";
import card3 from "../assets/nishon4.jpg";
</script>

<style lang="scss" scoped>
.process {
  padding: 75px 0;
  text-align: center;
}

.proc_title {
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

.proc_cards {
  // width: 100px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0px;
}

.proc_card {
  width: 32%;
  text-align: center;
  padding: 0 20px 20px 20px;
  transition: all 0.2s ease;

  //   border:1px solid black
}

// .proc_card:hover {
//   scale: 1.05;
//   box-shadow: 0px 20px 55px 0px rgba(0, 0, 0, 0.08);
// }

img {
  width: 100%;
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
  margin-top: 38px;
}

.card_des {
  color: #333;
  text-align: center;
  font-family: Vollkorn;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 146.667% */
  margin-top: 20px;
}

@media (max-width: 992px) {
  .process {
    padding: 60px 0;
    text-align: center;
  }

  .proc_title {
    color: #333;
    text-align: center;
    font-family: Montserrat;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px; /* 156.522% */
    text-transform: uppercase;
  }

  .rectangel {
    margin: 26px auto 0 auto;
    background: rgba(0, 0, 0, 0.09);
    width: 80px;
    height: 2px;
    flex-shrink: 0;
  }

  .proc_cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 25px;
    gap: 20px;
  }

  .proc_card {
    width: 30%;
    text-align: center;
    padding: 0 10px 10px;
  }

  .card_title {
    color: #333;
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    text-transform: uppercase;
    margin-top: 30px;
  }

  .card_des {
    color: #333;
    text-align: center;
    font-family: Vollkorn;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 146.667% */
    margin-top: 20px;
  }
}

@media (max-width: 786px) {
  .process {
    padding: 50px 0;
    text-align: center;
  }

  .proc_title {
    color: #333;
    text-align: center;
    font-family: Montserrat;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px; /* 156.522% */
    text-transform: uppercase;
  }

  .rectangel {
    margin: 25px auto 0 auto;
    background: rgba(0, 0, 0, 0.09);
    width: 80px;
    height: 2px;
    flex-shrink: 0;
  }

  .proc_cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    // gap: 20px;
  }

  .proc_card {
    width: 30%;
    text-align: center;
    padding: 0 0px 0px;
  }

  .card_title {
    color: #333;
    text-align: center;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    text-transform: uppercase;
    margin-top: 20px;
  }

  .card_des {
    color: #333;
    text-align: center;
    font-family: Vollkorn;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 146.667% */
    margin-top: 13px;
  }
}

@media (max-width: 576px) {
  .process {
    padding: 30px 0;
    text-align: center;
  }

  .proc_title {
    color: #333;
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px; /* 156.522% */
    text-transform: uppercase;
  }

  .rectangel {
    margin: 20px auto 0 auto;
    background: rgba(0, 0, 0, 0.09);
    width: 70px;
    height: 2px;
    flex-shrink: 0;
  }

  .proc_cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    // gap: 20px;
  }

  .proc_card {
    width: 40%;
    text-align: center;
    padding: 0 0px 0px;
  }

  .card_title {
    color: #333;
    text-align: center;
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 125% */
    text-transform: uppercase;
    margin-top: 15px;
  }

  .card_des {
    color: #333;
    text-align: center;
    font-family: Vollkorn;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px; /* 146.667% */
    margin-top: 10px;
  }
}
</style>
