function isadult(age) {
  if (age >= 18) {
    return "adult";
  } else {
    return "minor";
  }
}

console.log("Exercise 2 result:", isadult(21));

function isCharAVowel(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  } else {
    return false;
  }
}

console.log("Exercise 3 result:", isCharAVowel("a"));

function generateEmail(name, domain) {
  return `${name}@${domain}`;
}

console.log("Exercise 4 result:", generateEmail("ruqaya.nasser51", "gmail.com"));


function greetuser(name, time) {
  return `Good ${time}, ${name}!`;
}

console.log("Exercise 5 result:", greetuser("ruqaya", "morning"));

function maxofthree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log("Exercise 6 result:", maxofthree(5, 10, 15));

function calculatetip(bill, tipPercent) {
  return bill * (tipPercent / 100);
}

console.log("Exercise 7 result:", calculatetip(50, 20));

function convertTemperature(temp, scale) {
  if (scale === "C") {
    return (temp * 9 / 5) + 32;
  } else {
    return (temp - 32) * 5 / 9;
  }
}

console.log("Exercise 8 result:", convertTemperature(32, "C"));



function basicCalculator(num1, num2, operator) {
  if (operator === "add") {
    return num1 + num2;
  } else if (operator === "subtract") {
    return num1 - num2;
  } else if (operator === "multiply") {
    return num1 * num2;
  } else if (operator === "divide") {
    return num1 / num2;
  }
}

console.log("Exercise 9 result:", basicCalculator(10, 5, "subtract"));
