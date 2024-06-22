<template>
  <div class="py-8">
    <div class="flex flex-col uppercase gap-2 py-8">
      <h3 class="text-xs">Inspiration</h3>
      <h2 class="text-2xl">Shop by room</h2>
    </div>
    <div class="flex gap-3 max-md:gap-16 max-md:flex-col">
      <InspirationImage v-for="box in boxes" :key="box.id" :box="box" />
    </div>
  </div>
</template>

<script setup></script>

<script>
import InspirationImage from "./InspirationImage.vue";
export default {
  name: "Inspiration",
  components: {
    InspirationImage,
  },
  data() {
    return {
      boxes: [
        {
          image: "modern kitchen.png",
          title: "Kitchen",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          id: 1,
        },
        {
          image: "modern couch.png",
          title: "Living Room",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          id: 2,
        },
        {
          image: "bed and wall.png",
          title: "Bedroom",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          id: 3,
        },
      ],
    };
  },
};
</script>

<style></style>
