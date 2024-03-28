<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-left">Product</th>
        <th class="text-left">Unit Price</th>
        <th class="text-left">Quantity</th>
        <th class="text-left">Total Price</th>
        <th class="text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr></tr>
    </tbody>
  </VTable>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
</script>