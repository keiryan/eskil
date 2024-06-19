<template>
  <div
    class="border border-black rounded-full w-fit px-2 my-4 hover:bg-black cursor-pointer transition-all duration-300 ease-in-out"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <MoveRight
      :color="hovered ? 'white' : 'black'"
      class="transition-all duration-300 ease-in-out"
    />
  </div>
</template>

<script setup>
import { MoveRight } from "lucide-vue-next";
</script>

<script>
export default {
  name: "EnterBubble",
  data() {
    return {
      hovered: false,
    };
  },
};
</script>

<style></style>
