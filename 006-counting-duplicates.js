function duplicateCount(text) {
    text = text.split('')
        .map(letter => letter.toLowerCase());

    const map = {};

    text.forEach(letter => {
        if (map[letter]) {
            map[letter] += 1;
        } else {
            map[letter] = 1;
        }
    });

    let result = 0;

    for (const key in map) {
        if (map[key] > 1) {
            result += 1;
        }
    }

    return result;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");
console.log(duplicateCount("aA11"), 2);
console.log(duplicateCount("ABBA"), 2);