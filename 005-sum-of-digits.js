function digital_root(num) {
    if (num < 10) {
        return num;
    }

    const digitsMultiplied = ('' + num)
        .split('')
        .map(num => +num)
        .reduce((previousValue, currentValue) => previousValue + currentValue);

    return digital_root(digitsMultiplied);
}

console.log(digital_root(16), 7);
console.log(digital_root(456), 6);