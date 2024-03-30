<template>
  <header class="px-4 px-sm-16 py-4">
    <VRow justify="space-between" class="text-body-2">
      <VCol>
        <VRow justify="start">
          <RouterLink to="/" class="mx-3">Home</RouterLink>
          <VDivider vertical></VDivider>
          <p class="ml-3 d-flex ga-2">
            <RouterLink to="#">
              <VIcon icon="mdi-facebook"></VIcon>
            </RouterLink>
            <RouterLink to="#">
              <VIcon icon="mdi-instagram"></VIcon>
            </RouterLink>
          </p>
        </VRow>
      </VCol>
      <VCol>
        <VRow justify="end">
          <p
            v-if="userStore.isAuthenticated"
            @click="onClickLogout"
            class="font-weight-bold mx-3 pointer"
          >
            Log out
          </p>
          <div v-else class="d-flex">
            <RouterLink to="/auth?type=register" class="font-weight-bold mx-3"
              >Sign up</RouterLink
            >
            <VDivider vertical color="black"></VDivider>
            <RouterLink to="/auth?type=login" class="font-weight-bold mx-3"
              >Sign in</RouterLink
            >
          </div>
          <VDivider vertical color="black"></VDivider>
          <RouterLink to="/help">
            <p class="mx-3 d-flex align-center">
              <VIcon icon="mdi-help-circle-outline" size="20"></VIcon>
              Help
            </p>
          </RouterLink>
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

      <VCol
        v-if="userStore.isAuthenticated"
        cols="12"
        md="2"
        class="d-flex justify-center justify-sm-end"
      >
        <VMenu>
          <template #activator="{ props }">
            <VBadge
              color="white"
              :content="cartStore.cart.length"
              class="w-100 cart-btn-contaioner"
            >
              <VBtn
                variant="outlined"
                v-bind="props"
                prepend-icon="mdi-cart"
                class="w-100"
              >
                Cart
              </VBtn>
            </VBadge>
          </template>

          <VCard min-width="300" min-height="300" class="relative pb-10">
            <p class="empty-cart-message" v-if="cartStore.cart.length === 0">
              No Products Yet :)
            </p>

            <VList class="list-cart-items" v-else>
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
          </VCard>
        </VMenu>
      </VCol>
    </VRow>
  </header>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const onClickLogout = () => {
  userStore.logout();

  if (route.path === '/checkout') {
    router.push('/products');
  }
}

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

.list-cart-items {
  overflow-y: scroll;
  max-height: 500px;
}
</style>
