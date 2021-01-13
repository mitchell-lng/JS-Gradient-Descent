function rfunc(z) {
    return z**3+5*z**2+z;
}

function getChange(x) {
    if (alpha != "") {
        return x * alpha;
    }
    return x * 0.1;
}

function gDescent(steps, goal) {
    var points = [[], []];
    let val = 1;

    for (var i = 0; i < steps; i++) {
        points[0].push(parseFloat(val.toFixed(15)));
        points[1].push(rfunc(val));
        val += getChange(goal - rfunc(val));
    }

    return points;
}