<template>
  <li
    class="cursor-pointer listItem flex flex-col items-center max-md:divider-bottom"
  >
    <div class="flex px-1 items-center max-md:w-full max-md:justify-between py-4">
      {{ name }}
      <ChevronDown size="14" />
    </div>
    <!-- Underline -->
    <div
      class="w-0 h-[2px] bg-black listItem-underline transition-all duration-300 ease-in-out max-md:hidden"
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
