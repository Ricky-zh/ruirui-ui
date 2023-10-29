<template>
  <div class="dashboard-container">
    <el-row>
      <el-col :span="6">
        <el-card shadow="always" class="dashboardCard">
          <div class="headNum">{{ 125 }}</div>
          <span>瞬时流量</span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="dashboardCard">
          <div class="headNum">{{ 1215 }}</div>
          <span>瞬时流量</span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="dashboardCard">
          <div class="headNum">{{ 12500 }}</div>
          <span>瞬时流量</span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="dashboardCard">
          <div class="headNum">{{ 1225 }}</div>
          <span>瞬时流量</span>
        </el-card>
      </el-col>
    </el-row>
    <div class="chartsList">
      <div ref="visitResource" class="visitResource">
      </div>
      <div ref="visitUser" class="visitResource">
      </div>
      <div ref="reviewCharts" class="visitResource">
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as echarts from 'echarts'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      visitResourceChart: null,
      visitUserCharts: null,
      reviewCharts: null
    }
  },
  mounted() {
    this.initVisitResourceChart()
    this.initVisitUserChart()
    this.initReviewCharts()
  },
  // 每次销毁前清空
  beforeDestroy() {
    if (!this.visitResourceChart) {
      return
    }
    if (!this.visitUserCharts) {
      return
    }
    if (!this.reviewCharts) {
      return
    }
    this.visitResourceChart.dispose()
    this.visitUserCharts.dispose()
    this.reviewCharts.dispose()
    this.visitResourceChart = null
    this.visitUserCharts = null
    this.reviewCharts = null
  },
  methods: {
    initVisitResourceChart() {
      this.visitResourceChart = echarts.init(this.$refs.visitResource, 'light')
      this.visitResourceChart.setOption({
        title: {
          text: '访问来源',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['PC', '微信小程序', '安卓App', 'IOS']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: 'PC' },
              { value: 310, name: '微信小程序' },
              { value: 234, name: '安卓App' },
              { value: 135, name: 'IOS' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    initVisitUserChart() {
      const colors = ['#5470C6', '#91CC75', '#EE6666']
      this.chart = echarts.init(this.$refs.visitUser)
      this.chart.setOption({
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['新用户', '活跃用户']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            // prettier-ignore
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '新用户',
            position: 'right',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '活跃用户',
            position: 'right',
            alignTicks: true,
            offset: 80,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1]
              }
            }
          }
        ],
        series: [
          {
            name: '新用户',
            type: 'bar',
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
          },
          {
            name: '活跃用户',
            type: 'bar',
            yAxisIndex: 1,
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ]
          }
        ]
      })
    },
    initReviewCharts() {
      this.chart = echarts.init(this.$refs.reviewCharts)
      this.chart.setOption({
        title: {
          text: '用户分析'
        },
        legend: {
          data: ['新用户', '活跃用户']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: '新用户'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: '活跃用户'
              }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  background-color: #fafafa;
}

.dashboardCard {
  margin: 2em 1em 1em 1em;
  height: 40%;
  background-color: #54B566;

  .headNum {
    color: white;
    font-size: 2em;
    margin-bottom: 6px;
  }

  span {
    color: white;
    font-size: 0.8em;
  }
}

.chartsList {
  display: flex;
  justify-content: space-around;

  .visitResource {
    width: 30%;
    height: 400px;
    margin-left: 1em;
    background-color: white;
  }
}
</style>
