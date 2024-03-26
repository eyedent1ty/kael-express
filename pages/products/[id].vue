<template>
  <VBreadcrumbs :items="items">
    <template v-slot:divider>
      <VIcon icon="mdi-chevron-right"></VIcon>
    </template>
  </VBreadcrumbs>
  <VDivider></VDivider>
  <main>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="d-flex align-center">
      <p class="text-underline">{{ rating }}</p>
      <VRating :model-value="rating" half-increments readonly></VRating>
    </div>
    <div class="d-flex align-center">
      <h3 class="original-price">${{ price }}</h3>
      <h2 class="discounted-price">${{ discountedPrice }}</h2>
      <VBadge
        color="#ee4d2d"
        :content="`${Math.floor(discountPercentage)}% OFF`"
        inline
      ></VBadge>
    </div>
    <div class="quantity">
      <p>Quantity</p>
      <v-text-field type="number" v-model="selectedQuantity" density="compact">
        <template v-slot:prepend>
          <v-icon color="red" icon="mdi-minus" @click="selectedQuantity--"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon color="green" icon="mdi-plus" @click="selectedQuantity++"></v-icon>
        </template>
      </v-text-field>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const productStore = useProductStore();
const productId = Number(route.params.id);

const selectedProduct = productStore.productList.find(
  (product) => product.id === productId
)!;

const { title, description, rating, price, discountPercentage } =
  selectedProduct;
const discountedPrice = Math.floor(price * (1 - discountPercentage / 100));
const selectedQuantity = ref(1);

// Ensure that the minimum quantity is 1
watch(selectedQuantity, (newValue) => {
  if (newValue < 1) {
    selectedQuantity.value = 1;
  }
});

const items = [
  {
    title: 'Home',
    disabled: false,
    href: '/'
  },
  {
    title: 'Products',
    disabled: false,
    href: '/products'
  },
  {
    title: selectedProduct.category,
    disabled: false,
    href: `/products/?category=${selectedProduct.category}`
  },
  {
    title: selectedProduct.title,
    disabled: false,
    href: `/products/${selectedProduct.title}`
  }
];
</script>

<style scoped>
.original-price {
  text-decoration: line-through;
  color: #929292;
  font-weight: normal;
  font-size: 1rem;
}

.discounted-price {
  color: #ee4d2d;
  font-size: 1.875rem;
  font-weight: 500;
}

.discount-percentage {
  background-color: #ee4d2d;
  color: white;
}

.quantity {
  max-width: 150px;
}
</style>
