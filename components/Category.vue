<template>
  <VListItem>{{ props.name }}</VListItem>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.v-list-item {
  font-size: 14px;
}
</style>
