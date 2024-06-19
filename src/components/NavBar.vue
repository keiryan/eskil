<template>
  <div class="w-full">
    <div
      class="w-full flex justify-between py-4 divider-top divider-bottom max-md:hidden"
    >
      <div class="flex items-center gap-2">
        <Search size="20" />
        <div>Search</div>
      </div>
      <ul class="flex gap-4">
        <MenuOption
          v-for="option in menuOptions"
          :key="option"
          :name="option"
        />
      </ul>
      <div class="flex gap-2">
        <ShoppingCart />
        <div>Cart $0.00</div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div class="fixed top-0 right-0 bg-red-500 w-full md:hidden">
      <div
        class="backdrop-blur-sm w-screen h-screen fixed brightness-50 top-0 left-0 hover:cursor-pointer transition-all duration-300 ease-in-out"
        :class="open ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        @click="toggleMenu(false)"
      />
      <!-- Hamburger button -->
      <div class="flex justify-end w-full absolute top-0 right-0 p-4 px-6 z-[1] transition-all duration-300 ease-in-out" :class="!open && 'backdrop-blur-md bg-[#10172ACB]'">
        <Hamburger @toggle-menu="toggleMenu" />
      </div>
      <div
        class="h-screen right-0 w-0 flex p-4 md:hidden bg-red-500 transition-all duration-300 ease-in-out absolute overflow-hidden"
        :class="open ? 'w-96' : 'w-0 -right-12'"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { Search, ShoppingCart } from "lucide-vue-next";
</script>

<script>
import Hamburger from "./Hamburger.vue";
import MenuOption from "./MenuOption.vue";
export default {
  name: "NavBar",
  components: {
    Hamburger,
    MenuOption,
  },
  data() {
    return {
      menuOptions: ["Home", "Shop", "Pages", "Blog", "Portfolio"],
      open: false,
    };
  },
  methods: {
    toggleMenu(open) {
      console.log(open);
      this.open = open;
    },
  },
};
</script>

<style></style>
