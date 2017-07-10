<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
     <router-view></router-view>
  </div>
</template>

<script>

import header from './components/header/header';

const ERROR_OK = 0;

export default {
  data() {
    return {
      seller: {},
    };
  },
  name: 'app',
  components: {
    'v-header': header,
  },
  created() {
    this.$http.get('/api/seller').then((res) => {
      if (res.body.errno === ERROR_OK) {
        this.seller = res.body.data;
        // console.log(this.seller);
      }
    });
  },
};

</script>

<style lang="scss" scoped="">
#app{
  .tab {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .tab-item {
      flex: 1;
      text-align: center;
      a {
        font-size: 14px;
        color: rgb(77, 85, 93);
        text-decoration: none;
      }
      a.active{
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>

