<template>
  <div class="goods">
    <div class="menu-wrapper" id="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item" :class="{'current':currentIndex === index}">
        <span class="text">
          <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" id="foods-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item border-1px">
              <div class="icon">
                <img :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll';

  const ERR_OK = 0;

  export default {
    props: {
      seller: {
        type: Object,
      },
    },
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        foodlist: [],
        currentMenuIndex: 0,
      };
    },
    mounted() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((res) => {
        Object.assign(res, res.body);
        if (res.errno === ERR_OK) {
          this.goods = res.data;
          this.$nextTick(() => {
            this.initScroll();
            this.calculateHeight();
          });
        }
      });
    },
    computed: {
      currentIndex() {
        this.listHeight.forEach((item, index) => {
          const height1 = this.listHeight[index];
          const height2 = this.listHeight[index + 1];
          if (!height2) {
            if (this.scrollY > height1 && this.scrollY < height2) {
              alert();
              return index;
            }
          }
          return false;
        });
        return 0;
      },
    },
    methods: {
      initScroll() {
        // BScroll(document.getElementById('menu-wrapper'), {});
        // BScroll(document.getElementById('foods-wrapper'), {});
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          // scrollY: true,
        });
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {
          probeType: 3,
        });
        this.foodScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      calculateHeight() {
        this.foodlist = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        Array.from(this.foodlist).forEach((item) => {
          height += item.clientHeight;
          this.listHeight.push(height);
        });
      },
    },
  };
</script>

<style lang="stylus" type="text/stylus">
@import "../../common/stylus/base";
@import "../../common/stylus/mixin";
@import "../../common/stylus/icon";
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      // overflow: auto
      .menu-item
        display: table
        height: 54px
        width: 56px
        line-height: 14px
        padding: 0 12px
        border-bottom: 1px solid rgba(7, 17, 27, .1)
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          font-size: 12px
    .foods-wrapper
      flex: 1
      // overflow: auto
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        font-size: 12px
        color: rgb(147, 153, 159)
        padding-left: 2px solid #d9dde1
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, .1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
          img
            width: 100%
            height: 100%
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            font-size: 14px
            line-height: 14px
            color: rgb(7, 17, 27)
            height: 14px
          .desc, .extra
            font-size: 10px
            line-height: 10px
            color: rgb(147, 153, 159)
          .desc
            margin-bottom: 8px
          .extra
            &.count
              marign-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              marign-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
</style>

