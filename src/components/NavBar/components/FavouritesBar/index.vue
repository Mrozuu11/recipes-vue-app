<template>
  <div class="favbar">
    <div class="favbar__text">FAVOURITES</div>
    <div class="favbar__btn">
      <font-awesome-icon :icon="['far', 'heart']" size="2x" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FavouritesBar",
};
</script>

<style lang="scss" scoped>
.favbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5em;
  width: 20%;
  border: solid 0.5px black;
  border-radius: 9px;
  padding: 1em 0;
  padding-left: 10%;
  font-size: 14px;
}
</style>
