const pI = 3.1415
const radius = 5
const area = pI * radius * radius
const spacePerPlant = 0.8
const maxCapacity = area / spacePerPlant
const percentageAt80 = 0.8 * maxCapacity
const percentageAt50 = 0.5 * maxCapacity
const amountOfPlants = 20



// PART ONE
// Predict the plant growth after a specific number of weeks

function plants(numOfWeeks) {
    const numOfPlants = 20
    const growthRate = 2
    return growthRatePerWeek = (growthRate**numOfWeeks) * numOfPlants
}
console.log(`This predicted plant growth at week 1: ${plants(1)}`)
console.log(`This predicted plant growth at week 1: ${plants(2)}`)
console.log(`This predicted plant growth at week 1: ${plants(3)}`)
/* 
if 20 plants meet maxCapacity prune them console.log pruned
if 20 plants are between 50% and 80% monitor console.log monitor 
if 20 plants are less than 50% console.log planted
*/

function whatAction(numOfWeeks) {
    if (plants(numOfWeeks) > percentageAt80) {
    return "Pruned"
} else if (plants(numOfWeeks) < percentageAt80 && plants(numOfWeeks) > percentageAt50) {
    return "Monitored"
} else {
    return "Planted"
    }
}

console.log(`This action should be taken at week 1: ${whatAction(1)}`);
console.log(`This action should be taken at week 2: ${whatAction(2)}`);
console.log(`This action should be taken at week 3: ${whatAction(3)}`);


//PART TWO

/* additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks. */

function spaceNeededFor(numOfWeeks) {
    const startingPlantNum = 100
    const growthRate = 2;
    const growthRatePerWeek = growthRate ** numOfWeeks * startingPlantNum
    return growthRatePerWeek * spacePerPlant
}

console.log(`Additional space needed after 10 weeks: ${spaceNeededFor(10)}m^2`); 

/* If the space remained circular, what would be the radius of this expanded garden? */

function radiusOfTheCircle(numOfPlantsYouHave) {
    const radiusWithinCircle = (spaceNeededFor(10) / pI)**(1/2)
    return radiusWithinCircle
}

console.log(`The radius of the circle would be ${radiusOfTheCircle(100)}`);