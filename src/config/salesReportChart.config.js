const salesRaport = {
  chart: {
    marginLeft: "5",
    height: "363",
    type: 'column',
    backgroundColor: '#2f3242',
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    type: 'category',
    min: 1,
    labels: {

      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    gridLineColor: '#515464',
    min: 0,
    title: {
      text: 'Population (millions)'
    }
  },
  credits: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: 'Sales: <b>{point.y:.1f}%</b>'
  },
  series: [{
    color:'#505464',
    border: "none",
    name: 'Population',
    data: [],
  }]
};
export default salesRaport;