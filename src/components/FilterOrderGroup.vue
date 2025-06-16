<template>
  <div class="flex gap-4">
    <div class="relative" ref="dropdownRef">
      <select
        v-model="selectedCategory"
        @change="handleCategoryChange"
        class="px-4 py-2 border rounded-[10px] bg-white hover:bg-gray-50 w-full"
      >
        <option value="" disabled>Filter by category</option>
        <option value="">All</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ formatCategory(category) }}
        </option>
      </select>
    </div>
    <OrderDropdown @order="handleOrder" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import OrderDropdown from './OrderDropdown.vue';

const emit = defineEmits(['filter', 'order']);
const selectedCategory = ref('');
const categories = ref([
  'smartphones',
  'laptops',
  'fragrances',
  'skincare',
  'groceries',
  'home-decoration',
  'furniture',
  'tops',
  'womens-dresses',
  'womens-shoes',
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
  'sunglasses',
  'automotive',
  'motorcycle',
  'lighting'
]);

function formatCategory(category) {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function handleCategoryChange() {
  emit('filter', selectedCategory.value);
}

function handleOrder(value) {
  emit('order', value);
}
</script> 