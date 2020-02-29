function solution(number){
    if (number < 3) {
        return 0;
    }

    let sum = 3;

    for (let i = 4; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(solution(10), 23);