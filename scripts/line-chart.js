// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================

var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 150);

gradient.addColorStop(0, 'rgba(58, 67, 153, 0.5)');
gradient.addColorStop(0.5, 'rgba(58, 67, 153, 0.25)');
gradient.addColorStop(1, 'rgba(58, 67, 153, 0)');


var data  = {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
    datasets: [{
        label: 'Custom Label Name',
        backgroundColor: gradient,
        pointBackgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#3A4399',
        data: [50, 55, 80, 81, 54, 50]
    }]
};


var options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
        easing: 'easeInOutQuad',
        duration: 520
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: 'rgba(200, 200, 200, 0.1)',
                lineWidth: 1
            }
        }],
        yAxes: [{
            gridLines: {
                color: 'rgba(200, 200, 200, 0.1)',
                lineWidth: 1
            }
        }]
    },
    elements: {
        line: {
            tension: 0.000001
        }
    },
    legend: {
        display: false
    },
    point: {
        backgroundColor: 'white'
    },
    // tooltips: {
    //     titleFontFamily: 'Open Sans',
    //     backgroundColor: 'rgba(0,0,0,0.3)',
    //     titleFontColor: 'red',
    //     caretSize: 5,
    //     cornerRadius: 2,
    //     xPadding: 10,
    //     yPadding: 10
    // }
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
    options: options
});