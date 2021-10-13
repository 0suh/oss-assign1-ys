#!/usr/bin/env node

const lib = require("./lib");
if (process.argv.length <= 3) {
  console.log("Error: Insufficient parameter!");
  process.exit(1);
}
let command = process.argv[2];
let numbers = process.argv
  .slice(3, process.argv.length)
  .map((n) => parseFloat(n));
if (numbers.some((n) => isNaN(n))) {
  console.log("Error: Some arguments are not numbers!");
  process.exit(1);
}
if (command === "mean2" || command === "med2" || command === "pareto") {
  if (numbers.length % 2 === 1) {
    console.log("Error: The number of given integers is odd!");
    process.exit(1);
  }
}
let num1 = [];
let num2 = [];
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0) {
    num1.push(numbers[i]);
  } else {
    num2.push(numbers[i]);
  }
}

let result;
switch (command) {
  case "mean2":
    result = lib.mean2(num1, num2);
    console.log(result[0], result[1]);
    break;
  case "med2":
    result = lib.med2(num1, num2);
    console.log(result[0], result[1]);
    break;
  case "pareto":
    result = lib.pareto(num1, num2);
    for (let j = 0; j < result[0].length; j++) {
      console.log(result[0][j], result[1][j]);
    }
    break;
  case "sum":
    result = lib.sum(numbers);
    console.log(result);
    break;
  case "avg":
    result = lib.avg(numbers);
    console.log(result);
    break;
  case "max":
    result = lib.max(numbers);
    console.log(result);
    break;
  default:
    console.log("Wrong command!");
    process.exit(1);
}
