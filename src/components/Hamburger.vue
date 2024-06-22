<template>
  <div class="relative p-2 hover:cursor-pointer" @click="toggleMenu">
    <div
      class="w-4 h-0.5 absolute transition-all duration-300 ease-in-out left-0"
      :class="open ? 'transform rotate-45 top-1.5 bg-black' : 'top-0 bg-white'"
    />
    <div
      class="w-4 h-0.5 bg-white absolute top-1.5 transition-all duration-300 ease-in-out left-0"
      :class="open && 'opacity-0'"
    />
    <div
      class="w-4 h-0.5 absolute transition-all duration-300 ease-in-out left-0"
      :class="open ? 'transform -rotate-45 top-1.5 bg-black' : 'top-3 bg-white'"
    />
  </div>
</template>

<script setup></script>

<script>
export default {
  name: "Hamburger",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleMenu() {
      this.open = !this.open;
      this.$emit("toggle-menu", this.open);
    },
  },
};
</script>

<style scoped></style>
