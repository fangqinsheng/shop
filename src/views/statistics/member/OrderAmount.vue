<template>
  <div class="container">
    <div id="order-amount" :style="{width: '100%', height: '600px'}"></div>
  </div>
</template>

<script>
export default {
  name: "OrderAmount",
  data () {
    return {
      height: '120px'
    }
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let builderJson = {
        "all": 10887,
        "charts": {
          "map": 3237,
          "lines": 2164
        },
        "components": {
          "geo": 2788,
          "title": 9575
        },
        "ie": 9743
      };
      let downloadJson = {
        "echarts.min.js": 17365
      };
      let themeJson = {
        "dark.js": 1594,
        "infographic.js": 925
      };
      let orderAmount = this.$echarts.init(document.getElementById('order-amount'));
      orderAmount.setOption({
        tooltip: {},
        title: [{
          text: '购买数量',
          subtext: '总计 ' + builderJson.all,
          x: '25%',
          textAlign: 'center'
        }, {
          text: '终端商',
          subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
            return all + downloadJson[key];
          }, 0),
          x: '75%',
          textAlign: 'center'
        }, {
          text: '经销商',
          subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
            return all + themeJson[key];
          }, 0),
          x: '75%',
          y: '50%',
          textAlign: 'center'
        }],
        grid: [{
          top: 50,
          width: '50%',
          bottom: '45%',
          left: 10,
          containLabel: true
        }, {
          top: '55%',
          width: '50%',
          bottom: 0,
          left: 10,
          containLabel: true
        }],
        xAxis: [{
          type: 'value',
          max: builderJson.all,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.all,
          gridIndex: 1,
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: Object.keys(builderJson.charts),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          type: 'category',
          data: Object.keys(builderJson.components),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'chart',
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.charts[key];
          })
        }, {
          type: 'bar',
          stack: 'chart',
          silent: true,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.all - builderJson.charts[key];
          })
        }, {
          type: 'bar',
          stack: 'component',
          xAxisIndex: 1,
          yAxisIndex: 1,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.components[key];
          })
        }, {
          type: 'bar',
          stack: 'component',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.all - builderJson.components[key];
          })
        }, {
          type: 'pie',
          radius: [0, '30%'],
          center: ['75%', '25%'],
          data: Object.keys(downloadJson).map(function (key) {
            return {
              name: key.replace('.js', ''),
              value: downloadJson[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '30%'],
          center: ['75%', '75%'],
          data: Object.keys(themeJson).map(function (key) {
            return {
              name: key.replace('.js', ''),
              value: themeJson[key]
            }
          })
        }]
      })
    }
  }
}
</script>

<style scoped>

</style>
