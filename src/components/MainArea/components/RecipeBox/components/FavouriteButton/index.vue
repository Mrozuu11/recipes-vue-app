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
    mealId: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(["updateFavourites"]),
    handleAddToFavourite() {
      if (this.favourites.includes(this.mealId)) {
        this.updateFavourites(
          this.favourites.filter(
            (favouriteMealId) => favouriteMealId !== this.mealId
          )
        );
      } else {
        this.updateFavourites([...this.favourites, this.mealId]);
      }
    },
  },
  computed: {
    ...mapGetters(["favourites"]),
    isAddedToFavourite() {
      return this.favourites.includes(this.mealId);
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
