<template>
  <el-row class="warp">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <b>首页</b>
        </el-breadcrumb-item>
        <el-breadcrumb-item>monitor</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :span="24" class="warp-main">
      <!-- <h3>每日登录正异常监控图</h3> -->
      <div id="Monitor" style="width:80%; height:600px; margin:0px auto"></div>
    </el-col>
  </el-row>
</template>
<script>
import { timeData, normolData, abnormalData, arr } from '../../common/monitor.js'
import { data } from '../../mock/data/demoData.js';
import echarts from 'echarts'
import Mock from 'mockjs'
import $ from '../../api/jquery-1.12.2.min.js'
import axios from 'axios'
export default {
  data() {
    return {
      timeData: timeData,
      normolData: normolData,
      abnormalData: abnormalData,
      DemoTime: ''
    }
  },
  mounted: function() {
  
    var chart = echarts.init(document.getElementById('Monitor'));

    var timeData = this.timeData.map(function(str) {
      return str.replace('2009/', '');
    });
    console.log(typeof(timeData)+1111);
    console.log(typeof(normolData));
    var option = {
      title: {
        text: '每日登录正异常监控图',
        subtext: '数据来自银江城市宝',
        x: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      legend: {
        data: ['正常', '异常'],
        x: 'left'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      axisPointer: {
        link: { xAxisIndex: 'all' }
      },
      dataZoom: [{
          show: true,
          realtime: true,
          start: 30,
          end: 70,
          xAxisIndex: [0, 1]
        },
        {
          type: 'inside',
          realtime: true,
          start: 30,
          end: 70,
          xAxisIndex: [0, 1]
        }
      ],
      grid: [{
        left: 50,
        right: 50,
        height: '35%'
      }, {
        left: 50,
        right: 50,
        top: '55%',
        height: '35%'
      }],
      xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: { onZero: true },
          data: timeData
        },
        {
          gridIndex: 1,
          type: 'category',
          boundaryGap: false,
          axisLine: { onZero: true },
          data: timeData,
          position: 'top'
        }
      ],
      yAxis: [{
          name: '用户数(人)',
          type: 'value',
          max: 500
        },
        {
          gridIndex: 1,
          name: '用户数(人)',
          type: 'value',
          inverse: true
        }
      ],
      series: [{
          name: '正常',
          type: 'line',
          symbolSize: 8,
          hoverAnimation: false,
          data: this.normolData
        },
        {
          name: '异常',
          type: 'line',
          xAxisIndex: 1,
          yAxisIndex: 1,
          symbolSize: 8,
          hoverAnimation: false,
          data: this.abnormalData
        }
      ]
    };
    chart.setOption(option);
  },
  methods: {
  }
}

</script>
<style>
h3 {
  margin: 20px auto;
  display: block;
  text-align: center;
  font-weight: 800;
}
#Monitor{
  color: #000
}
</style>
