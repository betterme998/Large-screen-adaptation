//左上角 扇形饼图数据
export const charginPileData = [
  {
    value: 100,
    name: "广州占比",
    percentage: "5%",
    color: "#34D160",
  },
  {
    value: 200,
    name: "深圳占比",
    percentage: "4%",
    color: "#027FF2",
  },
  {
    value: 300,
    name: "东莞占比",
    percentage: "8%",
    color: "#8A00E1",
  },
  {
    value: 400,
    name: "佛山占比",
    percentage: "10%",
    color: "#F19610",
  },
  {
    value: 500,
    name: "中山占比",
    percentage: "20%",
    color: "#6054FF",
  },
  {
    value: 600,
    name: "珠海占比",
    percentage: "40%",
    color: "#00C6FF",
  },
];

// 左下角 折线图数据 ；流程监控数据
export const charginLineData = [
  {
    name: "正常",
    data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410],
  },
  {
    name: "异常",
    data: [20, 12, 11, 24, 90, 330, 10, 1, 154, 90, 330, 10],
  },
];

//数据统计
export const chargingStatistics = [
  {
    name: "一月",
    value: 500,
  },
  {
    name: "二月",
    value: 2000,
  },
  {
    name: "三月",
    value: 3600,
  },
  {
    name: "四月",
    value: 1000,
  },
  {
    name: "五月",
    value: 1000,
  },
  {
    name: "六月",
    value: 2000,
  },
];

// 异常监控
export const exceptionMonitoringData = [
  {
    id: 1,
    name: "异常1",
    value: 5,
    dur: "10s",
    begin: "0s",
  },
  {
    id: 2,
    name: "异常2",
    value: 5,
    dur: "10s",
    begin: "-3s",
  },
  {
    id: 3,
    name: "异常3",
    value: 5,
    dur: "10s",
    begin: "-5s",
  },
];

// 设备数据分析
export const dataAnalysisData = [
  {
    id: 1,
    title: "设备总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: true,
  },
  {
    id: 2,
    title: "年增长总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: true,
  },
  {
    id: 3,
    title: "月增长总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: false,
  },
];
