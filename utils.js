let equation = "(x)**3 + 5*(x)**2 + x";

function parse(str, x) {
    str = str.replaceAll("x", x)
    return Function(`'use strict'; return (${str})`)()
}