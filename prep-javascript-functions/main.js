// Add together
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('Add two numbers exercise: ' + addTwoNumbersResult);

// Convert hours to min
function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('That many hours is equal to this many minutes: ' + convertHoursToMinutesResult);

// This greeting says hello to the guest
function getGreeting(name) {
  return 'Hello ' + name;
}
var getGreetingPersonal = getGreeting('Tim D');
console.log(getGreetingPersonal);

// This adds then numbers and then multiplies by 5
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Ans = addAndMultiplyBy5(5, 6);
console.log('The product is: ' + addAndMultiplyBy5Ans);

// This will multiply two numbers then divide by 5
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Ans = multiplyAndDivideBy5(30, 10);
console.log('The quotient is: ' + multiplyAndDivideBy5Ans);

// This will subtract two numbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersAns = subtractTwoNumbers(60, 40);
console.log('The difference is: ' + subtractTwoNumbersAns);

// This will get the circumference of a circle
function getCircleCircumference(radius) {
  return (2 * radius) * 3.14;
}
var getCircleCircumferenceAns = getCircleCircumference(5);
console.log('The circumference is: ' + getCircleCircumferenceAns);

// This will get the users full name
function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var getFullNameAns = getFullName('Tom ', 'Riddle');
console.log('My name is ' + getFullNameAns);

// This will cube a number
function cube(number) {
  return number * number;
}
var cubeAns = cube(5);
console.log('The number cubed is ' + cubeAns);
