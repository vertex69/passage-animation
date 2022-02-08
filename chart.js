// colors
const red = "#ff3452";
const green = "#23e8a1";
const yellow = "#fbc059";
const stroke = "#263241";

const barChart = document.getElementById("bar");
let delayed;
let cdelayed;
const pieChart = document.getElementById("pie").getContext("2d");
var chartData = {
  type: "doughnut",
  data: {
    labels: [
      "Unregistered/Illegal Vessels",
      "Legally Permitted",
      "Permitted but Monitoring",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [30, 60, 10],
        backgroundColor: [red, green, yellow],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    cutout: 60,
    responsive: true,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    animation: {
      onComplete: () => {
        cdelayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (
          context.type === "data" &&
          context.mode === "default" &&
          !cdelayed
        ) {
          delay = context.dataIndex * 100 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

var pie = new Chart(pieChart, chartData);
var isFinished = {
    value: true
};

function updateChart() {
  if (isFinished.value == true) {
    alert("fuck");
    pie.update();
  }
}

const bar = new Chart(barChart, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "APAC RE Index",
        backgroundColor: red,
        borderColor: red,
        fill: false,
        tension: 0.5,
        data: [300, 50, 200, 20, 50, 150, 100],
      },
      {
        label: "APAC PME",
        backgroundColor: green,
        borderColor: green,
        fill: false,
        tension: 0.5,
        data: [50, 300, 100, 450, 150, 200, 300],
      },
      {
        label: "APAC PME",
        backgroundColor: yellow,
        borderColor: yellow,
        fill: false,
        tension: 0.5,
        data: [70, 450, 100, 250, 80],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Chart.js Line Chart - Logarithmic",
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 500 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
