<template>
  <VForm @submit="onSearchSubmit" class="d-flex flex-column">
    <VTextField
      v-model="search"
      placeholder="Sign up and get 100% off on your first order"
      density="compact"
      hide-details="auto"
    >
      <template #append>
        <VBtn variant="outlined" prepend-icon="mdi-magnify" type="submit"
          >Search</VBtn
        >
      </template>
    </VTextField>
    <VList class="d-flex suggestions">
      <VListItem class="py-0 suggestion text-white"
        >Camping Chair Buy 1 Take 1</VListItem
      >
      <VListItem class="py-0 suggestion text-white"
        >Flat Sandal For Women</VListItem
      >
      <VListItem class="py-0 suggestion text-white"
        >Bra For Women Set 6 Pcs Non Wire</VListItem
      >
    </VList>
  </VForm>
</template>

<script setup lang="ts">
const search = useSearch();
const router = useRouter();

const onSearchSubmit = (e: SubmitEvent) => {
  e.preventDefault();

  if (search.value === '') {
    router.push('/products');
    return;
  }

  router.push(`/products?keyword=${search.value}`);
};
</script>

<style scoped>
.suggestions {
  background-color: transparent;
  font-size: 12px;
  padding: 0;
}

.suggestion {
  min-height: 24px !important;
}

.v-input :deep(input) {
  background-color: white;
  color: black;
}
</style>
