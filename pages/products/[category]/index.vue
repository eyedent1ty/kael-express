<template>
  <VBreadcrumbs :items="items">
    <template v-slot:divider>
      <VIcon icon="mdi-chevron-right"></VIcon>
    </template>
  </VBreadcrumbs>

  <ProductList :products="filteredProducts" />
</template>

<script setup lang="ts">
const route = useRoute();
const category = route.params.category as string;
const productStore = useProductStore();

const items = [
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

const filteredProducts = computed(() =>
  productStore.productList.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  )
);
</script>
