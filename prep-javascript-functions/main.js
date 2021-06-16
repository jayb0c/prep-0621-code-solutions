/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function addTwoNumbers(x, y) {
  return x + y;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise: ', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  hours = hours * 60;
  return hours;
}
var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  name = 'Hello! ' + name;
  return name;
}
var helloName = getGreeting('Jacob');
console.log(helloName);

function addAndMultiplyBy5(num1, num2) {
  fivesAns = (num1 + num2) * 5;
  return fivesAns;
}
addAndMultiplyBy5(2, 4);
console.log('The product is ' + fivesAns);

function multiplyAndDivideBy5(num1, num2) {
  multAndDiv5 = (num1 * num2) / 5;
  return multAndDiv5;
}
multiplyAndDivideBy5(10, 1);
console.log('The quotient is ' + multAndDiv5);

function subtractTwoNumbers(num1, num2) {
  difference = (num1 - num2);
  return difference;
}
subtractTwoNumbers(100, 20);
console.log('The difference is ' + difference);

function getCircleCircumference(radius) {
  circ = 2 * radius * 3.14;
  return circ;
}
getCircleCircumference(10);
console.log('The radius is ' + circ);

function getFullName(firstName, lastName) {
  fullName = firstName + lastName;
  return fullName;
}
getFullName('Tom ', 'Riddle');
console.log('My name is ' + fullName);

function cube(number) {
  cubedNum = number * number;
  return cubedNum;
}
cube(5);
console.log('The number cubed is ' + cubedNum);
