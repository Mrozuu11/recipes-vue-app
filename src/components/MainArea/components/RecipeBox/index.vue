<template>
  <div class="recipe-box">
    <div class="recipe" v-for="recipe in recipes" :key="recipe.idMeal">
      <img
        class="recipe__img"
        :src="recipe.strMealThumb"
        :alt="recipe.strMeal"
      />
      <FavouriteButton :meal-id="recipe.idMeal" />
      <div class="recipe__title">{{ recipe.strMeal }}</div>
    </div>
  </div>
</template>

<script>
import FavouriteButton from "@/components/MainArea/components/RecipeBox/components/FavouriteButton/index.vue";
export default {
  name: "RecipeBox",
  props: {
    recipes: {
      required: true,
    },
  },
  components: { FavouriteButton },
};
</script>

<style lang="scss" scoped>
.recipe-box {
  padding: 3%;
  width: 75%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  row-gap: 3vh;
  column-gap: 3vw;

  .recipe {
    position: relative;
    border: solid 1px black;
    border-radius: 10px;
    height: 290px;

    .recipe__img {
      width: 100%;
      height: 80%;
      object-fit: cover;
    }

    .recipe__title {
      padding: 1em;
      text-align: center;
      text-transform: uppercase;
    }
  }
}
</style>
