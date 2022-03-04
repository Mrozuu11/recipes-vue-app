<template>
  <div
    :class="['favbar', expanded && checkFavourites ? 'expanded' : '']"
    @mouseover="expanded = true"
    @mouseleave="expanded = false"
  >
    <div class="favbar__text">FAVOURITES</div>
    <div class="favbar__btn">
      <font-awesome-icon :icon="['far', 'heart']" size="2x" />
    </div>

    <div class="fav-dropdown" v-if="expanded && checkFavourites">
      <FavouritesDropdown
        v-for="recipe in favourites"
        :key="recipe.id"
        :favourite-recipe="recipe"
        @click="searchFavourite(recipe)"
      />
    </div>
  </div>
</template>

<script>
import FavouritesDropdown from "@/components/NavBar/components/FavouritesBar/components/FavouritesDropdown/index.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FavouritesBar",
  components: { FavouritesDropdown },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    ...mapActions(["updateMealsQuery"]),
    searchFavourite(recipe) {
      console.log("click");
      return this.updateMealsQuery(recipe.strMeal);
    },
  },
  computed: {
    ...mapGetters(["favourites"]),
    checkFavourites() {
      if (this.favourites.length === 0) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.favbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 29%;
  border: solid 0.5px black;
  border-radius: 8px;
  padding: 1em;
  font-size: 14px;

  .favbar__text,
  .favbar__btn {
    margin-left: auto;
  }
  .fav-dropdown::-webkit-scrollbar {
    display: none;
  }
  .fav-dropdown {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .fav-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 500px;
    overflow: scroll;
    border: 0.5px solid black;
    border-top: none;
    border-radius: 0 0 8px 8px;
    background: white;
    padding: 20px;
    z-index: 1;
  }
}
.expanded {
  background: white;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
}
</style>
