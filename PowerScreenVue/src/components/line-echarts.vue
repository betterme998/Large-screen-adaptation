<template>
  <!-- echarts 的容器 -->
  <div
    ref="divRef"
    class="home"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import useEchart from "@/hooks/useEchart";
const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  echartsDatas: {
    type: Array,
    default: function () {
      return [];
    },
  },
});

// 监听echartsDatas 变化
watch(
  () => props.echartsDatas,
  (newV, oldV) => {
    setupEchart(newV);
  }
);

// 拿到div的dom对象
let divRef = ref(null);
let hyChart = null;
onMounted(() => {
  setupEchart(props.echartsDatas);
});

function setupEchart(echartsDatas) {
  if (!hyChart) {
    hyChart = useEchart(divRef.value);
  }
  // 左上角扇形饼图
  // 准备数据
  let option = getOption(echartsDatas);
  hyChart.setOption(option);
}

function getOption(lineDatas) {
  const Data = lineDatas.map((item) => {
    return item;
  });
  console.log(Data);
  let option = {
    // backgroundColor: 'rbg(40,46,72)',
    grid: {
      left: "5%",
      right: "1%",
      top: "20%",
      bottom: "15%",
      containLabel: true, // grid 区域是否包含坐标轴的刻度标签
    },
    legend: {
      right: "center",
      bottom: "5%",
      itemGap: 20,
      itemWidth: 13,
      itemHeigth: 12,
      textStyle: {
        color: "#64BCFF",
      },
      icon: "rect",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        lineStyle: {
          color: "#20FF89",
        },
      },
    },
    xAxis: [
      {
        type: "category",
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: "#64BCFF",
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          color: "#64BCFF",
        },
      },
    ],
    series: [
      {
        name: Data[0].name,
        type: "line",
        smooth: true,
        stack: "总量",
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: "#20FF89",
          lineStyle: {
            color: "#20FF89",
            width: 2,
          },
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#20FF89",
              },
              {
                offset: 1,
                color: "rgba(255, 255, 255, 0)",
              },
            ],
          },
        },
        data: Data[0].data,
      },
      {
        name: Data[1].name,
        type: "line",
        smooth: true,
        stack: "总量",
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: "#EA9502",
          lineStyle: {
            color: "#EA9502",
            width: 2,
          },
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#EA9502",
              },
              {
                offset: 1,
                color: "rgba(255, 255, 255, 0)",
              },
            ],
          },
        },
        data: Data[1].data,
      },
    ],
  };
  return option;
}
</script>

<style scoped></style>
