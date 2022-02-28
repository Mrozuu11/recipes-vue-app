<template>
  <div class="content-wrapper">
    <RecipeBox />
  </div>
</template>

<script>
import RecipeBox from "@/components/MainArea/components/RecipeBox/index.vue";
export default {
  name: "MainArea",
  components: { RecipeBox },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  padding: 3%;
  padding-left: 25%;
}
</style>
