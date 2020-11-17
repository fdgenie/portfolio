<template>
  <div class="q-pa-md bg-grey-10">
    <div v-if="!$q.platform.is.mobile" class="column" style="height: 100vh">
      <div class="col-3" />
      <div class="col-1 row">
        <span class="col-1" />
        <p class="text-teal-13 text-h2">
          SKILLS
        </p>
      </div>
      <div class="col-1" />
      <div class="col-4 row">
        <span class="col-1" />
        <span class="col-3">
          <p class="text-grey-4 text-h5">
            Always eager to learn new technologies and expand my skillset.
            Currently enjoying working with VueJS and Quasar, and dipping my
            toes in GraphQL
          </p>
        </span>
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
    <div v-else class="column" style="height: 100vh">
      <div class="col-1" />
      <div class="col-1 row">
        <p class="text-teal-13 text-h2">
          SKILLS
        </p>
      </div>
      <div class="col-1" />
      <div class="col-1">
        <p class="text-grey-4 text-body">
          Always eager to learn new technologies and expand my skillset.
          Currently enjoying working with VueJS and Quasar, and dipping my toes
          in GraphQL
        </p>
      </div>
      <div class="col-4 row">
        <span class="col">
          <v-chart
            style="width: 100%; min-height: 400px"
            :option="graphConfigMobile"
          />
        </span>
        <span class="" />
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
        legend: {
          tooltip: false
        },
        grid: {
          left: 0,
          bottom: 0,
          right: 0,
          top: 15,
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
            "Agile Methodologies"
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
            data: [4, 3.5, 3.5, 3, 3, 3.5, 4.5, 4.5, 4, 3.5, 4.5, 4.5],
            cursor: "auto"
          }
        ]
      },
      graphConfigMobile: {
        color: ["#37e3ac"],
        grid: {
          left: -15,
          bottom: 0,
          right:  0,
          containLabel: true
        },
        boundaryGap: false,
        xAxis: {
          type: "category",
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
            "Agile Methodologies"
          ].reverse(),
          axisLabel: {
            rotate: 90
          },
          axisLine: {
            onZero: false,
            show: false,
            lineStyle: {
              color: "#dadada"
            }
          },
          axisTick: {
            length: 0
          }
        },
        yAxis: {
          show: false
        },
        series: [
          {
            data: [4, 3.5, 3.5, 3, 3, 3.5, 4.5, 4.5, 4, 3.5, 4.5, 4.5],
            type: "bar",
            showBackground: true
          }
        ]
      }
    };
  }
};
</script>
