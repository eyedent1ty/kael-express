<template>
  <ProductList :products="products" />
</template>

<script setup lang="ts">
const productStore = useProductStore();
const search = useSearch();

const products = computed(() =>
  productStore.productList.filter((product) =>
    product.title.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>
