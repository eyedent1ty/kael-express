<template>
  <CategoryList />
  <VDivider></VDivider>
  <ProductList :products="products" />
</template>

<script setup lang="ts">
const productStore = useProductStore();
const route = useRoute();

const products = computed(() => {
  const keyword = route.query.keyword as string;
  if (keyword !== null && keyword !== undefined) {
    return productStore.productList.filter((product) => product.title.toLowerCase().includes(keyword.toLowerCase()));
  }
  return productStore.productList;
});
</script>
