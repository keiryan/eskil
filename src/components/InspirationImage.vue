<template>
  <div class="flex flex-col flex-1 gap-4">
    <div class="max-h-[36rem] overflow-hidden h-full">
      <img :src="getImageUrl(box.image)" alt="inspiration" class="h-full w-full" />
    </div>
    <div class="">
      <span class="uppercase">{{ box.title }} - </span
      >{{ box.description }}
    </div>
  </div>
</template>

<script setup>
import getImageUrl from "../utils/ImageGrabber.js";
</script>

<script>
export default {
  name: "InspirationImage",
  props: {
    box: Object,
  },
};
</script>

<style></style>
