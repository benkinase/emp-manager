<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>

<style>
nav {
  margin-bottom: 10px;
}
body {
  background: rgb(241, 246, 247);
}
input[type="text"]:not(.browser-default):focus:not([readonly]),
input[type="email"]:not(.browser-default):focus:not([readonly]),
input[type="password"]:not(.browser-default):focus:not([readonly]),
label[for="email"]:not(.browser-default):focus:not([readonly]) {
  border-color: black;
  box-shadow: none;
  background: rgb(232, 235, 238);
}
</style>
