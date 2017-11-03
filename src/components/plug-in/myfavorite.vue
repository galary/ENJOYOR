<template>
  <div>
    <Button type="info" @click="goVideo">监控视频</Button>
    <card>
      <p slot="title" style="color:#jahjss">
        介绍卡片特效
      </p>
      <Row type="flex" justify="space-around">
        <introduction><img src="../../assets/images/1.jpg"></introduction>
        <introduction><img src="../../assets/images/2.jpg"></introduction>
        <introduction><img src="../../assets/images/3.jpg"></introduction>
        <introduction><img src="../../assets/images/4.jpg"></introduction>
      </Row>
    </card>
    <!-- <navigation></navigation> -->
    <imgs></imgs>
    <!-- <baidu-map></baidu-map> -->
  </div>
</template>
<script>
import introduction from './Introduction.vue';
import navigation from './navigation3D.vue';
import imgs from './imgUpdata.vue';
import baiduMap from './baidu-map.vue';
import $ from "jquery"
export default {
  name: 'favorite',
  components: {
    introduction,
    navigation,
    imgs,
    baiduMap
  },
  mounted() {},
  methods: {
    goVideo: function() {
      this.$router.push({ path: '/video' })
    }
  }
};

</script>
<style lang="less">
@import '../editTool/common.less';
@import '../../../node_modules/font-awesome/css/font-awesome.min.css';

</style>
