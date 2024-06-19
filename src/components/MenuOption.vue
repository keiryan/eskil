<template>
  <li class="cursor-pointer listItem flex flex-col items-center">
    <div class="flex px-1 items-center">
      {{ name }}
      <ChevronDown size="14" />
    </div>
    <!-- Underline -->
    <div
      class="w-0 h-[2px] bg-black listItem-underline transition-all duration-300 ease-in-out"
    />
  </li>
</template>

<script setup>
import { ChevronDown } from "lucide-vue-next";
</script>

<script>
export default {
  name: "MenuOption",
  props: {
    name: String,
  },
};
</script>

<style scoped>
.listItem:hover .listItem-underline {
  /* background-color: #b; */
  width: 100%;
}
</style>
