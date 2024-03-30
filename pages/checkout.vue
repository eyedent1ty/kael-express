<template>
  <main class="checkout ma-sm-8 ma-md-16">
    <h2 v-if="cartStore.isCartEmpty()" class="text-primary text-center">
      No Products Yet :)
    </h2>
    <div v-else>
      <VTable>
        <thead>
          <tr>
            <th class="text-left">Product</th>
            <th class="text-left">Unit Price</th>
            <th class="text-center">Quantity</th>
            <th class="text-left">Total Price</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.cart">
            <td>
              <RouterLink :to="`/products/${item.id}`">
                <VAvatar
                  :image="item.thumbnail"
                  size="x-large"
                  class="mr-10"
                ></VAvatar>
                {{ item.title }}
              </RouterLink>
            </td>
            <td>
              <span class="original-price"> ${{ item.price }} </span>
              <span class="discounted-price">
                ${{
                  getDiscountedPrice(
                    item.price,
                    item.discountPercentage
                  ).toFixed(2)
                }}
              </span>
              <p class="discount-percentage">
                Discount {{ item.discountPercentage }}%
                <VBadge color="#ee4d2d" content="Updated" inline></VBadge>
              </p>
            </td>
            <td>
              <v-text-field
                type="number"
                density="compact"
                class="pa-0 mx-auto"
                readonly
              >
                <template v-slot:prepend>
                  <v-icon
                    color="red"
                    icon="mdi-minus"
                    @click="onClickUpdateQuantity(item, ACTIONS.DECREMENT)"
                  ></v-icon>
                </template>
                <template v-slot:append>
                  <v-icon
                    color="green"
                    icon="mdi-plus"
                    @click="onClickUpdateQuantity(item, ACTIONS.INCREMENT)"
                  ></v-icon>
                </template>
              </v-text-field>
            </td>
            <td>
              ${{
                (
                  getDiscountedPrice(item.price, item.discountPercentage) *
                  item.quantity
                ).toFixed(2)
              }}
            </td>
            <td class="checkout__delete">
              <Button outlined @click="onClickDeleteCartItem(item.id)"
                >Delete</Button
              >
            </td>
          </tr>
        </tbody>
      </VTable>
      <VRow class="checkout__footer w-100">
        <VCol cols="12">
          <VRow align="center" justify="center" justify-md="end">
            <VCol cols="12" sm="6" class="d-flex align-center ga-3 py-0">
              <p>
                Total ({{ cartStore.getLength }}
                {{ cartStore.getLength > 1 ? 'items' : 'item' }}):
              </p>
              <p class="checkout__footer__total-price">
                ${{ cartStore.totalPrice.toFixed(2) }}
              </p>
            </VCol>
            <VCol
              cols="12"
              sm="6"
              class="d-flex justify-sm-end py-0 mb-3 mb-sm-0"
            >
              <Button width="200px" size="large" @click="onClickCheckout"
                >Check Out</Button
              >
            </VCol>
          </VRow>
        </VCol>
      </VRow>
    </div>
    <v-snackbar
      class="snackbar"
      v-model="snackbar"
      color="#ee4d2d"
      position="absolute"
      close-delay="5000"
    >
      <VIcon icon="mdi-check" size="x-large"></VIcon>
      Item has been added to your shopping cart

      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar = false">
          x
        </v-btn>
      </template>
    </v-snackbar>
  </main>
</template>

<script setup lang="ts">
import type { CartItem } from '~/types';
import { getDiscountedPrice } from '~/utils';
import { httpUpdateCartItem } from '../requests/index';

const cartStore = useCartStore();
const userStore = useUserStore();
const snackbar = ref(false);

const onClickDeleteCartItem = async (itemId: number) => {
  const { data } = await useFetch<CartItem>('api/cart', {
    method: 'DELETE',
    body: {
      id: itemId
    }
  });

  if (data.value !== null) {
    cartStore.removeFromCart(data.value.id);
  }
};

const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

const onClickUpdateQuantity = async (
  cartItem: CartItem,
  action: string = 'INCREMENT'
) => {
  const { stock } = cartItem;

  if (
    (action === ACTIONS.INCREMENT && cartItem.quantity === stock) ||
    (action === ACTIONS.DECREMENT && cartItem.quantity === 1)
  ) {
    return;
  }

  action === ACTIONS.INCREMENT ? cartItem.quantity++ : cartItem.quantity--;

  const { updatedCartItem, error } = await httpUpdateCartItem(cartItem, action);

  if (error || updatedCartItem === null) {
    return;
  }

  cartItem.quantity = updatedCartItem.quantity;
};

const onClickCheckout = () => {
  snackbar.value = true;

  setTimeout(async () => {
    if (userStore.user !== null) {
      await useFetch('/api/cart', {
        method: 'DELETE',
        body: {
          customerId: userStore.user.id
        }
      });

      cartStore.emptyCart();
    }
  }, 4000);
};
</script>

<style scoped>
.original-price,
.discounted-price {
  font-size: 1rem;
}

.discount-percentage {
  color: var(--primary-color);
  background-color: white;
  font-size: 12px;
}

.checkout {
  position: relative;
  min-height: 500px;
}

.checkout__delete {
  text-align: center;
}

.checkout__footer {
  position: absolute;
  bottom: 0;
  right: 0;
}

.checkout__footer__total-price {
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 500;
}

.v-text-field {
  min-width: 150px;
  max-width: 100px;
}

.v-text-field :deep(.v-input__details) {
  display: none;
}
</style>
