<template>
  <div class="flex flex-col">
    <h3
      class="pb-2 text-lg max-md:flex max-md:items-center justify-between cursor-pointer max-md:py-4 footer-list-title"
      @click="toggleOpen"
    >
      {{ list.title }}
      <ChevronDown
        size="16"
        class="transition-all duration-300 ease-in-out md:hidden"
        :class="isOpen ? '-scale-y-100' : ''"
      />
    </h3>
    <ul
      class="overflow-hidden max-md:divider-bottom transition-all duration-300 ease-in-out"
      :class="isOpen ? 'max-h-96' : 'max-md:max-h-0'"
    >
      <FooterListItem v-for="item in list.items" :item="item" />
    </ul>
  </div>
</template>

<script setup>
import { ChevronDown } from "lucide-vue-next";
</script>

<script>
import FooterListItem from "./FooterListItem.vue";
export default {
  name: "FooterList",
  props: {
    list: Object,
  },
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.footer-list-title {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
</style>
