//Part 1 and 2
/* let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
 */
let str =
  "id,name,occupation,age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
const rows = str.split("\n");

const newArr = rows.map((row) => {
  const cells = row.split(",");
  return cells;
});

console.log(newArr);

//Part 3 Transforming Data
/* 
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
*/

const objects = []

for (let i = 1; i < newArr.length; i++) {
    const obj = {}
    for(let j = 0; j < newArr[0].length; j++) {
        obj[newArr[0][j]] = newArr[i][j]
    }
    objects.push(obj)
}

console.log(objects)

// Part 4

//1
objects.pop()
console.log(objects)

//2

objects.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});

console.log(objects)

//3

objects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(objects)
