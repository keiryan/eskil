<template>
  <div class="divider-bottom mt-8">
    <div v-for="item in list" class="flex items-center justify-between divider-top py-6">
      <div class="flex flex-col">
        <div>{{ item.date }}</div>
        <div class="text-xl max-w-lg pr-4">
          <!-- Description of bed furniture -->
          {{ item.description }}
        </div>
        <EnterBubble />
      </div>
      <img :src="item.image" alt="bed furniture" class="w-48 max-md:w-36" />
    </div>
  </div>
</template>

<script>
import EnterBubble from "./EnterBubble.vue";
export default {
  name: "ListGallery",
  props: {
    list: Array,
  },
  components: {
    EnterBubble,
  },
};
</script>

<style></style>
