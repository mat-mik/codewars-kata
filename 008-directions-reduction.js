const OPPOSITES = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "WEST": "EAST",
    "EAST": "WEST"
};

function dirReduc(arr) {
    let wasAnyChange = false;
    do {
        wasAnyChange = false;
        for (let i = 0; i < arr.length - 1; i++) {
            const direction = arr[i];
            const nextDirection = arr[i+1];
            const nextDirectionOpposition = OPPOSITES[direction];

            if (nextDirection === nextDirectionOpposition) {
                arr.splice(i, 2);
                wasAnyChange = true;
                break;
            }
        }
    } while (wasAnyChange);

    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"]);

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), []);
