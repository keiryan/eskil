<template>
  <div class="w-screen h-screen flex justify-center overflow-y-auto">
    <!-- Middle Div -->
    <div class="w-full max-w-screen-xl p-4 max-md:py-8 flex flex-col relative">
      <div class="w-full flex justify-between max-md:hidden">
        <div class="flex items-center gap-1">
          <Sparkle size="14" />
          <div class="italic">10% for registered users</div>
        </div>

        <div class="flex gap-6 max-md:hidden">
          <ul class="flex gap-2 cursor-pointer">
            <li>FB</li>
            <li>IG</li>
            <li>TW</li>
          </ul>
          <div class="flex items-center gap-0.5 cursor-pointer">
            English <ChevronDown size="14" />
          </div>
        </div>
      </div>
      <h1 class="text-6xl py-8 font-['Italiana'] flex justify-center uppercase">
        Eskil<sup class="text-lg">®</sup>
      </h1>
      <NavBar class="z-[1]" />
      <LandingGallery :LargeImage="{ title: 'Cool Sofa', artist: 'Keiryan' }" />

      <div class="flex justify-center">
        <div class="max-w-xl text-center text-xl py-8">
          Nam excepturi aspernatur ut ratione est et et. Beatae libero quasi
          mollitia. Doloremque ut officia repellendus omnis commodi laboriosam.
          Totam ipsa quod iste id beatae consequatur consequatur
        </div>
      </div>
      <MainGallery />
      <ListGallery
        :list="[
          {
            date: '1.23.24',
            description:
              'Modern bed furniture with a minimalist design. It is made of high-quality materials and is available in different sizes and colors.',
            image: 'src/assets/images/modern-bed.png',
          },
          {
            date: '2.25.24',
            description:
              'Modern bed furniture with a minimalist design. It is made of high-quality materials and is available in different sizes and colors.',
            image: 'src/assets/images/couch-gallery.png',
          },
          {
            date: '3.26.24',
            description:
              'Modern bed furniture with a minimalist design. It is made of high-quality materials and is available in different sizes and colors.',
            image: 'src/assets/images/list tub.png',
          },
        ]"
      />
      <Subscribe />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { Sparkle, ChevronDown } from "lucide-vue-next";
</script>

<script>
import NavBar from "./components/NavBar.vue";
import LandingGallery from "./components/LandingGallery.vue";
import MainGallery from "./components/MainGallery.vue";
import Footer from "./components/Footer.vue";
import Subscribe from "./components/Subscribe.vue";
import ListGallery from "./components/ListGallery.vue";
export default {
  name: "App",
  components: {
    NavBar,
    LandingGallery,
    MainGallery,
    Footer,
    Subscribe,
    ListGallery,
  },
};
</script>
