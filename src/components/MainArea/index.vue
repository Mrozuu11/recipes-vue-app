<template>
  <div class="content-wrapper">
    <div class="components">
      <SideArea :categories="categories" :areas="areas" :tags="tags" />
      <RecipeBox :recipes="filteredMeals" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SideArea from "@/components/MainArea/components/SideArea/index.vue";
import RecipeBox from "@/components/MainArea/components/RecipeBox/index.vue";
export default {
  name: "MainArea",
  components: { SideArea, RecipeBox },
  methods: {
    ...mapActions(["fetchMeals"]),
  },
  computed: {
    ...mapGetters([
      "fetchedMeals",
      "mealsQuery",
      "selectedCategories",
      "selectedAreas",
      "selectedTags",
    ]),
    queriedMeals() {
      if (
        !this.fetchedMeals.isFetching &&
        this.fetchedMeals.response.status === 200
      ) {
        return this.fetchedMeals.response.data.meals.filter((meal) =>
          meal.strMeal.toLowerCase().includes(this.mealsQuery.toLowerCase())
        );
      }
      return [];
    },
    categories() {
      return new Set(this.filteredMeals.map((meal) => meal.strCategory));
    },
    areas() {
      return new Set(this.filteredMeals.map((meal) => meal.strArea));
    },
    tags() {
      return new Set(
        this.filteredMeals
          .filter((meal) => !!meal.strTags)
          .map((meal) => meal.strTags.split(","))
          .flat()
          .map((strTag) => strTag.trim())
      );
    },
    filteredMeals() {
      return this.queriedMeals.filter((meal) => {
        return (
          (!this.selectedCategories.length ||
            this.selectedCategories.includes(meal.strCategory)) &&
          (!this.selectedAreas.length ||
            this.selectedAreas.includes(meal.strArea)) &&
          (!this.selectedTags.length ||
            this.selectedTags.some((selectedTag) =>
              meal.strTags?.includes(selectedTag)
            ))
        );
      });
    },
  },
  async mounted() {
    await this.fetchMeals();
    if (!localStorage.favourites) {
      localStorage.favourites = "[]";
    }
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  .components {
    display: flex;
  }
}
</style>
