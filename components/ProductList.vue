<template>
  <CategoryList />
  <VDivider></VDivider>
  <main class="product-list justify-center ga-4 my-8">
    <Product
      v-for="product in props.products"
      :key="product.id"
      :title="product.title"
      :price="product.price"
      :thumbnail="product.thumbnail"
    />
  </main>
</template>

<script setup>
const productStore = useProductStore();
const categoryStore = useCategoriesStore();

productStore.fetchProducts();
categoryStore.fetchCategories();

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
