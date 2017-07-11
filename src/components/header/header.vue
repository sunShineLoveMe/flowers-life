<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-remove_circle_outline"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import star from '../star/star';

  export default {
    props: {
      seller: {
        type: Object,
      },
    },
    data() {
      return {
        detailShow: false,
      };
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
    },
    components: {
      star,
    },
  };
</script>

<style lang="stylus" type="text/stylus">
@import "../../common/stylus/base";
@import "../../common/stylus/mixin";
@import "../../common/stylus/icon";
  .header
    color: #fff
    background-color: rgba(7, 17, 27, .5)
    position: relative
    .content-wrapper
      position: relative;
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        border-radius: 2px
        vertical-align: top
      .content
        display: inline-block
        font-size: 14px
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 16px
            font-weight: bold
        .description
            font-size: 12px
            line-height: 12px
            font-weight: 200
            margin-bottom: 10px
        .support
            font-size: 0px
            .icon
              display: inline-block
              vertical-align: top
              width: 12px
              height: 12px
              margin-right: 4px
              background-size: 12px 12px
              background-repeat: no-repeat
              &.decrease
                bg-image('decrease_1')
              &.discount
                bg-image('discount_1')
              &.guarantee
                bg-image('guarantee_1')
              &.invoice
                bg-image('invoice_1')
              &.special
                bg-image('special_1')
            .text
              font-size: 10px
              line-height: 12px
              font-weight: 200
      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 12px
        background: rgba(0, 0, 0, .2)
        text-align: center
        .count
          font-size: 10px
          vertical-align: top
        .icon-keyboard_arrow_right
          font-size: 10px
          line-height: 24px
          margin-left: 2px
    .bulletin-wrapper
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      position: relative
      background-color: rgba(7, 17, 27, .2)
      .bulletin-title
        vertical-align: top
        display: inline-block
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
        margin-top: 7px;
      .bulletin-text
         font-size: 10px
         vertical-align: top
         margin-left: 4px
      .icon-keyboard_arrow_right
         position: absolute
         font-size: 10px
         right: 8px
         top: 8px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
    .detail
      position: fixed
      overflow: auto
      width: 100%
      height: 100%
      top: 0
      left: 0
      background-color: rgba(7, 17, 27, .8)
      .detail-wrapper
        min-height: 100%
        width: 100%
        // text-align: center
        .detail-main
          margin-top: 64px
          padding-bottom: 64px
          .name
            font-size: 16px
            font-weight: 700
            text-align: center
            line-height: 16px
          .star-wrapper
            text-align: center;
            margin-top: 18px;
      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto 0 auto
        clear: both
        font-size: 32px
</style>
