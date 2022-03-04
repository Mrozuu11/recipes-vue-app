<template>
  <div class="recipe-box">
    <div
      :style="
        isRecipeClicked(recipe) ? `margin-bottom: ${elementHeight}px` : ''
      "
      class="recipe"
      v-for="recipe in recipes"
      :key="recipe.idMeal"
    >
      <img
        class="recipe__img"
        :src="recipe.strMealThumb"
        :alt="recipe.strMeal"
      />
      <FavouriteButton :recipe="recipe" />
      <div
        class="recipe__title"
        @click="
          setExpandedRecipeId(
            recipe.idMeal === expandedRecipeId ? null : recipe.idMeal
          )
        "
      >
        {{ recipe.strMeal }}
      </div>

      <RecipeDropdown
        v-if="isRecipeClicked(recipe)"
        :recipe="recipe"
        ref="recipeDropdown"
      />
    </div>
  </div>
</template>

<script>
import FavouriteButton from "@/components/MainArea/components/RecipeBox/components/FavouriteButton/index.vue";
import RecipeDropdown from "@/components/MainArea/components/RecipeDropdown/index.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RecipeBox",
  props: {
    recipes: {
      required: true,
    },
  },
  components: { FavouriteButton, RecipeDropdown },
  data() {
    return {
      elementHeight: 0,
    };
  },
  methods: {
    ...mapActions(["setExpandedRecipeId"]),
    isRecipeClicked(recipe) {
      if (this.expandedRecipeId === recipe.idMeal) {
        return true;
      }
      return false;
    },
  },
  computed: {
    ...mapGetters(["expandedRecipeId"]),
  },
  watch: {
    expandedRecipeId(expandedRecipeId) {
      if (expandedRecipeId) {
        this.$nextTick(function () {
          this.elementHeight = this.$refs.recipeDropdown[0].clientHeight + 40;
        });
      } else {
        this.elementHeight = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe-box {
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: translate(0);
  padding: 3%;
  width: 75%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  row-gap: 3vh;
  column-gap: 3vw;

  .opacity-regular {
    opacity: 1;
  }

  .opacity-low {
    opacity: 0.5;
  }
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
      cursor: pointer;
    }
  }
}
</style>
