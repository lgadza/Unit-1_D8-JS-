//HOMEWORK

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */

let arr = [1, 2, 3, 4, 5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */

const myInfo = {
  name: "Louis",
  surname: "Gadza",
  emailAddress: "siuolgadza@gmail.com",
  age: 24,
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
myInfo.hasDrivingLicense = true;

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
delete myInfo.age;

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
const myFriend = {
  name: "Steve",
  surname: "Jongwe",
  emailAddress: "stevejongwe.@gmail.com",
};

if (myInfo.emailAddress !== myFriend.emailAddress) {
  console.log(`hasDifferentEmail:`, true);
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
let totalShoppingCart = 60;
let shippingCost = 10;
if (totalShoppingCart > 50) {
  console.log(
    `Your total shipping cost is: ${totalShoppingCart} promotion included`
  );
} else {
  console.log(
    `Your total shipping cost is: ${
      totalShoppingCart + shippingCost
    } no promotion included`
  );
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
let discount = 20;
totalShoppingCart = totalShoppingCart - (20 / 100) * totalShoppingCart;
shippingCost = shippingCost - (20 / 100) * shippingCost;
if (totalShoppingCart > 50) {
  console.log(
    `Its a Black Friday:) We have 20% discount! Your total shipping cost is: ${totalShoppingCart} promotion included`
  );
} else {
  console.log(
    `Its a Black Friday:) We have 20% discount! Your total shipping cost is: ${
      totalShoppingCart + shippingCost
    } `
  );
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */
const car = {
  brand: "GMC",
  year: 2022,
  color: "Black",
  licensePlate: "LG15zw",
};
const car2 = Object.assign({}, car);
car2.licensePlate = "LG14zw";
const car3 = Object.assign({}, car);
car3.licensePlate = "LG13zw";
const car4 = Object.assign({}, car);
car4.licensePlate = "LG12zw";
const car5 = Object.assign({}, car);
car5.licensePlate = "LG11zw";
const car6 = Object.assign({}, car);
car6.licensePlate = "LG10zw";

console.log(car6);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */
let carsForRent = [car, car2, car3, car4, car5, car6];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */
carsForRent.shift();
carsForRent.pop();

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

console.log(`BRAND: ${car.brand}`);

console.log(`YEAR: ${car.year}`);

console.log(`COLOR: ${car.brand}`);
console.log(`LISENSEPLATE: ${car.brand}`);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */
let carsForSale = [];
const saleCar = {
  brand: "Ferari",
  year: 2022,
  color: "Green",
  licensePlate: "L15Gzw",
};
const saleCar2 = Object.assign({}, saleCar);
saleCar2.licensePlate = "L14Gzw";
const saleCar3 = Object.assign({}, saleCar);
saleCar3.licensePlate = "L13Gzw";

carsForSale.push(saleCar, saleCar2, saleCar3);

let totalCars = carsForRent.length + carsForSale.length;
console.log(totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
for (let i = 0; i < carsForSale.length; i++) {
  let carInfo = carsForSale[i];
  console.log(`BRAND: ${carInfo.brand}
  YEAR: ${carInfo.year}
  COLOR: ${carInfo.color}
  LICENSEPLATE: ${carInfo.licensePlate}`);
}
