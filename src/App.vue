<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderNavbar from './components/HeaderNavbar.vue';
</script>

<template>
  <HeaderNavbar />
  <RouterView v-slot="{ Component }">
    <Transition name="page-slide" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style lang="scss">
.page-slide {
  &-enter-active,
  &-leave-active {
    transition: 300ms ease all;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(40px);
  }
}
</style>
