<template>
  <main class="product-list justify-center ga-4 my-8" v-if="products.length">
    <Product
      v-for="product in props.products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :price="product.price"
      :thumbnail="product.thumbnail"
    />
  </main>
  <p v-if="products.length === 0 && !productStore.pending" class="text-center">No Products Found.</p>
</template>

<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});

const productStore = useProductStore();
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
