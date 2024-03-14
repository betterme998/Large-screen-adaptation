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

function getOption(pieDatas) {
  let colors = pieDatas.map((item) => {
    return item.color;
  });

  let data = pieDatas.map((item) => {
    return {
      value: item.value,
      name: item.name,
    };
  });

  let total = pieDatas.reduce((a, b) => {
    return a + b.value * 1;
  }, 0);

  let option = {
    color: colors,
    title: {
      text: `{nameSty| 设备总数}\n{number|${total}}`,
      top: "50%",
      left: "30%",
      textStyle: {
        rich: {
          nameSty: {
            fontSize: 19,
            color: "white",
            padding: [10, 0],
          },
          number: {
            fontSize: 24,
            color: "white",
            padding: [4, 0, 0, 20],
          },
        },
      },
    },
    legend: {
      orient: "vertical",
      right: "10%",
      top: "18%",
      itemGap: 20,
      itemWidth: 16,
      itemHeigth: 16,
      icon: "rect",
      formatter: function (name) {
        var currentItem = pieDatas.find((item) => item.name === name);
        return (
          "{nameSty|" +
          currentItem.name +
          "}\n" +
          "{numberSty|" +
          currentItem.value +
          "个 }" +
          "{preSty|" +
          currentItem.percentage +
          "}"
        );
      },
      textStyle: {
        rich: {
          nameSty: {
            fontSize: 12,
            color: "#FFFFFF",
            padding: [10, 14],
          },
          numberSty: {
            fontSize: 12,
            color: "#40E6ff",
            padding: [0, 0, 0, 14],
          },
          preSty: {
            fontSize: 12,
            color: "#40E6ff",
          },
        },
      },
    },
    series: [
      {
        type: "pie",
        center: ["40%", "57%"],
        radius: ["30%", "75%"],
        label: {
          show: false,
        },
        data: data,
        roseType: "area",
      },
    ],
  };
  return option;
}
</script>

<style scoped></style>
