<template>
  <div class="searchbar">
    <div class="search-icon">
      <font-awesome-icon :icon="['fa', 'magnifying-glass']" size="lg" />
    </div>
    <input class="searchbar__input" type="text" placeholder="SEARCH" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
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
  width: 62.5%;

  .searchbar__input {
    background: inherit;
    border: none;
    outline: none;
    font-size: 14px;
  }
}
</style>
