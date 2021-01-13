var alpha = 0.1;

let equation = "x[i]**3+5*x[i]**2+x[i]"

var x = [...Array(21).keys()];
var y = [];

for (var i = 0; i < x.length; i++) {
    x[i] = x[i] / 2 - 5;
    y.push(eval(equation));
}

// myChart.render() will update the board

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: x,
        datasets: [{
            label: 'Equation',
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 2,
            fill: false,
            data: y
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

function gdGraph() {
    let points = gDescent(document.getElementById("volume").value, 5);

    var ctx = document.getElementById('gDescent').getContext('2d');
    var gdGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: points[0],
            datasets: [{
                type: 'scatter',
                label: 'Gradient Descent',
                borderColor: "rgba(240, 44, 0, 1)",
                borderWidth: 2,
                fill: false,
                data: points[1]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function update() {
    points = gDescent(document.getElementById("volume").value, 5);
    gdGraph()
    document.getElementById("volume-counter").innerText = document.getElementById("volume").value
    document.getElementById("final").innerText = points[1][points[1].length - 1];
}

update()