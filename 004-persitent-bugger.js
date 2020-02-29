function persistence(num) {
    if (num < 10) {
        return 0;
    }

    const digitsMultiplied = ('' + num)
        .split('')
        .reduce((previousValue, currentValue) => previousValue * currentValue);

    return 1 + persistence(digitsMultiplied);
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);