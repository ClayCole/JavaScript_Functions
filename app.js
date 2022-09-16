console.log("Hello World!\n==========\n");

// Exercise 1 Section

// function printOdds(count){
//     if (count < 0) {
//         for (let index = -1; index >= count; index--) {
//             if (index % 2 != 0) {
//                 console.log(index);
//             }
//         }    
//     } else{
//         for (let index = 1; index <= count; index++) {
//             if (index % 2 != 0) {
//                 console.log(index);
//             }
//         }
//     }
   
// }
// printOdds(25);
// printOdds(-14);

// exercise 2

// function checkAge (age){
//     var aboveSixteen = 'You can Drive';
//     var beloweSixteen = "Sorry, but you need to wait until you're 16.";
//     if (age >= 16) {
//         console.log(aboveSixteen);
//     } else {
//         console.log(beloweSixteen);
//     }
// }
// checkAge(18);
// checkAge(14);

// // No paramaters
// function checkAge (){
//     var aboveSixteen = 'You can Drive';
//     var beloweSixteen = "Sorry, but you need to wait until you're 16.";

//     var age = prompt("What is your age")
//     if (age >= 16) {
//                 console.log(aboveSixteen);
//             } else {
//                 console.log(beloweSixteen);
//             }

// }
// checkAge();

// Exercise 3 
// function cartesianPlanCheck (x,y) {
//     if (x == 0 && y == 0){
//         console.log("this coordinate is location in the center.");
//     }
//     else if (x > 0 && y > 0) {
//         console.log("this coordinate is location in Quadrant 1");
//     }
//     else if (x > 0 && y < 0) {
//         console.log("this coordinate is location in Quadrant 4");
//     }
//     else if (x < 0 && y < 0) {
//         console.log("this coordinate is location in Quadrant 3");
//     }
//     else if (x < 0 && y > 0) {
//         console.log("this coordinate is location in Quadrant 2");
//     }
//     else if (x == 0 && y != 0){
//         console.log("this coordinate is location on the Y Axis.")
//     }
//     else if (y == 0 && x != 0){
//         console.log("this coordinate is location on the X Axis.")
//     }
    
// }
// cartesianPlanCheck(4,-2);
// cartesianPlanCheck(0,0);
// cartesianPlanCheck(4,0);

// exercise 4

// function isTrangle (x,y,z) {
//     if (x + y > z && y + z > x && z + x > y ) {
//         console.log("this is a valid Triangle"); 
        
//         if (x == y && y == z) {
//             console.log("this is a equilateral Triangle"); 
//         }
//         else if (x != y && y != z) {
//             console.log("this is a scalene Triangle"); 
//         }  
//     }
//     else {
//         console.log("this is a Invalid Triangle");   
//     }
    
// }

// isTrangle ( 4,2,5)
// isTrangle ( 4,4,4)
// isTrangle ( 12,5,7)
// isTrangle (1,1,2)

// Exercise 5

dataTracker(100,15,56)
function dataTracker (planLimit,day, usedData ) {
let avgDataUsage = usedData/day ;
let remainingDays = 30 - day;
let recommendDataPerDay = planLimit / 30;
let overUsageCal = (usedData / day)* 30 - planLimit;
let toStayWithinPlan = (planLimit - usedData )/remainingDays

if (avgDataUsage > recommendDataPerDay) {
    console.log(`${day} used, ${remainingDays} days remaining
    Average daily use: ${avgDataUsage.toFixed(2)} GB/day
    You are EXCEEDING your average daily use (${recommendDataPerDay.toFixed(2)}GB/day),
    continuing this high usage, you'll exceed your data plan by
    ${overUsageCal} GB.
    To stay below your data plan, use no more than ${toStayWithinPlan.toFixed(2)} GB/day.`);
}
else if( avgDataUsage < recommendDataPerDay){
    console.log(`${day} used, ${remainingDays} days remaining
    Average daily use: ${avgDataUsage.toFixed(2)} GB/day
    You are UNDER your average daily use (${recommendDataPerDay.toFixed(2)}GB/day),
    continuing this high usage, you'll exceed your data plan by
    ${overUsageCal} GB.
    To stay below your data plan, use no more than ${toStayWithinPlan.toFixed(2)} GB/day.`);
}
else {
    console.log(`Your Average Daily Use is ${avgDataUsage.toFixed(2)} GB/day, You are on track to use all your data within your Plan Limit.`)
}
    
}

