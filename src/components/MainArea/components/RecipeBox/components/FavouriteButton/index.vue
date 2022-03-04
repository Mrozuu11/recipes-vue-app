<template>
  <div class="fav-btn-wrapper">
    <button
      @click="handleAddToFavourite"
      :class="['fav-btn', { selected: isAddedToFavourite }]"
    >
      <font-awesome-icon :icon="['far', 'heart']" size="2x" />
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FavouriteButton",
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["updateFavourites"]),
    handleAddToFavourite() {
      if (this.favourites.some((meal) => meal.idMeal === this.recipe.idMeal)) {
        this.updateFavourites([
          ...this.favourites.filter(
            (favouriteMeal) => favouriteMeal.idMeal !== this.recipe.idMeal
          ),
        ]);
      } else {
        this.updateFavourites([...this.favourites, this.recipe]);
      }
    },
  },
  computed: {
    ...mapGetters(["favourites"]),
    isAddedToFavourite() {
      return this.favourites.some((meal) => meal.idMeal === this.recipe.idMeal);
    },
  },
};
</script>

<style lang="scss" scoped>
.fav-btn-wrapper {
  .fav-btn {
    border: none;
    background: none;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 65%;
    left: 88%;
  }
  .selected {
    color: tomato;
  }
}
</style>
