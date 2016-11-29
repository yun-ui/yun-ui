<template>
    <div class="toast">
        <button>toast test
        </button>
    </div>
</template>

<script>
    export default {
        name: 'yun-toast',
        props: {},
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
  @import "../../style/stylesheets/base";

  .toast {
        button {
            background: red;
        }
    }
</style>
