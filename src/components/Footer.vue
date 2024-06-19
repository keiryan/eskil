<template>
  <div class="w-full flex justify-between pt-6 divider max-md:flex-col pb-4">
    <FooterList v-for="list in lists" :list="list" />
  </div>
</template>

<script setup>
import { ChevronDown } from "lucide-vue-next";
</script>

<script>
import FooterListItem from "./FooterListItem.vue";
import FooterList from "./FooterList.vue";
export default {
  name: "Footer",
  data() {
    return {
      lists: [
        {
          title: "Company",
          items: [
            "What We Do",
            "Available Services",
            "Latest Posts",
            "Careers",
            "FAQ's",
          ],
        },
        {
          title: "Customer Service",
          items: [
            "Help & Contact Us",
            "Return & Refunds",
            "Online Stores",
            "Terms & Conditions",
          ],
        },
        {
          title: "Social Media",
          items: ["Twitter", "Instagram", "Facebook", "Pinterest"],
        },
        {
          title: "Profile",
          items: ["My Account", "Checkout", "Order Tracking", "Help & Support"],
        },
      ],
    };
  },
  components: {
    FooterListItem,
  },
};
</script>

<style></style>
