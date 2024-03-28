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
      <tr v-for="item in cartStore.cart">
        <td class="d-flex align-center ga-10">
          <VAvatar :image="item.thumbnail"></VAvatar>
          {{ item.title }}</td>
        <td>
          ${{ getDiscountedPrice(item.price, item.discountPercentage) }}
          ${{ item.price.toFixed(2) }}
        </td>
        <td>{{ item.quantity }}</td>
        <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
        <td><Button>Delete</Button></td>
      </tr>
    </tbody>
  </VTable>
</template>

<script setup lang="ts">
import { getDiscountedPrice } from '~/utils';

const cartStore = useCartStore();
</script>