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
export default {
  name: "FavouriteButton",
  props: {
    mealId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isAddedToFavourite: false,
    };
  },
  methods: {
    handleAddToFavourite() {
      const favourites = JSON.parse(localStorage.favourites);
      if (favourites.includes(this.mealId)) {
        this.isAddedToFavourite = false;
        localStorage.favourites = JSON.stringify(
          favourites.filter(
            (favouriteMealId) => favouriteMealId !== this.mealId
          )
        );
      } else {
        this.isAddedToFavourite = true;
        localStorage.favourites = JSON.stringify([...favourites, this.mealId]);
      }
    },
  },
  mounted() {
    this.isAddedToFavourite = JSON.parse(localStorage.favourites).includes(
      this.mealId
    );
  },
  /* computed: {
    isAddedToFavourite() {
      const favourites = JSON.parse(localStorage.favourites);
      return favourites.includes(this.mealId);
    },
  }, */
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
