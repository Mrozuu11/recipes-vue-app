<template>
  <!-- v-if expanded -> expand the favourites list (absoulte position), on click -> querysearch = strMeal + reset all filters-->
  <div
    class="favbar"
    @mouseover="expanded = true"
    @mouseleave="expanded = false"
  >
    {{ expanded }}
    <div class="favbar__text">FAVOURITES</div>
    <div class="favbar__btn">
      <font-awesome-icon :icon="['far', 'heart']" size="2x" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FavouritesBar",
  data() {
    return {
      expanded: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.favbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 29%;
  border: solid 0.5px black;
  border-radius: 9px;
  padding: 1em;
  font-size: 14px;

  .favbar__text,
  .favbar__btn {
    margin-left: auto;
  }
}
</style>
