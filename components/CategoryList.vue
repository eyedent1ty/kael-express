<template>
  <VList class="d-flex flex-wrap">
    <Category
      v-for="category in categoryStore.categoryList"
      :key="category"
      :name="category"
    />
  </VList>
</template>

<script setup lang="ts">
const categoryStore = useCategoriesStore();

categoryStore.fetchCategories();
</script>
