var donutEl = document.getElementById("donut").getContext("2d");
var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                52,
                15,
                12,
                11,
                10
            ],
            backgroundColor: [
                "#010D81",
                "#4954BC",
                "#5464FB",
                "#7C89FE",
                "#A6AEFB"
            ],
            label:{

            }
        }]
    },
    options: {
        responsive: true,
        cutoutPercentage: 70,
    }
};

Chart.pluginService.register({
    beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

        ctx.restore();
        ctx.font = "24px ProximaNovaRegular";
        ctx.textBaseline = "middle";

        var text = "211,298",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();


        ctx.restore();
        ctx.font = "10px ProximaNovaRegular";
        ctx.textBaseline = "middle";

        var text2 = "Websites",
            textX2 = Math.round((width - ctx.measureText(text2).width) / 2),
            textY2 = height / 2 + 20;
        ctx.fillText(text2, textX2, textY2);
        ctx.save();
    }
});
new Chart(donutEl, config);