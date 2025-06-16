<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center justify-between px-4 py-2 border rounded-[10px] bg-white hover:bg-gray-50"
    >
      <span>{{ selectedOrder || 'Sort by' }}</span>
      <svg
        class="w-5 h-5 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute z-10 w-full mt-1 bg-white border rounded-[10px] shadow-lg"
    >
      <div class="py-1">
        <button
          v-for="order in orders"
          :key="order.value"
          @click="selectOrder(order)"
          class="block w-full px-4 py-2 text-left hover:bg-gray-100"
        >
          {{ order.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['order']);
const isOpen = ref(false);
const selectedOrder = ref('');

const orders = [
  { label: 'Highest Price', value: 'price-desc' },
  { label: 'Lowest Price', value: 'price-asc' },
  { label: 'Name A-Z', value: 'name-asc' },
  { label: 'Name Z-A', value: 'name-desc' }
];

function selectOrder(order) {
  selectedOrder.value = order.label;
  emit('order', order.value);
  isOpen.value = false;
}
</script> 