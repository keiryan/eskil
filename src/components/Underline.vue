<template>
  <div
    class="h-[2px] bg-black transition-all duration-300 ease-in-out"
    :class="hovered ? 'w-full' : 'w-0'"
  />
</template>

<script setup></script>

<script>
export default {
  name: "Underline",
  props: {
    hovered: Boolean,
  },
};
</script>

<style></style>
