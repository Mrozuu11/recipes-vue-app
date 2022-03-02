<template>
  <button class="filter-btn" @click="handleClick">
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
  margin: 5px;
  background: white;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 14px;
  padding: 5px 10px;
}
</style>
