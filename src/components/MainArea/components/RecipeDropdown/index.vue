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
      <!--  <div class="recipe-manual__ingredients">
        <h3 class="header">Ingredients + Measure</h3>
        <div class="text">{{ recipe.strInstructions }}</div>
      </div> -->
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
  position: fixed;
  width: 92%;
  left: 4%;
  margin: 35px 0;
  min-height: 350px;
  max-height: 350px;
  border: 0.5px solid black;
  border-radius: 8px;
  display: flex;
  z-index: 1;

  .video-container {
    .recipe-video {
      min-width: 30vw;
      min-height: 100%;
    }
  }
  .recipe-manual {
    overflow: scroll;
    margin-left: auto;
    padding: 25px 50px;
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
