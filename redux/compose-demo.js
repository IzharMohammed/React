//remove spaces --> repeat string --> make upper case --> make italics

function removeSpace(str) {
    return str.split(" ").join("");
}

function repeatString(str) {
    return str.repeat(2);
}

function upperCase(str) {
    return str.toUpperCase()
}

function makeItalics(str) {
    return str.italics();
}

let str = "hello there how are you ?"

console.log(removeSpace(repeatString(upperCase(makeItalics(str)))))

// Alternatives
const func = [str, removeSpace, repeatString, upperCase, makeItalics];
let ans = func.reduce((prevans, currFunc) => {
    return currFunc(prevans)
})
console.log(ans);

let arr = [1, 2, 3, 4, 5]
arr.reduce((prevans, currFunc) => {
    return prevans + currFunc
})





