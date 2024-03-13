// 封装Echarts
import * as echarts from "echarts";
import { onUnmounted, ref } from "vue";

export default function useEchart(divEl) {
  const echartInstance = echarts.init(divEl, null, { renderer: "svg" });

  // 销毁echarts实例
  onUnmounted(() => {
    echartInstance.dispose();
  });

  // 使用刚指定的配置项和数据显示图表。
  function setOption(option) {
    echartInstance.setOption(option);
  }

  // 控制大小
  function resizeEchart() {
    echartInstance.resize();
  }

  return {
    echartInstance,
    setOption,
  };
}
