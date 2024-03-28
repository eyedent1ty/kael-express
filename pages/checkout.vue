<template>
  <main class="checkout ma-16">
    <h2 v-if="cartStore.isCartEmpty()" class="text-center">Cart is Empty :)</h2>
    <div v-else>
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
              {{ item.title }}
            </td>
            <td>
              <span class="original-price"> ${{ item.price.toFixed(2) }} </span>
              <span class="discounted-price">
                ${{
                  getDiscountedPrice(
                    item.price,
                    item.discountPercentage
                  ).toFixed(2)
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
            <td>
              <Button outlined @click="onClickDeleteCartItem(item.id)">Delete</Button>
            </td>
          </tr>
        </tbody>
      </VTable>
      <footer class="checkout__footer d-flex justify-end">
        <div class="d-flex align-center ga-2">
          <p>
            Total ({{ cartStore.getLength }}
            {{ cartStore.getLength > 1 ? 'items' : 'item' }}):
          </p>
          <p class="checkout__footer__total-price">${{ cartStore.totalPrice.toFixed(2) }}</p>
          <Button width="200px" size="large">Check Out</Button>
        </div>
      </footer>
    </div>
  </main>
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

.checkout {
  position: relative;
  min-height: 500px;
}

.checkout__footer {
  position: absolute;
  bottom: 0;
  right: 0;
}

.checkout__footer__total-price {
  color: #ee4d2d;
  font-size: 2rem;
  font-weight: 500;
}
</style>
