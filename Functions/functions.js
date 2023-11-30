//Part one

/* 
I think this function is easiest to understand for me. It's simple and splits it into an array, reverses it and join them once again. It does exactly what it says it doing and makes it most sense. 
*/

function reverseString2(str) {
  return str.split("").reverse().join("");
}


//Take an array of numbers and return the sum.
const sumOfArray = arr => {
    const sum = arr.reduce((a, b) => a + b, 0)
    return sum
}
console.log(sumOfArray([2, 3, 1, 2]));

// Take an array of numbers and return the average

const averageOfArray = array => {
    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length
}
console.log(averageOfArray([5, 6, 2, 2]));

//Take an array of strings and return the longest string

const longestStr = str => {
    let string = ""
    for(let i = 0; i < str.length; i++) {
        if (str[i].length > string.length) {
            string = str[i]
        }
    }
    return string
}
console.log(longestStr(["Hello", "my", "name", "is", "Marie!"]))

/*
Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
*/

function longestStrings(arr, num) {
    let newArr = []
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i].length > num) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(longestStrings(['say', 'hello', 'in', 'the', 'morning'], 3))

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

const noLoops = num => {

    if (num === 0) {
        return 1
    } else {
        console.log(num)
        num + noLoops(num - 1)
    }
}

console.log(noLoops(7))

//Part 3

/* function ageIncrement(obj) {
    obj.age = obj.age + 1
}
console.log(ageIncrement({ age: 20, name: "Marie" })); */

let myObj = { age: 20, name: "Marie" };

function ageIncrement(object) {
    if (object.hasOwnProperty("age")) {
       object.age = object.age + 1  
    } else {
        object.age = 0
    }
  
  return object;
}
console.log(myObj)
ageIncrement(myObj);
console.log(ageIncrement({name: "Marie", color: "green", age: 26}));
console.log(ageIncrement({name: 'Marie', color:'green'}));