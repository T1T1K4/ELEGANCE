<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col">
      <!-- Conteúdo Principal -->
      <main class="flex-1">
        <!-- Barra de Pesquisa e Ordenação -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <SearchBar @search="onSearch" class="w-full sm:w-1/2" />
          <FilterOrderGroup @filter="onFilterChange" @order="onSortChange" />
        </div>

        <!-- Grid de Produtos -->
        <ProductGrid :products="sortedProducts" />

        <!-- Paginação -->
        <div class="mt-8">
          <Pagination
            :currentPage="currentPage"
            :totalItems="totalProducts"
            :itemsPerPage="limit"
            @changePage="page => currentPage = page"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import api from '../services/api';
import ProductGrid from '../components/ProductGrid.vue';
import Pagination from '../components/Pagination.vue';
import SearchBar from '../components/SearchBar.vue';
import FilterOrderGroup from '../components/FilterOrderGroup.vue';

const products = ref([]);
const searchQuery = ref('');
const currentPage = ref(1);
const totalProducts = ref(0);
const limit = 12;
const sortCriteria = ref('');
const selectedCategory = ref('');

async function fetchProducts() {
  try {
    let url;
    if (selectedCategory.value) {
      url = `/products/category/${selectedCategory.value}`;
    } else if (searchQuery.value) {
      url = `/products/search?q=${encodeURIComponent(searchQuery.value)}`;
    } else {
      url = `/products?limit=${limit}&skip=${(currentPage.value - 1) * limit}`;
    }

    const res = await api.get(url);
    products.value = res.data.products;
    totalProducts.value = res.data.total;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    products.value = [];
    totalProducts.value = 0;
  }
}

function onSearch(query) {
  searchQuery.value = query;
  currentPage.value = 1;
}

function onFilterChange(category) {
  selectedCategory.value = category;
  currentPage.value = 1;
}

function onSortChange(criteria) {
  sortCriteria.value = criteria;
}

watch([searchQuery, currentPage, selectedCategory], fetchProducts);

onMounted(() => {
  fetchProducts();
});

const sortedProducts = computed(() => {
  if (!sortCriteria.value) return products.value;
  
  const sorted = [...products.value];
  
  switch (sortCriteria.value) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'name-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sorted;
  }
});
</script>
