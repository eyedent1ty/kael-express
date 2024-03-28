import { defineStore } from 'pinia';
import type { Product, CartItem } from '~/types';

const useCartStore = defineStore('cart', {
  state() {
    return {
      cartState: [] as CartItem[]
    };
  },
  getters: {
    cart(): CartItem[] {
      return this.cartState;
    }
  },
  actions: {
    addToCart(product: Product) {
      if (!this.isProductAlreadyExists(product)) {
        this.cartState.push({ ...product, quantity: 1 });
      } else {
        const selectedCartItem = this.getCartItemById(product.id)!;
        selectedCartItem.quantity++;
      }
    },
    removeFromCart(itemId: number): void {
      const idx = this.cartState.findIndex(
        (cartItem) => cartItem.id === itemId
      );
      this.cartState.splice(idx, 1);
    },
    isProductAlreadyExists(product: Product) {
      const idx = this.cart.findIndex((p) => p.id === product.id);

      return idx >= 0 ? true : false;
    },
    getCartItemById(id: number): CartItem | undefined {
      return this.cartState.find((cartItem) => cartItem.id === id);
    },
    isCartEmpty(): boolean {
      return this.cartState.length === 0 ? true : false;
    }
  }
});

export { useCartStore };
