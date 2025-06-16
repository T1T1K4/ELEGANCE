<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <button @click="$router.back()" class="mb-4 sm:mb-6 text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2 text-sm sm:text-base">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Back
      </button>

      <div v-if="product" class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 relative">
            <div class="aspect-w-4 aspect-h-3 md:aspect-w-3 md:aspect-h-4">
              <img :src="product.thumbnail" 
                :alt="product.title" 
                class="w-full h-full object-cover object-center" />
            </div>
          </div>
          <div class="p-4 sm:p-6 md:p-8 md:w-1/2">
            <div class="mb-4 sm:mb-6">
              <span class="inline-block px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                {{ product.category }}
              </span>
              <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{{ product.title }}</h1>
              <p class="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 sm:mb-6">${{ product.price }}</p>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">{{ product.description }}</p>
              <button @click="addToCart(product)" 
                class="w-full md:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="flex justify-center items-center h-48 sm:h-64">
        <div class="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Seção de Produtos Aleatórios -->
      <div class="mt-8 sm:mt-12 md:mt-16">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Other Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div v-for="randomProduct in randomProducts" 
            :key="randomProduct.id" 
            class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
            @click="navigateToProduct(randomProduct.id)">
            <div class="relative">
              <div class="aspect-w-1 aspect-h-1">
                <img :src="randomProduct.thumbnail" 
                  :alt="randomProduct.title" 
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="absolute top-2 right-2">
                <span class="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                  ${{ randomProduct.price }}
                </span>
              </div>
            </div>
            <div class="p-3 sm:p-4">
              <h3 class="font-semibold text-gray-900 text-sm sm:text-base mb-2 line-clamp-2">{{ randomProduct.title }}</h3>
              <button @click.stop="addToCart(randomProduct)" 
                class="w-full bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api';
import { useCartStore } from '../store/cart';

const router = useRouter();
const props = defineProps({ id: String });
const product = ref(null);
const randomProducts = ref([]);
const cartStore = useCartStore();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

async function navigateToProduct(productId) {
  try {
    await router.push(`/product/${productId}`);
    await fetchProduct();
    scrollToTop();
  } catch (error) {
    console.error('Erro ao navegar para o produto:', error);
  }
}

async function fetchProduct() {
  try {
    const res = await api.get(`/products/${props.id}`);
    product.value = res.data;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    product.value = null;
  }
}

async function fetchRandomProducts() {
  try {
    const res = await api.get('/products?limit=100');
    const allProducts = res.data.products.filter(p => p.id !== parseInt(props.id));
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    randomProducts.value = shuffled.slice(0, 4);
  } catch (error) {
    console.error('Erro ao buscar produtos aleatórios:', error);
    randomProducts.value = [];
  }
}

function addToCart(product) {
  cartStore.addToCart(product);
}

watch(() => props.id, async (newId) => {
  if (newId) {
    await fetchProduct();
    await fetchRandomProducts();
    scrollToTop();
  }
});

onMounted(async () => {
  if (props.id) {
    await fetchProduct();
    await fetchRandomProducts();
    scrollToTop();
  }
});
</script>
