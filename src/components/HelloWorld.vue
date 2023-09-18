<template>
  <nav>
    <div class="">
      <div class="container">
        <div class="box fixed-top">
          <div
            class="logo d-flex justifiy-content-center align-items-center gap-3"
          >
            <a href="#"><img class="logo1" :src="logo" alt="" /></a>
            <a class="minimal" href="#">Minimal</a>
          </div>
          <ul class="d-none d-md-flex">
            <li><a class="aa" :href="Intro">process</a></li>
            <li><a class="aa" href="#">projects</a></li>
            <li><a class="aa" href="#">team</a></li>
            <li><a class="aa" :href="Contact">contact</a></li>
          </ul>
          <div class="icon d-flex d-md-none">
            <icon name="menu"></icon>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from "../assets/IMAGE (2).png";
import minimal from "../assets/Minimal.png";

import Intro from "./Intro.vue";
import Process from "./Process.vue"
import Project from "./Projects.vue"
import Team from "./Team.vue"
import Comments from "./Comments.vue"
import Contact from "./Contact.vue"
import Send from "./Send.vue"
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald&family=Vollkorn&display=swap");

nav {
  top: 0;
}

.box {
  // width: 100%;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
    box-shadow: 0px 3px 10px 0px rgb(187, 181, 181);
  background-color: #fff;
  z-index: 999
}

// .logo {
//   gap: 10px;
// }

.logo a:nth-child(2) {
  padding: 31px 0 31px 0;
}

.minimal {
  color: #333;
  text-decoration: none;
  font-family: Oswald;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 172.727% */
  text-transform: uppercase;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  gap: 34px;
}

ul li a {
  text-decoration: none;
  color: #404040;
  list-style-type: none;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  text-transform: uppercase;
}

.icon {
  display: none;
}

@media (max-width: 992px) {
  .logo a img {
    width: 55px;
  }

  // ul li a {
  //   font-size: 1px;
  // }

  .aa {
    font-size: 10px;
  }
}
@media (max-width: 786px) {
  .logo a:nth-child(2) {
  padding: 25px 0 ;
}

.logo1{
  width: 10px;
}

}

@media (max-width: 576px) {
  .logo a img {
    width: 45px;
  }
    .logo a:nth-child(2) {
  padding: 15px 0 ;
}

  .logo a:nth-child(2) img {
    width: 50px;
  }

.minimal {
  font-size: 20px;

}
 
}
</style>
