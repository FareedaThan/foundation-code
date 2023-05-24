const isOdd = (n) => {
  return n % 2 !== 0;
};

const filterArr = (arr, func) => {
  let oddArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
};

const testArr = [1, 2, 3, 4, 5, 6];
// console.log(filterArr(testArr, isOdd));

// =================================
// ITERATORS
// 1. forEach()
testArr.forEach((n) => {
  //   console.log(n + 100);
});

// print element every even index
testArr.forEach((n, i) => {
  if (i % 2 === 0) {
    // console.log(n);
  }
});

// print string and index of element that starts with Mr
const strArr = ["Ban", "Bea", "Mr Boba"];

strArr.forEach((n, i) => {
  if (n.startsWith("Mr")) {
    // console.log(n, i);
    // console.log(this);  // TODO: review second argument
  }
});

// =================================
// 2. map()

const checkedArr = strArr.map((n) => {
  //   return n.startsWith("Mr") ? true : false;
  return n.startsWith("Mr");
});

// console.table(checkedArr);

const mappedArr = strArr.map((n) => {
  return n.length;
});

// console.table(mappedArr); // print table format

// =================================
// 2.1.Create map and foreach function

const map2 = (arr, func) => {
  const mapped = new Array(arr.length);
  arr.forEach((item, i) => {
    mapped[i] = func(item);
  });
  return mapped;
};

const forEach2 = (arr, func) => {
  const looped = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    looped.push(func(arr[i]));
  }
  return looped;
};

const lenStr = (str) => {
  console.log(str.length);
};

const plus10 = (n) => {
  console.log(n + 10);
};

// map2(testArr, plus10);
// forEach2(strArr, lenStr);

// =================================
// 3. filter()
// Output array will return array containing only true elements
// callback fn should return boolean
const longWordArr = strArr.filter((n) => {
  return n.length > 3;
});

// console.table(longWordArr);

// Filter out element that is divisable by 3 or 13
// const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const numsArr = [...Array(13).keys()];
const divArr = numsArr.filter((n) => {
  return n % 3 === 0 || n % 13 === 0;
});

// console.table(divArr);

// =================================
// 4. reduce()
// callbackfn(prevval, val, idx)
// prevval(accumulate val)is started with the first element of array
const getMax = (a, b) => Math.max(a, b);

console.log(numsArr.reduce(getMax));

// =================================
// create function returns object
const empInfoArr = [
  ["cat", 2],
  ["dog", 3],
  ["rabbit", 2],
];

const farmObj = (arr) => {
  let obj = [];
  const objKeys = ["animal", "age"];
  for (let i = 0; i < arr.length; i++) {
    let subObj = {};
    for (let j = 0; j < arr[i].length; j++) {
      subObj[objKeys[j]] = arr[i][j];
      // console.log(subObj);
    }
    obj.push(subObj);
  }
  return obj;
};

// console.log(empInfoArr[2][0]);
console.log(farmObj(empInfoArr));
