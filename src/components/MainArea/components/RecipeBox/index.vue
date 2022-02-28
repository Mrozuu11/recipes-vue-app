<template>
  <div class="recipe-box">
    <div class="recipe" v-for="recipe in recipes" :key="recipe.idMeal">
      <img
        class="recipe__img"
        :src="recipe.strMealThumb"
        :alt="recipe.strMeal"
      />
      <div class="recipe__title">{{ recipe.strMeal }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeBox",
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

<style lang="scss" scoped>
.recipe-box {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  row-gap: 4vh;
  column-gap: 3vw;

  .recipe {
    border: solid 1px black;
    border-radius: 10px;
    height: auto;

    .recipe__img {
      width: 100%;
    }

    .recipe__title {
      padding: 1em;
      text-align: center;
    }
  }
}
</style>
