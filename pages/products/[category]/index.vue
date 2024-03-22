<template>
  <h1>{{ category }}</h1>
  <ProductList :products="filteredProducts" />
</template>

<script setup lang="ts">
const route = useRoute();
const category = route.params.category as string;
const productStore = useProductStore();

const filteredProducts = computed(() =>
  productStore.productList.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  )
);
</script>
