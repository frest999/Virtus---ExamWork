const areaChart = {

  chart: {
    type: 'areaspline',
    height: "465",
    backgroundColor: '#2a2c3b',
    margin: [0, 0, 0, 0]
  },
  title: {
    text: null
  },
  xAxis: {
    categories: [],
    labels: {
      y: -10,
      style: {
        fontSize: ".875rem",
      }
    },
    gridLineColor: '#464959',
    gridZIndex: 4,
    gridLineWidth: 1,
    lineColor: "#3a3d4c",
  },

  yAxis: {
    gridLineWidth: 0,
    description: null,
    title: '',
    max: 15,
    min: 0,
    tickInterval: 3,
    labels: {
      enabled: false
    }

  },
  plotOptions: {
    areaspline: {
      marker: {
        enabled: false
      },
    },
    series: {
      fillColor: {
        linearGradient: [0, 0, 0, 400],
        stops: [
          [0, '#2b4f76'],
          [1, '#2e3c53']
        ]
      },
      lineWidth: 3,
      color: '#2196f3',
      marker: {
        states: {
          hover: {
            lineWidth: 2,
            radius: 6,
          }
        }
      },
    }
  },

  series: [{
    data: [],
  }],
  credits: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  tooltip: {
    headerFormat: '',
    pointFormat: '<b>{point.y}</b>',
    shared: true
  },
};

export default areaChart;