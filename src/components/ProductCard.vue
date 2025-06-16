<template>
  <div
    @click="goToDetail"
    class="group border border-[#2c3e50]/10 rounded-xl shadow-md p-3 sm:p-4 flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300 bg-white hover:border-[#34495e]/20 relative overflow-hidden"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-[#2c3e50]/0 to-[#2c3e50]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <!-- Imagem do Produto -->
    <div class="aspect-w-1 aspect-h-1 mb-3">
      <img 
        :src="product.thumbnail" 
        :alt="product.title" 
        class="w-full h-full object-cover rounded-lg transform group-hover:scale-[1.02] transition-transform duration-300" 
      />
    </div>

    <!-- Informações do Produto -->
    <div class="flex-1">
      <h3 class="font-medium text-[#2c3e50] text-base sm:text-lg mb-1 group-hover:text-[#34495e] transition-colors duration-300 line-clamp-2">
        {{ product.title }}
      </h3>
      <p class="text-xs sm:text-sm text-[#7f8c8d] capitalize mb-2">{{ product.category }}</p>
    </div>

    <!-- Preço -->
    <div class="mt-auto pt-2 border-t border-[#ecf0f1]">
      <p class="text-lg sm:text-xl font-semibold text-[#2c3e50]">${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
  product: Object
});
const router = useRouter();
function goToDetail() {
  router.push({ name: 'product-detail', params: { id: props.product.id } });
}
</script>
