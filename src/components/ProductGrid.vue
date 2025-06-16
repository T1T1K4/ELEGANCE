<template>
  <div class="flex flex-wrap justify-center items-center gap-4 p-4">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
const props = defineProps({
  products: Array
});
</script>
