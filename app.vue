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
const userStore = useUserStore();
const cartStore = useCartStore();

productStore.fetchProducts();
categoryStore.fetchCategories();

if (userStore.isAuthenticated) {
  cartStore.fetchCartItems();
}
</script>
