<template>
  <NuxtLayout>
    <VApp>
      <NuxtPage />
    </VApp>
  </NuxtLayout>
</template>

<script setup lang="ts">
const productStore = useProductStore();
const categoryStore = useCategoryStore();

productStore.fetchProducts();
categoryStore.fetchCategories();
</script>
