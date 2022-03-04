<template>
  <div class="fav-recipe" @click="handleClickOnFavourite">
    <img
      :src="favouriteRecipe.strMealThumb"
      :alt="favouriteRecipe.strMeal"
      class="fav-recipe__img"
    />
    <div class="fav-recipe__title">{{ favouriteRecipe.strMeal }}</div>
  </div>
</template>

<script>
export default {
  name: "FavouritesDropdown",
  props: {
    favouriteRecipe: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClickOnFavourite() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.fav-recipe {
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  cursor: pointer;

  .fav-recipe__img {
    width: 25%;
    /* height: 5%; */
    /* object-fit: cover; */
    border-radius: 8px;
  }

  .fav-recipe__title {
    text-transform: uppercase;
    font-size: 14px;
  }
}
</style>
