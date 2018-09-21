<template>
  <div>
    <div class="middleCenter state-page-container">
      <div class="state-image-container"><img class="state-img" src="../../assets/server-error.png"/></div>
      <p class="yun-text-center yun-text-secondary state-margin">哎呀，网络加载失败了</p>
      <p class="state-css">请检查网络设置或轻触屏幕重新加载</p>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .state-page-container {
    margin-top: -40px;
    .state-image-container{
      width: 100px;
      margin: 0 auto;
      .state-img {
        width: 100px;
        margin-bottom: 10px;
      }
    }
    .state-margin{
      margin-top: 8px;
    }
    .state-css {
      margin-top: 7px;
      width: 200px;
      text-align: center;
      font-size: 10px;
      color:#A4A8AB;
    }
  }
</style>