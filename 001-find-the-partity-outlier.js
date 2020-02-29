function findOutlier(integers) {
    let odds = 0;
    let lastOdd;
    
    let lastEven;

    integers.forEach(integer => {
        if (integer % 2 == 0) {
            lastEven = integer;
        } else {
            odds++;
            lastOdd = integer;
        }
    });

    if (odds == 1) {
        return lastOdd;
    } else {
        return lastEven;
    }
}

console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2, 6, 8, 10, 3]), 3)
console.log(findOutlier([0, 0, 3, 0, 0]), 3)
console.log(findOutlier([1, 1, 0, 1, 1]), 0)