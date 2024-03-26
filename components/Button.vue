<template>
  <VBtn class="outlined" variant="outlined" v-if="props.outlined"><slot /></VBtn>

  <VBtn v-else flat>
    <slot />
  </VBtn>
</template>

<script setup lang="ts">
const props = defineProps({
  outlined: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.v-btn {
  background-color: #ee4d2d;
  color: white;
}

.outlined {
  border-color: #ee4d2d;
  background-color: transparent;
  color: #ee4d2d;
}
</style>
