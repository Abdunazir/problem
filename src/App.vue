<template>
  <div>
    <Navbar />
    <Intro />
    <Process/>
    <Project/>
    <Team/>
    <Comments/>
    <Contact/>
    <Sendd/>
  </div>
</template>

<script setup>
import Navbar from "./components/HelloWorld.vue";
import Intro from "./components/Intro.vue";
import Process from "./components/Process.vue"
import Project from "./components/Projects.vue"
import Team from "./components/Team.vue"
import Comments from "./components/Comments.vue"
import Contact from "./components/Contact.vue"
import Sendd from "./components/Send.vue"
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}
</style>
