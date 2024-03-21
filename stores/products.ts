import { defineStore } from 'pinia';

interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

interface FetchProducts {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

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
