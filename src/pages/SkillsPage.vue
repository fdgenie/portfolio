<template>
  <div class="q-pa-md ">
    <div class="column" style="height: 100vh">
      <div class="col-3" />
      <div class="col-4 row">
        <span class="col-1" />
        <span class="col">
          <v-chart
            style="width: 100%; min-height: 400px"
            :options="graphConfig"
          />
        </span>
        <span class="col-2" />
      </div>
      <div class="col" />
    </div>
  </div>
</template>

<script>
import VChart from "vue-echarts";
import line from "echarts/lib/chart/line";
import graphic from "echarts/lib/component/graphic";
import bar from "echarts/lib/chart/bar";

export default {
  name: "SkillsPage",
  components: {
    VChart
  },
  data() {
    return {
      graphConfig: {
        color: ["#8EC9EB"],
        grid: {
          left: 0,
          bottom: 0,
          right: 0,
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: {
          type: "category",
          axisLine: { onZero: false, show: false },
          boundaryGap: false,
          data: [
            "Javascript",
            "VueJs",
            "AngularJs",
            "Quasar",
            "HTML",
            "CSS",
            "Java",
            "Spring",
            "NodeJs",
            "MySQL",
            "Firebase",
            "Agilie Methodologies"
          ].reverse(),
          axisLabel: {
            margin: 25
          },
          axisTick: {
            length: 0
          }
        },
        series: [
          {
            type: "bar",
            smooth: true,
            barCategoryGap: 20,
            data: [4, 3.5, 3.5, 3, 3, 3.5, 4.5, 4.5, 4, 3.5, 4.5, 4.5]
          }
        ]
      }
    };
  }
};
</script>
