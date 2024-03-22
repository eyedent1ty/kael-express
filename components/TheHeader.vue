<template>
  <header class="px-sm-16 py-2">
    <div class="d-flex justify-space-between text-body-2 mb-4">
      <div class="d-flex">
        <RouterLink to="/" class="mx-3">Home</RouterLink>
        <VDivider vertical></VDivider>
        <p class="mx-3 d-flex align-items-center">
          Follow us on
          <VIcon icon="mdi-facebook"></VIcon>
          <VIcon icon="mdi-instagram"></VIcon>
        </p>
      </div>
      <div class="d-flex">
        <p class="mx-3 d-flex align-center">
          <VIcon icon="mdi-help-circle-outline" size="20"></VIcon>
          Help
        </p>
        <VDivider vertical></VDivider>
        <p class="font-weight-bold mx-3">Sign up</p>
        <VDivider vertical></VDivider>
        <p class="font-weight-bold mx-3">Sign in</p>
      </div>
    </div>

    <div class="d-flex align-start ga-16">
      <div class="d-flex align-start">
        <RouterLink to="/">
          <div class="d-flex align-center">
            <VIcon icon="mdi-store" size="50"></VIcon>
            <h1>Kael Express</h1>
          </div>
        </RouterLink>
      </div>

      <SearchInput class="flex-1" />

      <VMenu class="flex-1">
        <template #activator="{ props }">
          <VBtn variant="outlined" v-bind="props" prepend-icon="mdi-cart">
            Cart
          </VBtn>
        </template>

        <VCard
          min-width="300"
          min-height="300"
          class="d-flex justify-center align-center"
        >
          <p>No Products Yet :)</p>

          <!-- ADD PRODUCTS HERE -->
          <!-- <VList>
            <VListItem></VListItem>
          </VList> -->
        </VCard>
      </VMenu>
    </div>
  </header>
</template>

<script setup lang="ts">
const search = useSearch();
</script>

<style scoped>
header {
  background: linear-gradient(-180deg, #f53d2d, #f63);
  color: #fff;
}

.flex-1 {
  flex: 1;
}

a {
  text-decoration: none;
  color: white;
}

a:active,
a:visited {
  color: white;
}
</style>
