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
  background-color: var(--primary-color);
  color: white;
}

.outlined {
  border-color: var(--primary-color);
  background-color: transparent;
  color: var(--primary-color);
}
</style>
