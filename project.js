//Declaration of variables
let myString = "Hello World";
let myNum = 7;
let myboolean = true;
let myUndefined;
let mynull = null;

//Function returning typeOf variable
const checkType = function (myVariable) {
  //console.log(typeof myVariable);
  return typeof myVariable;
};

//convert types
function convertType(value) {
  if (typeof value === "string") {
    return Number(value);
  } else if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  } else {
    return "Unsupported Value";
  }
}

//IsFalsy
function isFalsy(value) {
  if (value) {
    return `${value} is true`;
  } else {
    return `${value} is false`;
  }
}

//Sum mixed array
function sumMixedArray(arr) {
  let addSum = 0;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      //add to sum
      addSum += arr[i];
    } else {
      //convert it to a number
      const convertToNumber = Number(arr[i]);
      if (convertToNumber) {
        addSum += convertToNumber;
      }
    }
  }
}

//DeepCompare
function deepCompare(a, b) {
  if (a === b) {
    return true;
  } else return false;
}

//FUNCTIONS
//IsEqual
function isEqual(a, b) {
  return a == b;
}

//IsStrictEqual
function isStrictEqual(a, b) {
  return a === b;
}

//CompareValues
function compareValues(a, b) {
  console.log(`Comparing ${a} and ${b}: ${a == b}`);
}

//edgeCaseComparison
function edgeCase(a, b) {
  console.log(
    `Comparing (==) and (===) of ${a} and ${b}: ${a == b} and ${
      a === b
    } respectively`
  );
}

// checkEven
const checkEvenOdd = function (myNumber) {
  if (myNumber % 2 == 0) {
    return "even";
  } else if (myNumber % 2 == 1) {
    return "odd";
  } else {
    return "decimal";
  }
};

//Print numbers
const printNumber = function () {
  for (i = 1; i <= 10; i++) {
    console.log(i);
  }
};

//Sum until 100
const sumUntil100 = function () {
  sum = 0;
  let j = 0;
  while (sum <= 100) {
    sum = sum + j;
    if (sum > 100) {
      break;
    }
    console.log(sum);
    j++;
  }
};

//Muktiplication table
const printMultiplicationTable = function () {
  for (m = 1; m <= 5; m++) {
    for (n = 1; n <= 12; n++) {
      console.log(`${m} x ${n} = ${n * m}`);
    }
  }
};

//Day of week
const dayOfWeek = function (dayNumber) {
  let day;
  switch (dayNumber) {
    case 1:
      day = "Sunday";
      break;

    case 2:
      day = "Monday";
      break;

    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      day = "Saturday";
      break;
  }

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (d = 0; d < days.length; d++) {
    if (d == dayNumber) break;
    console.log(`Day ${d + 1}: ${days[d]}`);
  }
  return day;
};

//filter sum
const filterAndSumEvenNumbers = function (num) {
  let sum = 0;
  //const even = [];
  console.log(num);
  for (let x = 0; x < num.length; x++) {
    if (num[x] % 2 == 0) {
      //even.push(num[x]);
      sum += num[x];
    }
  }
  console.log(even);
  console.log(sum);
};

//fizz buzz
function fizzBuzz() {
  for (let numbers = 1; numbers <= 50; numbers++) {
    if (numbers % 3 == 0 && numbers % 5 == 0) {
      console.log("FizzBuzz");
    } else if (numbers % 5 === 0) {
      console.log("Buzz");
    } else if (numbers % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(numbers);
    }
  }
}

//Apply operation
function applyOperation(num1, num2, Operation) {
  return Operation(num1, num2);
}
function Operation(a, b) {
  return a + b;
}

//factorial

function factorial(n) {
  if (n == 0) return 1;
  else if (n < 0) return "invalid";
  else {
    return n * factorial(n - 1);
  }
}
const factorial = (n) => {
  if (n == 0) return 1;
  else if (n < 0) return "invalid";
  else {
    return n * factorial(n - 1);
  }
};
