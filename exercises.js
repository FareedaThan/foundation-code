// 1. Draw star in defined pattern
const draw = (n) => {
  for (let i = 0; i < n; i++) {
    console.log("*".repeat(n));
  }
};

const draw2 = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "*";
  }

  for (let i = 0; i < n; i++) {
    console.log(str);
  }
};

// draw(5);

// ======================================
// 2. Draw star in defined pattern
const drawNg = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
};

// drawNg(5);

// ======================================
// 3. Finding maximum negative and minimum positive number
const maxNegMinPos = (arr) => {
  const negNum = [];
  const posNum = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? negNum.push(arr[i]) : posNum.push(arr[i]);
  }

  let max = negNum[0];
  for (let i = 0; i < negNum.length; i++) {
    if (negNum[i] > max) {
      max = negNum[i];
    }
  }

  let min = posNum[0];
  for (let i = 0; i < posNum.length; i++) {
    if (posNum[i] < min) {
      min = posNum[i];
    }
  }
  console.log(`max negative num is ${max}`);
  console.log(`min positive num is ${min}`);
};

const arrTask3 = [12, -13, 14, 4, 2, -1, -18];
maxNegMinPos(arrTask3);

// ======================================
// 4. Create function returns the nth element of a fibonacci series.
// 1, 2, 3, 5, 8, 13, 21, ...
const fib = (n) => {
  let num1 = 0;
  let num2 = 1;

  let nextNum = num1 + num2;
  let i = 1;

  while (i < n) {
    num1 = num2;
    num2 = nextNum;
    nextNum = num1 + num2;
    i++;
  }

  console.log(nextNum);
};

// fib(5);

// ======================================
// 5. Create function finding mutual element between to array
const mutual = (arr1, arr2) => {
  let mutualEle = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        mutualEle.push(arr1[i]);
      }
    }
  }
  return mutualEle;
};

const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

// console.log(mutual(class1, class2));

// ======================================
// 6. Fizz buzz function
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(20);

// ======================================
// 9. prime(n) returns an array of first n prime numbers
const prime = (n) => {
  let i = 1;
  while (i <= n) {}
};

// prime(5);
// ======================================
// 12. filterLt(n, arr)
const filterLt = (n, arr) => {
  let lessElement = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      lessElement.push(arr[i]);
    }
  }
  return lessElement;
};

console.log(filterLt(112, [120, 112, 111, 130, 169, 101]));

// ======================================
// 13. filterGt(n, arr)
const filterGt = (n, arr) => {
  let lessElement = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      lessElement.push(arr[i]);
    }
  }
  return lessElement;
};

console.log(filterGt(0, [120, 112, 111, 130, 169, 101]));

// ======================================
// 16. Write mean(arr) function
const mean = (arr) => {
  let arrLen = arr.length;
  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return null;
    }
    arrSum += arr[i];
  }

  let arrMean = arrSum / arrLen;
  return arrMean;
};

console.log(mean([1, "foo", 3]));

// ======================================
// 28. Write a function transpose(bits, w, h)
const transpose = (bits, w, h) => {
  let newArr = [];
  for (let i = 0; i < w; i++) {
    let subArr = [];
    for (let j = 0; j < h; j++) {
      subArr.push(bits[j + i * h]);
    }
    newArr.push(subArr);
  }
  return newArr;
};

const imageBytes = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];
console.log(transpose(imageBytes, 4, 4));

// ======================================
// 29. Write a function transposable(arr, w, h) returns boolean
const transposable = (arr, w, h) => {
  let arrDim = arr.length;
  return w * h === arrDim ? true : false;
};

const image = [1, 0, 1, 0, 1, 1];
console.log(transposable(image, 2, 3));

// ======================================
// sample: fn(-20, [-1,-2,1,2,-100]) return [-1,-2]
const filterGtNeg = (val, arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && arr[i] > val) {
      result.push(arr[i]);
    }
  }
  return result;
};

// console.log(filterGtNeg(-20, [-1, -2, 1, 2, -100]));
