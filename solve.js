function getChange(x) {
    if (alpha != "") {
        return x * alpha;
    }
    return x * 0.1;
}

function gDescent(steps, goal) {
    var points = [[], []];
    let val = 0;

    for (var i = 0; i < steps; i++) {
        points[0].push(parseFloat(val.toFixed(15)));
        points[1].push(parse(equation, val));

        if (i / steps > 0.8) {
            alpha = alpha * ((0.99999999) ** i);
        }

        val += getChange(goal - parse(equation, val));
    }

    return points;
}