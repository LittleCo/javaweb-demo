<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App"
};
</script>
<style>
/* * {
  border: 1px solid black;
} */
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #fff;
}
#app * {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
}
</style>