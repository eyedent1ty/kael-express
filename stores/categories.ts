import { defineStore } from 'pinia';

const useCategoryStore = defineStore('categories', {
  state: () => ({ categories: [] as string[] }),
  getters: {
    categoryList(state) {
      return state.categories;
    }
  },
  actions: {
    async fetchCategories() {
      const { data } = await useFetch<string[]>(
        'https://dummyjson.com/products/categories'
      );

      if (data.value !== undefined && data.value !== null) {
        this.setCategories(toRaw(data.value));
      }
    },
    setCategories(newCategories: string[]) {
      this.categories = newCategories;
    }
  }
});

export { useCategoryStore };
