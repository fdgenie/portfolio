<template>
  <div class="q-pa-md bg-grey-10">
    <div class="column" style="height: 100vh">
      <div class="col-3" />
      <div class="col-4 row">
        <span class="col-1" />
        <span class="col">
          <v-chart
            style="width: 100%; min-height: 400px"
            :option="graphConfig"
          />
        </span>
        <span class="col-2" />
      </div>
      <div class="col" />
    </div>
  </div>
</template>

<script>
import VChart from "vue-echarts-v3/src/full.js";

export default {
  name: "SkillsPage",
  components: {
    VChart
  },
  data() {
    return {
      graphConfig: {
        color: ["#37e3ac"],
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
          axisLine: {
            onZero: false,
            show: false,
            lineStyle: {
              color: "#dadada"
            }
          },
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
