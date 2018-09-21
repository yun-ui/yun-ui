<template>
    <div class="yun-bg-white page-full">
      <div class="title">
        <h3 class="yun-h3">颜色 Color</h3>
        <p>YunUI 提供云之家官方使用的一系列颜色，用于轻应用主题色，以及第三方开发使用，此次更新了V10配色。</p>
      </div>
        <div class="content color">
            <h4 class="yun-h4">品牌主色</h4>
            <div class="row">
              <div class="yun-bg-blue theme-blcok-color">BLUE #3CBAFF</div>
            </div>
            <h4 class="yun-h4">V10主要用色</h4>
            <div class="row">
              <div class="yun-v-bg-blue theme-blcok-color">BLUE #4598F0</div>
            </div>
            <h4 class="yun-h4">快速背景颜色</h4>
            <!-- <small class="yun-small yun-text-secondary">以下颜色请使用在应用LOGO底板色及主题色。</small> -->
            <div class="row yun-text-white">
              <ul class="quick-bg-color">
                <li class="yun-bg-blue">#4598F0</li>
                <li class="yun-bg-olive">#32AA70</li>
                <li class="yun-bg-orange">#E26735</li>
                <li class="yun-bg-yellow">#F59C25</li>
                <li class="yun-bg-purple">#655DD4</li>
                <li class="yun-bg-pink">#DE4873</li>
                <li class="yun-bg-red">#EA5E56</li>
                <li class="yun-bg-skyblue">#3FB7DF</li>
                <li class="yun-bg-royalblue">#4570D3</li>
                <li class="yun-bg-green">#13BBAD</li>
                <li class="yun-bg-brown">#BD784D</li>
                <li class="yun-bg-grey">#484B51</li>
              </ul>
            </div>
            <h4 class="yun-h4">字体颜色</h4>
            <small class="yun-small yun-text-secondary">通过运用不同的字体颜色，表现不同层次和区分文字的重要性。</small>
            <div class="row yun-text-white">
              <ul class="font-color">
                <li class="default-fontcolor">#030303 主要字体</li>
                <li class="secondary-fontcolor">#768893 次要字体</li>
                <li class="set-fontcolor">#A4A8AB 置灰</li>
                <li class="tips-fontcolor">#C2CCD0 提示颜色</li>
                <li class="warn-fontcolor">#EA5E56 警示字体</li>
                <li class="active-fontcolor">#4598F0 字体点击高亮</li>
                <li class="white-fontcolor">#FFFFFF</li>
              </ul>
            </div>
            <h4 class="yun-h4">界面颜色</h4>
            <small class="yun-small yun-text-secondary">通过运用不同的界面颜色，对界面进行层次的区分。</small>
            <ul class="dashboard-bg">
                <li class="yun-bg-color">#F8F9FB 背景色</li>
                <li class="yun-bg-stroke-color">#E6E8EE 分割线</li>
                <li class="yun-bg-white bg-border">#FFFFFF 列表/导航/Tab背景色</li>
                <li class="yun-bg-mask-color bg-font-color">#0E2E46 透明度36% 蒙层色</li>
              </ul>
            <h4 class="yun-h4">颜色搭配使用规范</h4>
            <div class="panel" style="padding-bottom:30px">
                <small class="yun-small yun-text-secondary">
                    由于应用开发可能使用多种颜色，为了达到一致的视觉感受，
                    我们为你提供颜色搭配使用的建议。
                </small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {},
        created () {
        },
        methods: {}
    }

</script>

<style lang="less">
    .quick-bg-color {
      li {
        width: 65px;
      }
    }
    .theme-blcok-color {
      width: 120px;
      height: 44px;
      border-radius: 4px;
      color: #ffffff;
      text-align: center;
      line-height: 44px;
    }
    .font-color {
       li {
        width: 160px;
        height: 44px;
        border-radius: 4px;
        text-align: center;
        line-height: 44px;
      }
      .default-fontcolor {
        background-color: #030303;  //默认
      }
      .secondary-fontcolor {
        background-color: #768893; //辅助，次要
      }
      .set-fontcolor {
        background-color: #A4A8AB; //置灰
      }
      .tips-fontcolor {
        background-color: #7a797b; //提示
      }
      .warn-fontcolor {
        background-color: #f35959; //警告
      }
      .active-fontcolor {
        background-color: #3cbaff; //活动（被点击，高亮）
      }
      .white-fontcolor {
        border: 1px solid #D7DEE3;
        color: #5E5E5E;
        background-color: #ffffff; //反色
      }
    }
    .dashboard-bg{
      li {
        width: 200px;
        height: 44px;
        border-radius: 4px;
        text-align: center;
        line-height: 44px;
        color: #5E5E5E;
      }
      .bg-border {
        border: 1px solid #EAEFF3;
      }
      .bg-font-color {
        color: #fff;
      }
    }
</style>
