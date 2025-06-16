<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About -->
        <div>
          <h3 class="text-lg font-semibold mb-4">About Us</h3>
          <p class="text-gray-400">
            ELEGANCE - Your one-stop shop for all your needs. Quality products, great prices, and excellent service.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-400 hover:text-white transition-colors">Home</router-link>
            </li>
            <li>
              <router-link to="/cart" class="text-gray-400 hover:text-white transition-colors">Cart</router-link>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Products</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Categories</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Electronics</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Fashion</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Home & Living</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Beauty</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              support@store.com
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1 (555) 123-4567
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              123 Store Street, City, Country
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 ELEGANCE. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for now
</script> 