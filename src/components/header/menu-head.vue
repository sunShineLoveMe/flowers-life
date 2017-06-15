<template>
  <div class="container">
    <div class="header">
      <div class="menu-left">
        <div>菜单一</div>
        <div>菜单二</div>
        <div>菜单三</div>
      </div>
      <div class="menu-right">
        <div>菜单四</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped="">
  .container {
    height: 60px;
    line-height: 60px;
    background-color: rgba(38, 50, 57, .6);
    .header {
      margin: 0 200px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      color: #fff;
      div {
        height: 100%;
      }
      .menu-left {
        width: 70%;
        display: flex;
        div {
          margin: 0 30px;
        }
      }
      .menu-right {
        width: 30%;
      }
    }
  }
</style>
