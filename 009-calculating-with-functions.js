function expression(number, operator) {
    if (operator) {
        return operator(number);
    } else {
        return number;
    }
}

function zero(operator) {
    return expression(0, operator);
}

function one(operator) {
    return expression(1, operator);
}

function two(operator) {
    return expression(2, operator);
}

function three(operator) {
    return expression(3, operator);
}

function four(operator) {
    return expression(4, operator);
}

function five(operator) {
    return expression(5, operator);
}

function six(operator) {

    return expression(6, operator);
}

function seven(operator) {

    return expression(7, operator)
}

function eight(operator) {

    return expression(8, operator);
}

function nine(operator) {

    return expression(9, operator);
}

function plus(number) {
    return function (number2) {
        return number + number2;
    }
}

function minus(number) {
    return function (number2) {
        return number2 - number;
    }
}

function times(number) {
    return function (number2) {
        return number * number2;
    }
}

function dividedBy(number) {
    return function (number2) {
        return Math.floor(number2 / number);
    }

}

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);