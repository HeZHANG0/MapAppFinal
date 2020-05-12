var dates = ['3/14','3/16','3/17','3/18','3/19','3/20'];
var config1 = {
  type: 'line',
  data: {
    labels: dates,
    datasets: [{
      fill: true,
      backgroundColor:'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      data: [6, 7, 16, 8,32,31  ],
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Case count by date'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Count'
        }
      }]
    }
  }
};

window.onload = function() {
  var ctx1 = document.getElementById('canvas1').getContext('2d');
  window.myLine = new Chart(ctx1, config1);
};
