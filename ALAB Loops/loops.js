/* 
Part 1: Fizz Buzz: 
- Loop through all numbers from 1 to 100.
- If a number is divisible by 3, log “Fizz.”
- If a number is divisible by 5, log “Buzz.”
- If a number is divisible by both 3 and 5, log “Fizz Buzz.”
- If a number is not divisible by either 3 or 5, log the number.
*/


//Loop through all numbers from 1 to 100.
for(let i = 1; i <= 100; i++) {
    console.log("Loop through all numbers from 1 to 100:" + i);
}

//If a number is divisible by 3, log “Fizz”
for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0) {
        console.log(i + " Fizz")
    }
}

//If a number is divisible by 5, log “Buzz”
for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0) {
    console.log(i + " Buzz");
  }
}

//If a number is divisible by both 3 and 5, log “Fizz Buzz”

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " Fizz Buzz")
    }
}

//If a number is not divisible by either 3 or 5, log the number

for (let i = 1; i < 20; i++) {
  if (i % 3 !== 0 && i % 5 !== 0) {
    console.log(i);
  }
}

