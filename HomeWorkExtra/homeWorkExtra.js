// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR ANSWER HERE */
let arr = [1, 3, 5];
let revArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  revArr.push(arr[i]);
}
console.log(revArr);

/* EXTRA 2
TODO
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
let Array1 = [2, 56, 3, 89, 35];
let Array1Max = Math.max(...Array1);
console.log(Array1Max);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
let Array2 = [2, 56, 3, 89, 35];
let Array2Min = Math.min(...Array2);
console.log(Array2Min);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
let evenNums = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 1) {
    evenNums.push(1);
  } else if (nums[i] > 0 && nums[i] % 2 === 0) {
    evenNums.push(nums[i]);
  }
}
console.log(evenNums);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
let noEvenNums = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 1) {
    noEvenNums = [];
  } else if (nums[i] < 0) {
    noEvenNums.push(numbers[i]);
  } else if (numbers[i] % 2 === 1) {
    noEvenNums.push(numbers[i]);
  }
}
console.log(noEvenNums);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */
let str = "Ndebele louis gadza";
str = Array.from(str);
let noVowels = "";

for (let i = 0; i < str.length; i++) {
  if (
    str[i] !== "a" &&
    str[i] !== "e" &&
    str[i] !== "o" &&
    str[i] !== "i" &&
    str[i] !== "u"
  ) {
    noVowels += str[i];
  }
}
console.log(noVowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */
let array1 = [1, 2, 4, 6, 7, 9];
for (let i = 0; i < array1.length; i++) {
  array1[i] += 1;
}
console.log(array1);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
let strArray = ["strive", "is", "great"];
let numArray = [];
for (let i = 0; i < strArray.length; i++) {
  numArray.push(strArray[i].length);
}
console.log(numArray);
