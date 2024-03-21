<template>
  <VCard width="344">
    <VImg height="200px" :src="props.thumbnail" cover></VImg>
    <v-card-title>{{ title }}</v-card-title>

    <v-card-subtitle>$ {{ price.toFixed(2) }}</v-card-subtitle>
  </VCard>
</template>

<script setup lang="ts">
const props = defineProps({
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
