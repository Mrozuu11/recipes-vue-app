<template>
  <button class="filter-btn" @click="handleClick">
    <font-awesome-icon :icon="['fa', 'xmark']" size="lg" class="icon" />
    {{ label }}
  </button>
</template>

<script>
//add 'isSelected' function to category, area, tags (highlight when it's clicked)
export default {
  name: "FilterButton",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 5px;
  background: white;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 14px;
  padding: 7px 14px;

  .icon {
    margin-right: 5px;
  }
}
</style>
