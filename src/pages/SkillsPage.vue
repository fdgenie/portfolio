<template>
  <q-page class="q-pa-md bg-grey-10">
    <div class="center-left-text">
      <p class="text-teal-13 text-h2">
        SKILLS
      </p>

      <div :class="$q.screen.gt.sm ? 'row' : false">
        <div class="col-5">
          <p class="text-grey-4 text-h5">
            Always eager to learn new technologies and expand my skillset.
            Currently enjoying getting deeper in Vue3JS.
          </p>
        </div>
        <div class="offset-1 col">
          <v-chart
            style="width: 100%; min-height: 400px"
            :option="$q.platform.is.mobile ? graphConfigMobile : graphConfig"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import VChart from "vue-echarts-v3/src/lite.js";
import 'echarts/lib/chart/bar';

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
            "Express",
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
            barCategoryGap: 20,
            data: [4, 3, 3, 2.5, 3, 3.5, 4.5, 4.5, 4.5, 3.5, 4.5, 4.5],
            cursor: "auto"
          }
        ]
      },
      graphConfigMobile: {
        color: ["#37e3ac"],
        grid: {
          left: -15,
          bottom: 0,
          right: 0,
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
            data: [4, 3, 3, 2.5, 3, 3.5, 4.5, 4.5, 4.5, 3.5, 4.5, 4.5],
            type: "bar"
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
// $

@media screen and (min-width: 996px) {
  .center-left-text {
    @include positionTexts(absolute, 30%, 10%, 10%);
  }
}
</style>
