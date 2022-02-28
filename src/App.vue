<template>
  <div id="app">
    <NavBar />
    <MainArea />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/index.vue";
import MainArea from "@/components/MainArea/index.vue";
export default {
  name: "App",
  components: { NavBar, MainArea },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
