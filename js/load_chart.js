window.onload = function() {
  var ctx1 = document.getElementById('canvas1').getContext('2d');
  window.myLine = new Chart(ctx1, config1);

  var ctx2 = document.getElementById('canvas2').getContext('2d');
  window.myBar = new Chart(ctx2, {
    type: 'bar',
    data: agechart,
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

  var ctx3 = document.getElementById('canvas3').getContext('2d');
  window.myBar = new Chart(ctx3, {
    type: 'bar',
    data: sexchart ,
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
