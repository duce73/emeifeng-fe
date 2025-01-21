<template>
  <button :class="['btn', variant]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
}>();
</script>

<style lang="scss" scoped>
.btn {
  @include flex-center;

  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    color: white;
    background-color: var(--primary-color);

    &:hover {
      opacity: 0.9;
    }
  }

  &.secondary {
    color: var(--text-color);
    background-color: var(--secondary-color);
  }
}
</style> 