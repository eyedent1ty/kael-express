import { defineStore } from 'pinia';
import type { Product, CartItem } from '~/types';
import { getDiscountedPrice } from '~/utils';

const useCartStore = defineStore('cart', {
  state() {
    return {
      cartState: [] as CartItem[]
    };
  },
  getters: {
    cart(): CartItem[] {
      return this.cartState;
    },
    getLength(): number {
      return this.cartState.length;
    },
    totalPrice(): number {
      return this.cartState.reduce((total, currentItem) => {
        return (
          total +
          getDiscountedPrice(
            currentItem.price,
            currentItem.discountPercentage
          ) *
            currentItem.quantity
        );
      }, 0);
    }
  },
  actions: {
    async fetchCartItems() {
      const userStore = useUserStore();
      if (userStore.user !== null) {
        const response = await fetch(`/api/cart?userId=${userStore.user.id}`);
        const data = await response.json();
        this.setCart(data);
      }
    },
    setCart(cart: CartItem[]) {
      this.cartState = cart;
    },
    addToCart(cartItem: CartItem) {
      this.cartState.push(cartItem);
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
    setQuantity(id: number, quantity: number) {
      const updatedProduct = this.cartState.find((cartItem) => cartItem.id === id);
      if (updatedProduct !== undefined) {
        updatedProduct.quantity = quantity;
      }
    },
    getCartItemById(id: number): CartItem | undefined {
      return this.cartState.find((cartItem) => cartItem.id === id);
    },
    isCartEmpty(): boolean {
      return this.cartState.length === 0 ? true : false;
    },
    emptyCart(): void {
      this.cartState = [];
    }
  }
});

export { useCartStore };
