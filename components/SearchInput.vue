<template>
  <VForm @submit="onSearchSubmit" class="d-flex flex-column">
    <VRow>
      <VCol cols="12" sm="9" class="pb-0">
        <VTextField
          v-model="search"
          placeholder="Sign up and get 100% off on your first order"
          density="compact"
          hide-details="auto"
        >
        </VTextField>
      </VCol>

      <VCol cols="12" sm="3" class="d-flex justify-center justify-sm-start px-md-0 px-lg-3 pb-0">
        <VBtn variant="outlined" prepend-icon="mdi-magnify" type="submit">Search</VBtn>
      </VCol>

      <VCol v-if="$vuetify.display.smAndUp" sm="12" class="pt-0">
        <VList class="d-flex suggestions">
          <Category
            v-for="suggestion in suggestions"
            :key="suggestion"
            :name="suggestion"
            class="py-0 suggestion"
          />
        </VList>
      </VCol>
    </VRow>
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
