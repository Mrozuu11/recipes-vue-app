<template>
  <div class="expanded-recipe" ref="dropdownRef">
    <div class="video-container">
      <iframe
        class="recipe-video"
        :src="recipe.strYoutube.replace('watch?v=', 'embed/')"
        frameborder="0"
        allowfullscreen
      >
        Your browser does not support the video tag.
      </iframe>
    </div>
    <div class="recipe-manual">
      <div class="recipe-manual__instruction">
        <h3 class="header">Instruction</h3>
        <div class="text">{{ recipe.strInstructions }}</div>
      </div>
      <div class="recipe-manual__ingredients">
        <h3 class="header">Ingredients + Measure</h3>
        <div class="text">{{ recipe.strInstructions }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecipeDropdown",
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  computed: {
    clientHeight() {
      return this.$refs.dropdownRef.clientHeight;
    },
  },
};
</script>
<style lang="scss" scoped>
.expanded-recipe {
  position: absolute;
  width: 70.5vw;
  top: 100%;
  left: 0;
  right: 0;
  margin: 25px 0;
  max-height: 350px;
  border: 0.5px solid black;
  border-radius: 8px;
  display: flex;
  z-index: 1;
  /* flex-wrap: wrap; */

  .video-container {
    .recipe-video {
      min-width: 30vw;
      min-height: 100%;
    }
  }
  .recipe-manual {
    overflow: scroll;
    margin-left: auto;
    padding: 0 25px;
    text-align: left;
  }
  .recipe-manual::-webkit-scrollbar {
    display: none;
  }
  .recipe-manual {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
}
</style>
