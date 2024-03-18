<template>
  <main class="screen-bg">
    <div class="header"></div>

    <div class="left-top">
      <pie-charts :echartsDatas="charginPile"></pie-charts>
    </div>
    <div class="left-bottom">
      <line-charts :echartsDatas="charginLine"></line-charts>
    </div>

    <div class="right-top"></div>
    <div class="right-center">
      <bar-charts :echartDatas="charginBar"></bar-charts>
    </div>
    <div class="right-bottom">
      <right-bottom-svg :dots="exceptionMonitoring"></right-bottom-svg>
    </div>

    <div class="center">
      <center-svg></center-svg>
    </div>
    <div class="bottom"></div>
  </main>
</template>

<script setup>
import PieCharts from "@/components/pie-echarts.vue";
import LineCharts from "@/components/line-echarts.vue";
import BarCharts from "@/components/bar-echarts.vue";
import RightBottomSvg from "@/components/right-bottom-svg.vue";
import CenterSvg from "@/components/center-svg.vue";

import { getPowerScreenData } from "@/services";

import {
  chargingStatistics,
  charginLineData,
  charginPileData,
  exceptionMonitoringData,
} from "./config/home-data";
import { ref } from "vue";

let charginPile = ref(charginPileData); // 左上角饼图数据
let charginLine = ref(charginLineData); //左下角折线图数据
let charginBar = ref(chargingStatistics); //右中间条形图
let exceptionMonitoring = ref(exceptionMonitoringData); //异常监控

// 发起网络请求
getPowerScreenData().then((res) => {
  console.log(res);
  charginPile.value = res.data.chargingPile.data;
  charginLine.value = res.data.processMonitoring.data;
  charginBar.value = res.data.chargingStatistics.data;
  exceptionMonitoring.value = res.data.exceptionMonitoring.data;
});
</script>

<style scoped>
.screen-bg {
  /* 定位 */
  position: absolute;
  width: 100%;
  height: 100%;

  /* 背景 */
  background-color: #070a3c;
  background-image: url(../assets/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.header {
  /* 定位 */
  position: absolute;
  top: 21px;
  height: 56px;
  width: 100%;

  /* 背景 */
  background-image: url(../assets/images/bg_header.svg);
  background-repeat: no-repeat;
}

.left-top {
  /* 定位 */
  position: absolute;
  left: 16px;
  top: 116px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(../assets/images/bg_left-top.svg);
  background-repeat: no-repeat;
}
.left-bottom {
  /* 定位 */
  position: absolute;
  left: 16px;
  bottom: 49px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(../assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
}
.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
}
.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(../assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;
}

.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(../assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
}
</style>
