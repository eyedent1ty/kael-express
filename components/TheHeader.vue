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
      <div class="d-flex flex-column flex-1">
        <VTextField
          placeholder="Sign up and get 100% off on your first order"
          density="compact"
          hide-details="auto"
        >
          <template #append>
            <VBtn variant="outlined" prepend-icon="mdi-magnify">Search</VBtn>
          </template>
        </VTextField>
        <VList class="d-flex suggestions">
          <VListItem class="py-0 suggestion text-white"
            >Camping Chair Buy 1 Take 1</VListItem
          >
          <VListItem class="py-0 suggestion text-white"
            >Flat Sandal For Women</VListItem
          >
          <VListItem class="py-0 suggestion text-white"
            >Bra For Women Set 6 Pcs Non Wire</VListItem
          >
        </VList>
      </div>

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

<style scoped>
header {
  background: linear-gradient(-180deg, #f53d2d, #f63);
  color: #fff;
}

.flex-1 {
  flex: 1;
}

.suggestions {
  background-color: transparent;
  font-size: 12px;
  padding: 0;
}

.suggestion {
  min-height: 24px !important;
}

.v-input :deep(input) {
  background-color: white;
  color: black;
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
