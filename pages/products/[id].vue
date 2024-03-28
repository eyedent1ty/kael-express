<template>
  <VBreadcrumbs :items="items">
    <template v-slot:divider>
      <VIcon icon="mdi-chevron-right"></VIcon>
    </template>
  </VBreadcrumbs>
  <VDivider></VDivider>

  <VRow align="center" justify="center" class="pa-sm-10">
    <VCol cols="12" md="6" class="mx-auto d-flex justify-center">
      <VCarousel class="carousel" hide-delimiters>
        <VCarouselItem v-for="image in images" :src="image">
        </VCarouselItem> </VCarousel
    ></VCol>
    <VCol cols="12" md="6" class="text-center text-md-start">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="d-flex align-center justify-center justify-md-start">
        <p class="text-underline">{{ rating }}</p>
        <VRating :model-value="rating" half-increments readonly></VRating>
      </div>
      <div class="d-flex align-center justify-center justify-md-start">
        <h3 class="original-price">${{ price }}</h3>
        <h2 class="discounted-price">${{ discountedPrice }}</h2>
        <VBadge
          color="#ee4d2d"
          :content="`${Math.floor(discountPercentage)}% OFF`"
          inline
        ></VBadge>
      </div>
      <div
        class="d-flex align-center justify-center mx-auto mb-3 justify-md-start"
      >
        <p>Quantity</p>
        <v-text-field
          type="number"
          v-model="selectedQuantity"
          density="compact"
          class="quantity pa-0"
        >
          <template v-slot:prepend>
            <v-icon
              color="red"
              icon="mdi-minus"
              @click="selectedQuantity--"
            ></v-icon>
          </template>
          <template v-slot:append>
            <v-icon
              color="green"
              icon="mdi-plus"
              @click="selectedQuantity++"
            ></v-icon>
          </template>
        </v-text-field>
      </div>

      <VRow justify="center" justify-md="start" class="buttons mx-auto mx-md-0">
        <VCol cols="12" md="5">
          <Button
            width="200px"
            size="large"
            outlined
            prepend-icon="mdi-cart"
            @click="onClickAddToCart"
            >Add To Cart</Button
          >
        </VCol>

        <VCol cols="12" md="5" class="d-flex justify-center">
          <Button width="200px" size="large">Buy Now</Button>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
import type { CartItem } from '~/types';

const route = useRoute();
const productStore = useProductStore();
const productId = Number(route.params.id);

const selectedProduct = productStore.productList.find(
  (product) => product.id === productId
)!;

const { title, description, rating, price, discountPercentage, images } =
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

// ADD TO CART
const cartStore = useCartStore();

const onClickAddToCart = () => {
  cartStore.addToCart(selectedProduct);

  console.log(cartStore.cart);
};
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

.carousel {
  max-width: 700px;
}

.v-text-field :deep(.v-input__details) {
  display: none;
}

.buttons {
  max-width: 500px;
}

.v-breadcrumbs {
  flex-wrap: wrap;
}
</style>
