<template>
  <div
    class="text-sm text-gray-500 uppercase p-2 cursor-pointer transition-colors duration-300 ease-in-out hover:text-black"
    :class="
      category === currentProductCategory ? 'text-black' : 'text-gray-500'
    "
    @click="changeProductCategory(category)"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    {{ category }}
    <Underline :hovered="hovered" />
  </div>
</template>

<script setup></script>

<script>
import Underline from "./Underline.vue";
export default {
  name: "MainGalleryProductCategoryTitle",
  props: {
    currentProductCategory: String,
    category: String,
  },
  components: {
    Underline,
  },
  methods: {
    changeProductCategory(category) {
      this.$emit("change-product-category", category);
    },
  },

  data() {
    return {
      hovered: false,
    };
  },
};
</script>

<style></style>
