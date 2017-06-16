<template>
  <div class="container">
    <menu-header></menu-header>
    <div class="content">
      <div class="cover-a">
        <img src="../assets/banner.jpeg">
      </div>
      <div class="split">
      </div>
      <div class="panel">
        <div class="item1">
          <div class="img1">
            <img src="../assets/1.jpeg">
          </div>
          <div class="">
            <span></span>
          </div>
        </div>
      </div>
    </div>
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
    .content {
      margin: 60px 100px 0;
      .panel {
        .item1 {
          display: flex;
          .img1 {
            width: 320px;
            height: 320px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .split {
        width: 100%;
        height: 80px;
      }
      .cover-a {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>

