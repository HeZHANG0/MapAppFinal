var age = ['<20', '20-34', '35-54', '55-74', '75+'];
var barChartData = {
  labels: age,
  datasets: [{
    label: 'Case count',
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    borderColor: 'rgba(255, 159, 64, 1)',
    borderWidth: 1,
    data: [  540, 4156, 5830, 5389, 2391 ]
  }]

};

window.onload = function() {
  var ctx2 = document.getElementById('canvas2').getContext('2d');
  window.myBar = new Chart(ctx2, {
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Case count by age group'
      }
    }
  });

};
