<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <router-link to="/" class="text-xl font-light tracking-wider text-gray-900">ELEGANCE</router-link>
          <div class="flex items-center gap-4">
            <router-link to="/cart" class="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="text-sm font-medium">{{ cartStore.items.length }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="flex-1">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { useCartStore } from './store/cart';
import Footer from './components/Footer.vue';

const cartStore = useCartStore();
</script>
