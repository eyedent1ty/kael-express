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

productStore.fetchProducts();
categoryStore.fetchCategories();

onMounted(() => {
  const id = Number(localStorage.getItem('id'));
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const email = localStorage.getItem('email');

  if (id && firstName && lastName && email) {
    userStore.setUser({
      id,
      firstName,
      lastName,
      email
    })
  }
});
</script>
