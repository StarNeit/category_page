var presets = window.chartColors;
var utils = Samples.utils;
var inputs = {
    min: -500,
    max: 500,
    count: 5,
    decimals: 2,
    continuity: 1
};
function generateData(config) {
    return utils.numbers(Chart.helpers.merge(inputs, config || {}));
}
function generateLabels(config) {
    return utils.months(Chart.helpers.merge({
        count: inputs.count,
        section: 3
    }, config || {}));
}
var options = {
    maintainAspectRatio: false,
    spanGaps: false,
    elements: {
        line: {
            tension: 0.000001
        }
    },
    plugins: {
        filler: {
            propagate: false
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                autoSkip: false,
                maxRotation: 0
            }
        }]
    }
};

var boundary = 'start';
utils.srand(8);
new Chart('chart-2', {
    type: 'line',
    data: {
        labels: generateLabels(),
        datasets: [{
            backgroundColor: utils.transparentize(presets.main),
            borderColor: presets.main,
            data: generateData(),
            label: 'Dataset',
            fill: boundary
        }]
    },
    options: Chart.helpers.merge(options, {
        title: {
            text: 'fill: ' + boundary,
            display: false
        }
    })
});
/*
[false, 'origin', 'start', 'end'].forEach(function(boundary, index) {
    // reset the random seed to generate the same data for all charts
    console.log(boundary);
    utils.srand(8);
    new Chart('chart-' + index, {
        type: 'line',
        data: {
            labels: generateLabels(),
            datasets: [{
                backgroundColor: utils.transparentize(presets.blue),
                borderColor: presets.blue,
                data: generateData(),
                label: 'Dataset',
                fill: boundary
            }]
        },
        options: Chart.helpers.merge(options, {
            title: {
                text: 'fill: ' + boundary,
                display: true
            }
        })
    });
});*/