<template>
  <div class="navbar">
    <button class="navbar__btn">
      <font-awesome-icon :icon="['fa', 'bars']" size="3x" />
    </button>
    <div class="navbar__components">
      <SearchBar />
      <FavouritesBar />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/NavBar/components/SearchBar/index.vue";
import FavouritesBar from "@/components/NavBar/components/FavouritesBar/index.vue";
export default {
  name: "NavBar",
  components: { SearchBar, FavouritesBar },
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 1em 0;
  background: rgb(254, 255, 140);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .navbar__btn {
    padding: 1em;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .navbar__components {
    width: 72%;
    display: flex;
    flex-wrap: wrap;
    gap: 3vw;
    /* justify-content: space-between; */
    padding-right: 3%;
  }
}
</style>
