foods = ["ramen", "pasta", "chicken", "beef"];

// 1. locate fav food and print its index
const favFoodIndex = foods.indexOf("ramen");
console.log(`my fav food index is ${favFoodIndex}`);

// 2. Add your 3 favorite desserts or fruits into that array. 
// Print the result to the console.
foods.push("banana", "ice-cream", "strawberry");
console.log(foods);

// 3. Pick one method to check if your most favorite food 
// is existed in the array or not? 
console.log(`Does my fav food exist > ${foods.includes("banana")}`);


// concat method similar to extend
animals = ["cat", "dog"];
flowers = ["daisy", "rose"];
const newArr = foods.concat(animals, flowers);
// console.log(newArr);ß

// find,findIndex
const isLongWord = (word) => word.length > 5;
console.log(foods.find(isLongWord));