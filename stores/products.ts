import { defineStore } from 'pinia';
import type { Product, FetchProducts } from '~/types';

const useProductStore = defineStore('products', {
  state() {
    return {
      products: [] as Product[]
    };
  },
  getters: {
    productList(state) {
      return state.products;
    }
  },
  actions: {
    async fetchProducts() {
      const { data } = await useFetch<FetchProducts>(
        'https://dummyjson.com/products/?limit=100'
      );

      if (data.value !== undefined && data.value !== null) {
        this.setProducts(data.value.products);
      }
    },
    setProducts(newProduct: Product[]) {
      this.products = newProduct;
    }
  }
});

export { useProductStore };
