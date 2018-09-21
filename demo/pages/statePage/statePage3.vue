<template>
  <div>
    <div class="middleCenter state-page-container">
      <img class="state-img" src="../../assets/no-data.png"/>
      <p class="yun-text-center yun-text-secondary state-margin">暂无未读消息</p>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .state-page-container {
    margin-top: -40px;
    text-align: center;
    .state-margin{
      margin-top: 8px;
    }
    .state-img {
      width: 100px;
      margin-bottom: 10px;
    }
  }
</style>