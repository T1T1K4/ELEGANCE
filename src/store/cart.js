import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  // Inicializa o carrinho com dados do localStorage ou array vazio
  const items = ref([]);

  // Função para carregar dados do localStorage
  function loadFromLocalStorage() {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        items.value = JSON.parse(savedCart);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      items.value = [];
    }
  }

  // Carrega os dados ao inicializar
  loadFromLocalStorage();

  function addToCart(product) {
    const existing = items.value.find(i => i.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
    saveToLocalStorage();
  }

  function removeFromCart(product) {
    items.value = items.value.filter(i => i.id !== product.id);
    saveToLocalStorage();
  }

  function increaseQuantity(product) {
    const item = items.value.find(i => i.id === product.id);
    if (item) {
      item.quantity++;
      saveToLocalStorage();
    }
  }

  function decreaseQuantity(product) {
    const item = items.value.find(i => i.id === product.id);
    if (item && item.quantity > 1) {
      item.quantity--;
      saveToLocalStorage();
    }
  }

  function saveToLocalStorage() {
    try {
      localStorage.setItem('cart', JSON.stringify(items.value));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }

  const subtotal = computed(() => {
    return items.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });

  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0);
  });

  return {
    items,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
    totalItems,
    loadFromLocalStorage // Exportando a função para poder recarregar os dados quando necessário
  };
});

