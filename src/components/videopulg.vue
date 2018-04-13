<template>
  <div class="container">
    <card>
      <p slot='title'> <span>路况直播</span> <span>返回</span> </p>
      <Row>
        <my-video :sources="video.sources" :options="video.options"></my-video>
      </Row>
    </card>
    <Tabs :animated="true">
      <TabPane label="路况">
        <Scroll :on-reach-bottom="handleReachBottom" style='height:100%'>
          <Card dis-hover v-for="(item, index) in list1" :key="index">
            Content {{ item }}
          </Card>
        </Scroll>
      </TabPane>
      <TabPane label="景区">标签二的内容</TabPane>
      <TabPane label="校园">标签三的内容</TabPane>
    </Tabs>
  </div>
</template>
<script>
// https://bird.ioliu.cn/v1/?url=
import $ from "jquery"
import myVideo from 'vue-video'
export default {
  name: 'favorite',
  data() {
    return {
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      video: {
        sources: [{
          src: '',
          type: 'video/mp4'
        }],
        options: {
          autoplay: true,
          volume: 0.6,
          poster: 'http://covteam.u.qiniudn.com/poster.png'
        }
      }
    }
  },
  components: {
    myVideo
  },
  mounted() {},
  methods: {
    handleReachBottom() {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list1[this.list1.length - 1];
          for (let i = 1; i < 11; i++) {
            this.list1.push(last + i);
          }
          resolve();
        }, 2000);
      });
    }
  }
};

</script>
<style lang="less">
.__cov-video {
  height: 400px;
}
.ivu-scroll-container {
  height: 100% !important;
}
.container * {
  font-size: 14px;
}

</style>
