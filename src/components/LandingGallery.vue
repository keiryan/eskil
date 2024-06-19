<template>
  <div class="w-full flex gap-4 py-8 max-md:flex-col">
    <!-- Large Image -->
    <div
      class="flex flex-col flex-[1.3] bg-[#F3F3F3] p-4 h-[30rem] overflow-hidden relative"
    >
      <div class="text-2xl">{{ LargeImage.title }}</div>
      <div>{{ LargeImage.artist }}</div>
      <img
        src="../assets/images/oak landing chair.png"
        alt="oak landing chair"
        class="translate-y-4"
      />
    </div>
    <!-- Small Images -->
    <div class="flex md:flex-col flex-1 gap-4">
      <div class="flex-1 bg-[#F3F3F3] p-4 min-h-48 relative overflow-hidden">
        <div class="absolute w-full h-full top-0 left-0 lamp-image max-md:left-12"></div>
        <div class="text-2xl">Cool Sofa 2</div>
        <div>Kyendee</div>
      </div>

      <div class="flex-1 bg-[#F3F3F3] p-4 min-h-48 relative overflow-hidden">
        <div class="absolute w-full h-full top-0 left-0 clock-image max-md:top-6"></div>
        <div class="text-2xl">Cool Sofa 2</div>
        <div>Evan</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingGallery",
  props: {
    LargeImage: Object,
    SmallImages: Array,
  },
};
</script>

<style scoped>

.lamp-image {
  background-image: url("../assets/images/ceiling lamp.png");
  background-size: contain;
  background-position: top 0% left 80%;
  background-repeat: no-repeat;
}

.clock-image {
  background-image: url("../assets/images/oak clock.png");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}
</style>
