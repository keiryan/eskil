<template>
  <li
    class="py-0.5 cursor-pointer flex flex-col w-fit"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    {{ item }}
    <Underline :hovered="hovered" />
  </li>
</template>

<script>
import Underline from "./Underline.vue";
export default {
  name: "FooterListItem",
  props: {
    item: String,
  },
  components: {
    Underline,
  },
  data() {
    return {
      hovered: false,
    };
  },
};
</script>

<style></style>
