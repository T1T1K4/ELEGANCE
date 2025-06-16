<template>
  <div class="flex justify-center gap-2 my-4">
    <button
      @click="changePage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
    >
      Anterior
    </button>
    <button
      v-for="page in totalPages"
      :key="page"
      @click="changePage(page)"
      :class="['px-3 py-1 rounded', currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200']"
    >
      {{ page }}
    </button>
    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
    >
      Próximo
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  currentPage: Number,
  totalItems: Number,
  itemsPerPage: Number
});
const emits = defineEmits(['changePage']);
const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));
function changePage(page) {
  if (page < 1 || page > totalPages.value) return;
  emits('changePage', page);
}
</script>
