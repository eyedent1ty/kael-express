<template>
  <RouterLink :to="`/products/${id}`">
    <VCard width="344">
      <VImg height="200px" :src="props.thumbnail" cover></VImg>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>$ {{ price.toFixed(2) }}</v-card-subtitle>
    </VCard>
  </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
});
</script>
