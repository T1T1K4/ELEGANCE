<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center justify-between px-4 py-2 border rounded-[10px] bg-white hover:bg-gray-50"
    >
      <span>{{ selectedSort || 'Ordenar por' }}</span>
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
          v-for="sort in sortOptions"
          :key="sort.value"
          @click="selectSort(sort)"
          class="block w-full px-4 py-2 text-left hover:bg-gray-100"
        >
          {{ sort.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['sortChange']);
const isOpen = ref(false);
const selectedSort = ref('');

const sortOptions = [
  { label: 'Mais recentes', value: '' },
  { label: 'Menor preço', value: 'price-asc' },
  { label: 'Maior preço', value: 'price-desc' },
  { label: 'Nome A-Z', value: 'name-asc' },
  { label: 'Nome Z-A', value: 'name-desc' }
];

function selectSort(sort) {
  selectedSort.value = sort.label;
  emit('sortChange', sort.value);
  isOpen.value = false;
}
</script>
