<template>
  <header class="px-4 px-sm-16 py-4">
    <VRow justify="space-between" class="text-body-2">
      <VCol>
        <VRow justify="start">
          <RouterLink to="/" class="mx-3">Home</RouterLink>
          <VDivider vertical></VDivider>
          <p class="ml-3 d-flex ga-2">
            <VIcon icon="mdi-facebook"></VIcon>
            <VIcon icon="mdi-instagram"></VIcon>
          </p>
        </VRow>
      </VCol>
      <VCol>
        <VRow justify="end">
          <p class="font-weight-bold mx-3">Sign up</p>
          <VDivider vertical></VDivider>
          <RouterLink to="/signin" class="font-weight-bold mx-3">Sign in</RouterLink>
          <VDivider vertical></VDivider>
          <p class="mx-3 d-flex align-center">
            <VIcon icon="mdi-help-circle-outline" size="20"></VIcon>
            Help
          </p>
        </VRow>
      </VCol>
    </VRow>

    <VRow>
      <VCol cols="12" md="4">
        <RouterLink to="/">
          <div class="d-flex align-center">
            <VIcon icon="mdi-store" size="50"></VIcon>
            <h1>Kael Express</h1>
          </div>
        </RouterLink>
      </VCol>

      <VCol cols="12" md="6">
        <SearchInput />
      </VCol>

      <VCol cols="12" md="2" class="d-flex justify-center justify-sm-end">
        <VMenu>
          <template #activator="{ props }">
            <VBadge color="white" :content="cartStore.cart.length" class="w-100 cart-btn-contaioner">
              <VBtn variant="outlined" v-bind="props" prepend-icon="mdi-cart" class="w-100">
                Cart
              </VBtn>
            </VBadge>
          </template>

          <VCard min-width="300" min-height="300" class="relative">
            <p class="empty-cart-message" v-if="cartStore.cart.length === 0">
              No Products Yet :)
            </p>

            <VList v-else>
              <VListItem
                v-for="cartItem in cartStore.cart"
                :prepend-avatar="cartItem.thumbnail"
                :title="cartItem.title"
              >
                <template #append>
                  <p class="pl-10">${{ cartItem.price }}</p>
                </template>
              </VListItem>
            </VList>

            <Button
              v-if="cartStore.cart.length > 0"
              @click="onClickCheckout"
              class="w-100 absolute bottom-0"
              >Go to Checkout</Button
            >

            <!-- ADD PRODUCTS HERE -->
            <!-- <VList>
            <VListItem></VListItem>
          </VList> -->
          </VCard>
        </VMenu>
      </VCol>
    </VRow>
  </header>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
const router = useRouter();

const onClickCheckout = () => {
  router.push('/checkout');
};
</script>

<style scoped>
header {
  background: linear-gradient(-180deg, #f53d2d, #f63);
  color: #fff;
}

a {
  color: white;
}

a:active,
a:visited {
  color: white;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.bottom-0 {
  bottom: 0;
}

.empty-cart-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.v-badge :deep(.v-badge__badge) {
  color: var(--primary-color) !important;
}
</style>
