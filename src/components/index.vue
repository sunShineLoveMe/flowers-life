<template>
  <div class="container">
    <menu-header></menu-header>
  </div>
</template>

<script>

import menuHeader from './header/menu-head';

export default {
  data() {
    return {
      test: '',
    };
  },
  components: {
    menuHeader,
  },
};
</script>

<style lang="scss" scoped="">
  .container {
  }
</style>

