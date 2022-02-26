<template>
  <div id="app">
    <div class="recipes" v-for="recipe in recipes" :key="recipe.idMeal">
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
      {{ recipe.strMeal }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      recipes: null,
    };
  },
  mounted() {
    this.$axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Soup")
      .then((response) => (this.recipes = response.data.meals));
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
