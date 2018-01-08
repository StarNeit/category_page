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
new Chart(donutEl, config);