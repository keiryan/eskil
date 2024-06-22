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
    <div class="bg-white w-full md:hidden drop-shadow-md">
      <div
        class="backdrop-blur-sm w-screen h-screen fixed brightness-50 top-0 left-0 hover:cursor-pointer transition-all duration-300 ease-in-out"
        :class="open ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        @click="toggleMenu(false)"
      />
      <!-- Hamburger button -->
      <div
        class="flex items-center gap-[6.5rem] w-full justify-end fixed top-0 right-0 p-5 px-6 z-[1] transition-all duration-300 ease-in-out"
        :class="!open ? 'backdrop-blur-md bg-[#10172ACB]' : ''"
      >
        <div
          class="flex gap-2 transition-all duration-300 ease-in-out"
          :class="!open && 'opacity-0 pointer-events-none translate-x-24'"
        >
          <Search size="20" />
          <input
            class="outline-none bg-transparent"
            placeholder="Search here"
          />
        </div>
        <Hamburger @toggle-menu="toggleMenu" />
      </div>
      <div
        class="top-0 h-screen w-0 flex p-4 md:hidden bg-white transition-all duration-300 ease-in-out fixed overflow-hidden py-24 flex flex-col gap-8"
        :class="open ? 'w-96 right-0' : 'w-0 -right-12'"
      >
        <ul class="w-full">
          <MenuOption
            v-for="option in menuOptions"
            :key="option"
            :name="option"
          />
        </ul>
        <button
          class="flex justify-center items-center gap-2 px-2 bg-[#10172ACB] hover:bg-[#10172A] text-white py-2 rounded-full transition-all duration-300 ease-in-out"
        >
          View Cart
          <div><ShoppingCart size="20" /></div>
        </button>
      </div>
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
      this.open = open;
    },
  },
};
</script>

<style></style>
