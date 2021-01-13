var alpha = 0.1;
var output = 5;

function lineGraph(z, y) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: z,
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
}

function gdGraph() {
    let canvas = document.getElementById('gDescent');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    if (document.getElementById("equation").value != "") {
        equation = document.getElementById("equation").value;
        equation = equation.replaceAll("^", "**").replaceAll("x", "(x)");
    }

    var z = [...Array(21).keys()];
    var y = [];

    for (var i = 0; i < z.length; i++) {
        z[i] = z[i] / 2 - (z.length / 4);
        let x = z[i];
        y.push(parse(equation, x));
    }

    points = gDescent(document.getElementById("volume").value, output);

    gdGraph();
    lineGraph(z, y);
    document.getElementById("volume-counter").innerText = document.getElementById("volume").value
    document.getElementById("final").innerText = points[0][points[1].length - 1];
    document.getElementById("equation-out").innerHTML = equation;
}

update()