<template>
  <div>
    <div class="middleCenter state-page-container">
      <img class="state-img" src="../../assets/no-line.png"/>
      <p class="yun-text-center yun-text-secondary state-margin">好像网络不在这个星球</p>
      <div class="row state-top">
        <y-button size="middle">推荐操作</y-button>
      </div>
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
      margin-top: 7px;
    }
    .state-img {
      width: 100px;
      margin-bottom: 10px;
    }
    .state-top {
      margin-top: 38px; 
    }
  }
</style>