<template>
  <div>
    <div class="bg-[#F3F3F3] min-h-72 relative overflow-hidden p-4">
      <div v-if="box.alert" class="rounded-full border border-black px-2 w-fit">{{ box.alert }}</div>
      <div class="absolute w-full h-full top-0 left-0" :class="box.customClass">
        <img
          :src="box.image"
          :alt="box.alt"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
    <div class="flex justify-between mt-2">
      <div>{{ box.title }}</div>
      <div>{{ box.price }}</div>
    </div>
    <div class="mt-4 uppercase text-xs font-bold hover:cursor-pointer">
      Add to cart
    </div>
  </div>
</template>

<script setup></script>

<script>
export default {
  name: "MainGallery",
  props: {
    box: Object,
  },
};
</script>

<style></style>
