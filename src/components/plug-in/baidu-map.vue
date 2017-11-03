<template>
  <div style="margin-top:10px">
    <card>
      <p slot='title' style="color:#jahjss">
        百度地图API显示多个标注点带提示的代码
      </p>
      <Row type="flex" justify="space-around">
        <fieldset class="demo_content">
          <p style="min-height: 300px; width: 100%;" id="map">
          </p>
        </fieldset>
      </Row>
    </card>
  </div>
</template>
<script>
var map;
export default {
  data() {
    return {
      markerArr: [
        { title: "名称：大理市火车站", point: "100.233644,26.861004", address: "大理市火车站", tel: "12306" },
        { title: "名称：丽江古城", point: "100.236499,25.599545", address: "大理市丽江风景区", tel: "18500000000" },
        { title: "名称：洱海", point: "100.272671,25.649292", address: "大理市洱海", tel: "18500000000" }
      ]
    }
  },
  mounted() {
    function map_init() {
      map = new BMap.Map("map");
      //第1步：设置地图中心点，大理市  
      var point = new BMap.Point(100.233644, 26.861004);
      //第2步：初始化地图,设置中心点坐标和地图级别。    
      map.centerAndZoom(point, 13);
      //第3步：启用滚轮放大缩小    
      map.enableScrollWheelZoom(true);
      //第4步：向地图中添加缩放控件    
      var ctrlNav = new window.BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
      });
      map.addControl(ctrlNav);
      //第5步：向地图中添加缩略图控件    
      var ctrlOve = new window.BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 1
      });
      map.addControl(ctrlOve);

      //第6步：向地图中添加比例尺控件    
      var ctrlSca = new window.BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
      });
      map.addControl(ctrlSca);

      //第7步：绘制点      
      for (var i = 0; i < this.markerArr.length; i++) {
        var p0 = this.markerArr[i].point.split(",")[0];
        var p1 = this.markerArr[i].point.split(",")[1];
        var maker = this.addMarker(new window.BMap.Point(p0, p1), i);
        this.addInfoWindow(maker, this.markerArr[i], i);
      }
    };

    // function map_load() { // var load = document.createElement("script"); // load.src = `${this.linkurl}`; // document.body.appendChild(load); // } // map_load();

  },
  methods: {
    // 添加标注    
    addMarker: function(point, index) {
      var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png",
        new BMap.Size(23, 25), {
          offset: new BMap.Size(10, 25),
          imageOffset: new BMap.Size(0, 0 - index * 25)
        });
      var marker = new BMap.Marker(point, { icon: myIcon });
      map.addOverlay(marker);
      return marker;
    }
  },
  // 添加信息窗口    
  addInfoWindow: function(marker, poi) {
    //pop弹窗标题    
    var title = '<p style="font-weight:bold;color:#CE5521;font-size:14px">' + poi.title + '</p>';
    //pop弹窗信息    
    var html = [];
    html.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px arial,simsun,sans-serif"><tbody>');
    html.push('<tr>');
    html.push('<td style="vertical-align:top;line-height:16px;width:38px;white-space:nowrap;word-break:keep-all">地址:</td>');
    html.push('<td style="vertical-align:top;line-height:16px">' + poi.address + ' </td>');
    html.push('</tr>');
    html.push('</tbody></table>');
    var infoWindow = new BMap.InfoWindow(html.join(""), { title: title, width: 200 });

    var openInfoWinFun = function() {
      marker.openInfoWindow(infoWindow);
    };
    marker.addEventListener("click", openInfoWinFun);
    return openInfoWinFun;
  }
}

</script>
<!-- <script src="http://api.map.baidu.com/api?v=2.0&ak=vEdIYG7O6hfAtvEPj0r0VFvIPws3psP3&callback=map_init"></script> -->
<style>
.demo_main {
  padding: 20px;
  padding-top: 10px;
}
.demo_title {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #D3D8E0;
  border: solid 1px gray;
}
.demo_content {
  padding: 10px;
  margin-bottom: 10px;
  border: solid 1px gray;
}
fieldset {
  border: 1px solid gray;
}

</style>
