<template>
  <div id="app">
    <div class="app">
    <music-header class="header"/>
    <music-wrapper class="wrapper"/>
    </div>
  </div>
</template>

<script>
import MusicHeader from './components/MusicHeader.vue'
import MusicWrapper from './components/MusicWrapper.vue'


export default {
  name: 'App',
  components: {
   MusicHeader,
   MusicWrapper
  }
}
</script>

<style>
#app {
 max-width: 1500px;
 width: 100%;
}

* {
  outline: none;
  box-sizing: border-box;
}

div {
  display: block;
}

body {
  display: flex;
  font-family: var(--body-font);
  background-image: url(assets/images/background.jpg);
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5em;
}

:root {
    --theme-bg-color: rgba(16 18 27 / 40%);
    --border-color: rgba(113 119 144 / 25%);
    --theme-color: #f9fafb;
    --inactive-color: rgb(113 119 144 / 78%);
    --body-font: "Poppins", sans-serif;
    --hover-menu-bg: rgba(12 15 25 / 30%);
    --content-title-color: #999ba5;
    --content-bg: rgb(146 151 179 / 13%);
    --button-inactive: rgb(249 250 251 / 55%);
    --dropdown-bg: #21242d;
    --dropdown-hover: rgb(42 46 60);
    --popup-bg: rgb(22 25 37);
    --search-bg: #14162b;
    --overlay-bg: rgba(36, 39, 59, 0.3);
    --scrollbar-bg: rgb(1 2 3 / 40%);
}

html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar-thumb {
    background: var(--scrollbar-bg);
    border-radius: 10px;
}

.music-bg video {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.header {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 58px;
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    padding: 0 30px;
    white-space: nowrap;
}

.wrapper {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
}

/* .nav {
  display: block;
  float: left;
  width: 240px;
}

li {
list-style: none;
}

.nav a {
    display: inline-block;
    font-size: 20px;
    text-decoration: none;
    color: black;
    width: 200px;
    height: 50px;
    text-indent: 2em;
    line-height: 50px;
}

.nav a:hover {
    background-color: aquamarine;
}

 .nav h5 {
  text-indent: 2em;  
  height: 30px;
  line-height: 30px;
}

.show {
  display: block;
  float: left;
  width: 960px;
} */

</style>
