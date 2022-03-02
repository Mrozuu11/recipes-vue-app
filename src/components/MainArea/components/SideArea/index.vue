<template>
  <div class="side-wrapper">
    <div class="side-item category">
      <div class="text">Category</div>
      <div class="box">
        <FilterButton
          @click="handleCategoryClick(category)"
          v-for="category in categories"
          :key="category"
          :label="category"
        />
      </div>
    </div>
    <div class="side-item area">
      <div class="text">Area</div>
      <div class="box">
        <FilterButton
          @click="handleAreaClick(area)"
          v-for="area in areas"
          :key="area"
          :label="area"
        />
      </div>
    </div>
    <div class="side-item tags">
      <div class="text">Tags</div>
      <div class="box">
        <FilterButton
          @click="handleTagClick(tag)"
          v-for="tag in tags"
          :key="tag"
          :label="tag"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilterButton from "@/components/MainArea/components/SideArea/components/FilterButton/index.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SideArea",
  components: { FilterButton },
  props: {
    categories: {
      type: Set,
      default: () => [],
    },
    areas: {
      type: Set,
      default: () => [],
    },
    tags: {
      type: Set,
      default: () => [],
    },
  },
  methods: {
    ...mapActions([
      "updateSelectedCategories",
      "updateSelectedAreas",
      "updateSelectedTags",
    ]),
    handleCategoryClick(category) {
      if (this.selectedCategories.includes(category)) {
        this.updateSelectedCategories([
          ...this.selectedCategories.filter(
            (selectedCategory) => selectedCategory !== category
          ),
        ]);
      } else {
        this.updateSelectedCategories([...this.selectedCategories, category]);
      }
    },
    handleAreaClick(area) {
      if (this.selectedAreas.includes(area)) {
        this.updateSelectedAreas([
          ...this.selectedAreas.filter((selectedArea) => selectedArea !== area),
        ]);
      } else {
        this.updateSelectedAreas([...this.selectedAreas, area]);
      }
    },
    handleTagClick(tag) {
      console.log(tag);
      if (this.selectedTags.includes(tag)) {
        this.updateSelectedTags([
          ...this.selectedTags.filter((selectedTag) => selectedTag !== tag),
        ]);
      } else {
        this.updateSelectedTags([...this.selectedTags, tag]);
      }
    },
  },
  computed: {
    ...mapGetters(["selectedCategories", "selectedAreas", "selectedTags"]),
  },
};
</script>

<style lang="scss" scoped>
.side-wrapper {
  text-align: left;
  width: 19%;
  background: rgb(183, 183, 183);
  padding: 3% 2%;

  .side-item {
    padding-bottom: 15%;

    .text {
      font-size: 30px;
      padding-bottom: 8%;
    }

    .box {
      width: 100%;
      height: 150px;
      border: solid 1px black;
      border-radius: 10px;
    }
  }
}
</style>
