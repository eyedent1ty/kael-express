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
      <Category
        v-for="suggestion in suggestions"
        :key="suggestion"
        :name="suggestion"
        class="py-0 suggestion"
      />
    </VList>
  </VForm>
</template>

<script setup lang="ts">
import { generateRandomNumber } from '~/utils/index';

const search = useSearch();
const router = useRouter();
const categoryStore = useCategoryStore();

const onSearchSubmit = (e: SubmitEvent) => {
  e.preventDefault();

  if (search.value === '') {
    router.push('/products');
    return;
  }

  router.push(`/products?keyword=${search.value}`);
};

const suggestions: string[] = [];
const categoriesCopy = [...categoryStore.categoryList];

for (let i = 0; i < 3; i++) {
  const idx = generateRandomNumber(0, categoriesCopy.length - 1);
  suggestions[i] = categoriesCopy.splice(idx, 1)[0];
}
</script>

<style scoped>
.suggestions {
  background-color: transparent;
  font-size: 12px;
  padding: 0;
}

.suggestion :deep(a) {
  color: white;
}

.v-input :deep(input) {
  background-color: white;
  color: black;
}
</style>
