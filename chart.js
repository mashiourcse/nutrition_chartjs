const ctx = document.getElementById('myChart');

let myChart;
let jsonData;
let localStorageData = JSON.parse(localStorage.getItem('nutritionData'));
console.log(localStorageData);

    fetch('data.json')
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        
        jsonData = data;
        createChart(localStorageData.data, 'doughnut');
    })

    function createChart( data, type){
      
        console.log(data.data.data);
        console.log(data.label);
        
       myChart = new Chart(ctx, {
            type: type, // bar 
            data: {
              labels: data.data.map(row => row.name),
              datasets: [{
                label: '# of '+data.label,
                data: data.data.map(row => row.value),
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              },
             // maintainAsepectRatio: false
            }
          });
        
    }

    function setChartType(chartType){
        myChart.destroy();
        createChart(localStorageData, chartType);
    }
 