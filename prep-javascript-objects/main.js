var person = {
  firstName: 'Jacob',
  lastName: 'Stone',
  hobby: 'Climbing'
};
console.log(person);
var fullName = 'This person is named: ' + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Service Coordinator';
console.log("This person's current job title is: " + person.job);
person.previousJob = 'Woodworker';
console.log('This person used to be a: ' + person.previousJob);
console.log(person);
