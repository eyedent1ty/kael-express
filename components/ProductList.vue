<template>
  <main class="product-list justify-center ga-4 my-8" v-if="products.length > 0">
    <Product
      v-for="product in props.products"
      :key="product.id"
      :title="product.title"
      :price="product.price"
      :thumbnail="product.thumbnail"
    />
  </main>
  <p v-else class="text-center">No Products Found.</p>
</template>

<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
