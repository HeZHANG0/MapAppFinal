var age = ['Female', 'Male', 'Unknow'];
var barChartData = {
  labels: age,
  datasets: [{
    label: 'Case count',
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)'],
    borderColor:  ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)'],
    borderWidth: 1,
    data: [  10049, 8124, 140 ]
  }]

};

window.onload = function() {
  var ctx3 = document.getElementById('canvas3').getContext('2d');
  window.myBar = new Chart(ctx3, {
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Case count by gender group'
      }
    }
  });

};
