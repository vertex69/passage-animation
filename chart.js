// colors
const red = "#ff3452"
const green = "#23e8a1"
const yellow = "#fbc059"
const stroke = "#263241"

const barChart = document.getElementById('bar');
const pieChart = document.getElementById('pie');
const pie = new Chart(pieChart, {
    type: 'doughnut',
    data: {
        labels: [
            'Unregistered/Illegal Vessels',
            'Legally Permitted',
            'Permitted but Monitoring'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [30, 60, 10],
            backgroundColor: [
                red,
                green,
                yellow

            ],
            hoverOffset: 4
        }]
    },
    options: {
        cutout: 40,
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            arc: {
                borderWidth: 0,
            },
        },
        plugins: {
            legend: {
                display: false
            },
        },
    }
});

const bar = new Chart(barChart, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'APAC RE Index',
            backgroundColor: red,
            borderColor: red,
            fill: false,
            tension: .5,
            data: [
                300,
                50,
                200,
                20,
                50,
                150,
                100,


            ],
        }, {
            label: 'APAC PME',
            backgroundColor: green,
            borderColor: green,
            fill: false,
            tension: .5,
            data: [
                50,
                300,
                100,
                450,
                150,
                200,
                300
            ],

        }, {
            label: 'APAC PME',
            backgroundColor: yellow,
            borderColor: yellow,
            fill: false,
            tension: .5,
            data: [
                70,
                450,
                100,
                250,
                80,
            ],

        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Chart.js Line Chart - Logarithmic'
        },
        scales: {
            x: {
                grid: {
                    color: stroke,
                    borderColor: stroke
                }
            },
            y: {
                grid: {
                    color: stroke,
                    borderColor: stroke
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
        },
    }
});