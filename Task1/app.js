function stringLengthFrequency(array) {
    let lengthDict = {};
    let maxLength = 0;
    let maxIndex = "";
    array.forEach(element => {
        let strLength = element.length;
        if (lengthDict.hasOwnProperty(strLength)) {
            lengthDict[strLength].push(element);
        } else {
            lengthDict[strLength] = [element];
        }

        if (lengthDict[strLength].length > maxLength) {
            maxLength = lengthDict[strLength].length;
            maxIndex = strLength;
        }
    });

    return lengthDict[maxIndex];
}

function assert(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

let case1 = ["Banana", "Orange", "Apple", "Mango"];
let case2 = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
let case3 = ['asdf', 'asdf', 'ssa', '213416879', 'asd', '12345', '1342544364'];
let case4 = ['a'];

//Pass
assert(stringLengthFrequency(case1), ['Banana', 'Orange']);
assert(stringLengthFrequency(case2), ['ab', 'cd', 'gh']);
assert(stringLengthFrequency(case3), ['asdf', 'asdf']);
assert(stringLengthFrequency(case4), ['a']);

//Fail
assert(stringLengthFrequency(case1), 100);
assert(stringLengthFrequency(case1), case2);
assert(stringLengthFrequency(case3), case3);
assert(stringLengthFrequency(case2), 'ab,cd,gh');