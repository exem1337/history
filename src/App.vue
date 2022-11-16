<template>
  <Header />
  <router-view/>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
}

// $pink: #e06594;
// $gray: #d8c9b1;
</style>