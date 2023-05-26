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
// maxNegMinPos(arrTask3);

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

// fizzBuzz(20);

// ======================================
// 7. Write a GCD function gcd(a, b)
const gcd = (a, b) => {
  let min = 0;
  if (a < b) {
    min = a;
  } else {
    min = b;
  }
  for (let i = 0; i < min; i++) {
    if (a % i === 0 && b % i === 0) {
      gcdNum = i;
    }
  }
  return gcdNum;
};

// console.log(gcd(10, 15));

// ======================================
// 8. Array.sort modification
const arr = [3, 2, 1, 12, 13, 11];

const sortModify = (arr) => {
  let min = Infinity;
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
      }
    }
    sortedArr.push(min);

    // remove sorted element from input array
    let indexOfSmallNum = arr.indexOf(min);
    arr.splice(indexOfSmallNum, 1);

    min = Infinity;

    i = -1;
  }
  return sortedArr;
};

// console.log(sortModify(arr));

// ======================================
// 9. prime(n) returns an array of first n prime numbers
const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = (n) => {
  const arr = [];
  let i = 2;
  while (arr.length < n) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i = i === 2 ? i + 1 : i + 2;
  }
  return arr;
};

// console.log(prime(5));
// ======================================
// 10. Write a function drawDown(chart) maximum drawdown(MDD)
const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];

const drawDown = (arr) => {
  let peak = arr[0];
  let maxDown = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > peak) {
      peak = arr[i];
      continue;
    }
    let down = peak - arr[i];

    if (down > maxDown) {
      maxDown = down;
    }
  }
  return maxDown;
};

// console.log(drawDown(chart));

// ======================================
// 11. summarize(text, trail, len)
const articleCleverse =
  "I am from Cleverse Academy! Today, I’m here to teach you some JavaScript programming";

const articleFoo = "Good morning ladies and gentlemen";

const summarize = (text, trail, len) => {
  if (text.length === len) {
    return text;
  } else if (len > 3) {
    let summarizeTxt = [];
    let wordTokens = text.split(" ");
    let wordsAcc = 0;

    for (let i = 0; i < wordTokens.length; i++) {
      const token = wordTokens[i];
      if (wordsAcc <= len) {
        summarizeTxt.push(token);
        wordsAcc += token.length + 1; // plus white space to token
        console.log(wordsAcc, len);
      }
    }

    summarizeTxt.pop();

    return summarizeTxt.join(" ") + trail;
  } else {
    return "";
  }
};

// console.log(articleCleverse.split(" "));
// console.log(summarize(articleCleverse, " ...", 30));
// console.log(summarize(articleFoo, " ...", 2));
// console.log(summarize(articleFoo, " ...", 10));
// console.log(summarize(articleFoo, " ...", 20));
// console.log(summarize(articleFoo, " ...", 25));

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

// console.log(filterLt(112, [120, 112, 111, 130, 169, 101]));

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

// console.log(filterGt(0, [120, 112, 111, 130, 169, 101]));

// ======================================
// 14. Write a function isMember(mem, arr)

const isMember = (mem, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (mem === arr[i]) {
      return true;
    }
  }
  return false;
};

// console.log(isMember(5, [1, 3, 7, 12]));
// console.log(isMember("john", ["jane", "jim", "john"]));

// ======================================
// 15.

const compoundedReturn = (amount, interest, n) => {
  let newAmount = amount;
  for (let i = 0; i < n; i++) {
    newAmount += (interest * newAmount) / 100;
  }
  return newAmount;
};

console.log(compoundedReturn(100, 1, 1)); // 101
console.log(compoundedReturn(100, 10, 1)); // 110
console.log(compoundedReturn(100, 10, 2)); //121

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

// console.log(mean([1, "foo", 3]));

// ======================================
// 17. Write a function mode(arr)
const mode = (arr) => {
  // create object with pair of element and its frequency
  let cntObj = arr.reduce((acc, curr) => {
    return isNaN(acc[curr]) ? (acc[curr] = 1) : acc[curr]++, acc;
  }, {});

  // find key with the maximum value
  // get key and find the maximum value using object[key]
  const maxKey = Object.keys(cntObj).reduce((a, b) =>
    cntObj[a] > cntObj[b] ? a : b
  );

  // get all values
  const values = Object.values(cntObj);

  return values.every((n) => n === values[0]) ? null : maxKey;
};

// console.log(mode([1, 2, 1, 4, 5, 6, 2, 1]));
// console.log(mode([4, 5, 6, 2, 1]));

// ======================================
// 18. Write a function mid(arr)
const mid = (arr) => {
  if (arr.length === 1) {
    // arr contains 1 component
    return arr[0];
  } else if (arr.length % 2 !== 0) {
    // arr contains odd number of components
    return [arr[(arr.length + 1) / 2 - 1]];
  } else {
    // arr contains even number of components
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  }
};

// console.log(mid(["john"]));
// console.log(mid(["foo", "bar", "baz"]));
// console.log(mid([1, 2, 3, 4]));

// ======================================
// 19.

// ======================================
// 20.

// ======================================
// 21. Write a function flatMap(arr)
const arr2d = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];

const flatMap = (arr) => {
  let flattedArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flattedArr.push(arr[i][j]);
    }
  }
  return flattedArr;
};

// console.log(flatMap(arr2d));

// ======================================
// 22. Write a function mapMean(arr)
const mapMean = (arr) => {
  let meanArr = [];
  for (let i = 0; i < arr.length; i++) {
    meanArr.push(mean(arr[i]));
  }
  return meanArr;
};
// console.log(mapMean(arr2d));

// ======================================
// 23. Write a function mapMode(arr)
const mapMode = (arr) => {
  let modeArr = [];
  for (let i = 0; i < arr.length; i++) {
    modeArr.push(mode(arr[i]));
  }
  return modeArr;
};

// console.log(mapMode(arr2d));

// ======================================
// 24. Write a function mapRevertSign(arr)
const arr24 = [1, -4, 2, 0, "foo"];

const mapRevertSign = (arr) => {
  return arr.map((n) => (typeof n === "number" && n !== 0 ? -1 * n : n));
};

// console.log(mapRevertSign(arr24));

// ======================================
// 25.

// ======================================
// 26. Write a function unique(arr)
const repeatArr = [10, 20, 10, 20, 100, 100, 30, 50, 60, 100, 100];

const unique = (arr) => {
  // using isMember method
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    const curItem = arr[i];
    if (!isMember(curItem, uniqueArr)) {
      uniqueArr.push(curItem);
    }
  }
  return uniqueArr;

  // using indexOf method
  // indexOf will return the index of value that first met
  //   return arr.filter((value, index, array) => array.indexOf(value) === index);
};

// console.log(unique(repeatArr));

// ======================================
// 27. Write a function toBytes(s) return an array of ASCII bytes
const bar = "Bar";
const foo = "Foo";
const fooFire = "Foo🔥";

const toBytes = (str) => {
  let strTokens = str.split("");
  let byteArr = [];
  for (let i = 0; i < strTokens.length; i++) {
    const asciiVal = strTokens[i].charCodeAt();
    // check emoji (over 8 bit)
    if (asciiVal < 255) {
      byteArr.push(asciiVal);
    }
  }
  return byteArr;
};

// console.log(toBytes(bar));
// console.log(toBytes(foo));
// console.log(toBytes(fooFire));
// console.log(fooFire.charCodeAt(3));

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
// console.log(transpose(imageBytes, 4, 4));

// ======================================
// 29. Write a function transposable(arr, w, h) returns boolean
const transposable = (arr, w, h) => {
  let arrDim = arr.length;
  return w * h === arrDim ? true : false;
};

const image = [1, 0, 1, 0, 1, 1];
// console.log(transposable(image, 2, 3));

// ======================================
// 30. Write a function markdownToHTML(md)
// convert markdown lan to html tag

const md = `
# This is H1
    
## This is H2
    
This is a paragraph
`;

const markdownToHTML = (text) => {};

// console.log(markdownToHTML(md));

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
