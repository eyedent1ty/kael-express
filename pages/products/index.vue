<template>
  <VBreadcrumbs v-if="category" :items="items">
    <template v-slot:divider>
      <VIcon icon="mdi-chevron-right"></VIcon>
    </template>
  </VBreadcrumbs>
  <CategoryList v-else="category" />

  <VDivider></VDivider>
  <ProductList :products="products" />
</template>

<script setup lang="ts">
import ProductList from '~/components/ProductList.vue';

const productStore = useProductStore();
const userStore = useUserStore();
const route = useRoute();

let category: Readonly<string>;
let items: Array<{ title: string; disabled: boolean; href: string }>;

watchEffect(() => {
  category = route.query.category as string;

  items = [
    {
      title: 'Home',
      disabled: false,
      href: '/'
    },
    {
      title: 'Products',
      disabled: false,
      href: '/products'
    },
    {
      title: category,
      disabled: true,
      href: `/products/${category}`
    }
  ];
});

const products = computed(() => {
  const keyword = route.query.keyword as string;

  if (category !== null && category !== undefined) {
    return productStore.productList.filter(
      (product) => product.category === category.toLowerCase()
    );
  }

  if (keyword !== null && keyword !== undefined) {
    return productStore.productList.filter((product) =>
      product.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  return productStore.productList;
});
</script>
