<template>
  <div class="searchbar">
    <div class="search-icon">
      <font-awesome-icon :icon="['fa', 'magnifying-glass']" size="lg" />
    </div>
    <input
      class="searchbar__input"
      type="search"
      placeholder="SEARCH"
      v-model="query"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SearchBar",
  methods: {
    ...mapActions(["updateMealsQuery"]),
  },
  computed: {
    ...mapGetters([
      "mealsQuery",
      "selectedCategories",
      "selectedAreas",
      "selectedTags",
    ]),
    query: {
      get() {
        return this.mealsQuery;
      },
      set(newQuery) {
        this.selectedCategories.length = 0;
        this.selectedAreas.length = 0;
        this.selectedTags.length = 0;
        return this.updateMealsQuery(newQuery);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.searchbar {
  border: solid 0.5px black;
  border-radius: 9px;
  padding: 1em 1em;
  display: flex;
  align-items: center;
  gap: 1em;
  width: 65%;

  .searchbar__input {
    background: inherit;
    border: none;
    outline: none;
    font-size: 14px;
    width: 100%;
  }
}
</style>
