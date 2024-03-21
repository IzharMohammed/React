//Using of compose functions 
import { compose } from "redux";
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

let composeFunction = compose(removeSpace,repeatString,upperCase,makeItalics);
console.log(composeFunction(str));