<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Shopping Cart</h1>
        <button @click="$router.push('/')" class="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Continue Shopping
        </button>
      </div>

      <div v-if="!cartStore.items || cartStore.items.length === 0" class="text-center py-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h2 class="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
        <p class="text-gray-600 mb-4">Add some products to your cart to see them here</p>
        <button @click="$router.push('/')" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Browse Products
        </button>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="divide-y divide-gray-200">
              <div v-for="item in cartStore.items" :key="item.id" class="p-6 flex items-center gap-4">
                <img :src="item.thumbnail" :alt="item.title" class="w-24 h-24 object-cover rounded-lg" />
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900 mb-1">{{ item.title }}</h3>
                  <p class="text-gray-600 text-sm mb-2">${{ item.price }}</p>
                  <div class="flex items-center gap-4">
                    <div class="flex items-center border rounded-lg">
                      <button @click="cartStore.decreaseQuantity(item)" class="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
                      <span class="px-3 py-1">{{ item.quantity }}</span>
                      <button @click="cartStore.increaseQuantity(item)" class="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
                    </div>
                    <button @click="cartStore.removeFromCart(item)" class="text-red-600 hover:text-red-800">
                      Remove
                    </button>
                  </div>
                </div>
                <div class="text-right">
                  <p class="font-semibold text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div class="space-y-4">
              <div class="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${{ cartStore.subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div class="border-t pt-4">
                <div class="flex justify-between font-semibold text-gray-900">
                  <span>Total</span>
                  <span>${{ cartStore.subtotal.toFixed(2) }}</span>
                </div>
              </div>
              <button @click="checkout" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart';
import { onMounted } from 'vue';

const cartStore = useCartStore();

onMounted(() => {
  console.log('Cart items:', cartStore.items);
});

function checkout() {
  // Implement checkout logic here
  alert('Checkout functionality coming soon!');
}
</script>
