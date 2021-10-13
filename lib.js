function mean2(num1, num2) {
  let a = avg(num1);
  let b = avg(num2);
  a = Math.round(a * 100) / 100;
  b = Math.round(b * 100) / 100;
  return [a, b];
}
function med2(num1, num2) {
  let len = num1.length;
  let result = [];
  for (let i = 0; i < len; i++) {
    let s = [];
    for (let j = 1; j < len; j++) {
      s.push(
        Math.sqrt(
          (num1[i] - num1[(i + j) % 4]) ** 2 +
            (num2[i] - num2[(i + j) % 4]) ** 2
        )
      );
    }
    let sumofsum = sum(s);
    result.push(sumofsum);
  }
  let mini_index = 0;
  for (let k = 1; k < len; k++) {
    if (result[k] < result[mini_index]) {
      mini_index = k;
    }
  }
  return [num1[mini_index], num2[mini_index]];
}
function pareto(num1, num2) {
  let a = [];
  let b = [];
  for (let i = 0; i < num1.length - 1; i++) {
    if (num1[i] < num1[i + 1] && num2[i] < num2[i + 1]) {
      continue;
    } else {
      a.push(num1[i]);
      b.push(num2[i]);
    }
  }
  a.push(num1[num1.length - 1]);
  b.push(num2[num2.length - 1]);
  return [a, b];
}
function sum(numbers) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
  return sum(numbers) / numbers.length;
}
function max(numbers) {
  return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

module.exports = {
  mean2,
  med2,
  pareto,
  sum,
  avg,
  max,
};
