<template>
    <el-row class="warp">
        <el-col :span="24" class="warp-breadcrum">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">
                    <b>首页</b>
                </el-breadcrumb-item>
                <el-breadcrumb-item>echarts</el-breadcrumb-item>    
                <el-breadcrumb-item>地图 <i class="iconfont icon-c23_hide"></i></el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
    
        <el-col :span="24" class="warp-main">
            <h3>全国PM25</h3>
            <div id="Map" style="width:80%; height:400px; margin:0 auto"></div>
        </el-col>
        <el-col :span="24" class="warp-main">
            <h3>全国iphone机型销售分布图</h3>
            <div id="Map1" style="width:80%; height:400px;margin:0 auto;margin-bottom:100px"></div>
        </el-col>
    </el-row>
</template>

<script>
import { data, geoCoordMap } from '../bookcategory/mapDate.js'
import echarts from 'echarts'
import 'echarts/map/js/china.js'
export default {
    data() {
        return {
            msg: 'hello vue',
            geoCoordMap: geoCoordMap,
            data: data
        }
    },
    mounted: function () {
        console.log(geoCoordMap);
        var chart = echarts.init(document.getElementById('Map'));
        this.phoneMap = echarts.init(document.getElementById('Map1'))
        var option = {
            backgroundColor: '#404a59',
            title: {
                text: '全国主要城市空气质量',
                subtext: 'data from PM25.in',
                sublink: 'http://www.pm25.in',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                top: 'bottom',
                left: 'right',
                data: ['pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                min: 0,
                max: 300,
                splitNumber: 5,
                color: ['#d94e5d', '#eac736', '#50a3ba'],
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },

                regions: [{
                    name: '西藏',
                    itemStyle: {
                        normal: {
                            areaColor: 'red',
                            color: 'red'
                        }
                    }
                }],
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: [
                {
                    name: 'pm2.5',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: this.convertData(data),
                    symbolSize: 12,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },
                    zlevel: 20
                }
            ]
        }
        chart.setOption(option);
        console.log(option);
        //以下是手机销量
        function randomData() {
            return Math.round(Math.random() * 1000);
        };
        this.phoneMap.setOption({

            title: {
                text: 'iphone销量',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['iphone3', 'iphone4', 'iphone5']
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '重庆', value: randomData() },
                        { name: '河北', value: randomData() },
                        { name: '河南', value: randomData() },
                        { name: '云南', value: randomData() },
                        { name: '辽宁', value: randomData() },
                        { name: '黑龙江', value: randomData() },
                        { name: '湖南', value: randomData() },
                        { name: '安徽', value: randomData() },
                        { name: '山东', value: randomData() },
                        { name: '新疆', value: randomData() },
                        { name: '江苏', value: randomData() },
                        { name: '浙江', value: randomData() },
                        { name: '江西', value: randomData() },
                        { name: '湖北', value: randomData() },
                        { name: '广西', value: randomData() },
                        { name: '甘肃', value: randomData() },
                        { name: '山西', value: randomData() },
                        { name: '内蒙古', value: randomData() },
                        { name: '陕西', value: randomData() },
                        { name: '吉林', value: randomData() },
                        { name: '福建', value: randomData() },
                        { name: '贵州', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '青海', value: randomData() },
                        { name: '西藏', value: randomData() },
                        { name: '四川', value: randomData() },
                        { name: '宁夏', value: randomData() },
                        { name: '海南', value: randomData() },
                        { name: '台湾', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() }
                    ]
                },
                {
                    name: 'iphone4',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '重庆', value: randomData() },
                        { name: '河北', value: randomData() },
                        { name: '安徽', value: randomData() },
                        { name: '新疆', value: randomData() },
                        { name: '浙江', value: randomData() },
                        { name: '江西', value: randomData() },
                        { name: '山西', value: randomData() },
                        { name: '内蒙古', value: randomData() },
                        { name: '吉林', value: randomData() },
                        { name: '福建', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '西藏', value: randomData() },
                        { name: '四川', value: randomData() },
                        { name: '宁夏', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() }
                    ]
                },
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '台湾', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() }
                    ]
                }
            ]

        })
    },
    methods: {
        convertData: function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        }

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
</style>
