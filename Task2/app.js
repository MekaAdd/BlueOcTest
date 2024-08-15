function sumTopTwo(array) {
    let top1 = array[0] ?? 0;
    let top2 = array[1] ?? 0;

    for (let index = 2; index < array.length; index++) {
        if (array[index] > top1) {
            top1 = array[index];
        } else if (array[index] > top2) {
            top2 = array[index];
        }
    }

    return top1 + top2;
}

function assert(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

let case1 = [-3456, -2, 0, -1];
let case2 = [1, 4, 2, 3, 5];
let case3 = [12, 45, 234, 1];
let case4 = [1];
let case5 = [];

//Pass
assert(sumTopTwo(case1), -1);
assert(sumTopTwo(case2), 9);
assert(sumTopTwo(case3), 279);
assert(sumTopTwo(case4), 1);
assert(sumTopTwo(case5), 0);

//Fail
assert(sumTopTwo(case1), 100);
assert(sumTopTwo(case2), "Dominance");
assert(sumTopTwo(case3), "");
assert(sumTopTwo(case4), undefined);
assert(sumTopTwo(case5), null);