<template>
  <div class="w-full mt-8 flex flex-col">
    <div class="flex w-full justify-center">
      <MainGalleryProductCategoryTitle
        :currentProductCategory="currentProductCategory"
        @change-product-category="changeProductCategory"
        v-for="category in productCategories"
        :key="category"
        :category="category"
      />
    </div>
    <div class="w-full grid grid-cols-3 max-md:grid-cols-2 gap-4 my-4">
      <MainGalleryBox v-for="box in boxes" :box="box" :key="box.title" />
    </div>
  </div>
</template>

<script setup></script>

<script>
import MainGalleryBox from "./MainGalleryBox.vue";
import Underline from "./Underline.vue";
import MainGalleryProductCategoryTitle from "./MainGalleryProductCategoryTitle.vue";

export default {
  name: "MainGallery",
  components: {
    MainGalleryBox,
    Underline,
    MainGalleryProductCategoryTitle,
  },
  data() {
    return {
      hovered: false,
      currentProductCategory: "All products",
      productCategories: [
        "All products",
        "Chairs & Stools",
        "Coffee Tables",
        "lamps & pendants",
      ],
      boxes: [
        {
          image: "../assets/images/ceiling lamp 2.png",
          alt: "ceiling lamp",
          title: "Cool Sofa 2",
          price: "$200",
          customClass: "-translate-y-4",
          alert: "New",
        },
        {
          image: "../assets/images/oak drawer.png",
          alt: "oak landing chair",
          title: "Cool Sofa 2",
          price: "$200",
        },
        {
          image: "../assets/images/floor lamp.png",
          alt: "oak landing chair",
          title: "Cool Sofa 2",
          price: "$200",
        },
        {
          image: "../assets/images/Modern Bucket Chair.png",
          alt: "oak landing chair",
          title: "Cool Sofa 2",
          price: "$200",
        },
        {
          image: "../assets/images/Modern Chair 3.png",
          alt: "oak landing chair",
          title: "Cool Sofa 2",
          price: "$200",
        },
        {
          image: "../assets/images/modern coffee table.png",
          alt: "oak landing chair",
          title: "Cool Sofa 2",
          price: "$200",
          alert: "Sale",
        },
      ],
    };
  },

  methods: {
    changeProductCategory(category) {
      this.currentProductCategory = category;
    },
  },
};
</script>

<style scoped></style>
