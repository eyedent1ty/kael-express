<template>

  <h2 v-if="cartStore.isCartEmpty()" class="text-center mt-16">Cart is Empty :)</h2>

  <VTable v-else class="ma-16">
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
          {{ item.title }}
        </td>
        <td>
          <span class="original-price"> ${{ item.price.toFixed(2) }} </span>
          <span class="discounted-price">
            ${{
              getDiscountedPrice(item.price, item.discountPercentage).toFixed(2)
            }}
          </span>
        </td>
        <td>{{ item.quantity }}</td>
        <td>
          ${{
            (
              getDiscountedPrice(item.price, item.discountPercentage) *
              item.quantity
            ).toFixed(2)
          }}
        </td>
        <td><Button @click="onClickDeleteCartItem(item.id)">Delete</Button></td>
      </tr>
    </tbody>
  </VTable>
</template>

<script setup lang="ts">
import { getDiscountedPrice } from '~/utils';

const cartStore = useCartStore();

const onClickDeleteCartItem = (itemId: number): void => {
  cartStore.removeFromCart(itemId);
};
</script>

<style scoped>
.original-price,
.discounted-price {
  font-size: 1rem;
}
</style>
