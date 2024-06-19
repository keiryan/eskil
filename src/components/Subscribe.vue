<template>
  <div class="w-full flex flex-col items-center justify-center py-48">
    <div class="text-center max-w-xl text-xl py-8">
      Subscribe to our newsletter and receive the latest product news, stories,
      invitations to exclusive design events and much, much more.
    </div>
    <div class="flex border border-black p-2 my-4 w-full justify-between max-w-xl">
      <input
        class="outline-none border-none placeholder-black flex-1"
        type="text"
        placeholder="Enter your email"
      />
      <div
        class="cursor-pointer border border-black px-2 rounded-full flex gap-1 ml-2 subscribe-button"
      >
        <div class="subscribe translate-x-4 transition-transform duration-300 ease-in-out">Subscribe</div> <ArrowUpRight class="transition-all duration-300 ease-in-out rotate-[45deg] subscribe-arrow opacity-0 -translate-x-1 " />
      </div>
    </div>
    <div class="text-xs uppercase">
      By subscribing you accept our
      <a class="underline" href="#">privacy policy</a>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpRight } from "lucide-vue-next";
</script>

<script>
export default {
  name: "Subscribe",
};
</script>

<style scoped>
.subscribe-button:hover .subscribe {
    transform: translateX(0);
}

.subscribe-button:hover .subscribe-arrow {
    opacity: 1;
    transform: translateX(0) rotate(45deg);
    /* translate: translateX(0); */
}
</style>
