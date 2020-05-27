// const Hello = function() {
//     console.log('Hello World');
// }

// Hello();

// Arrow Function //
// **************//
// const Hello = () => {
//     console.log('Hello World');

// One line function does not need braces //
// **************//
// const Hello = () => console.log('Hello World');
// Hello();

// One line returns
// **************//
// const Hello = () => 'Hello World';
// console.log(Hello());

// return
// **************//
// const Hello = function() {
//     return 'Hello World';
// }
// console.log(Hello());

// return  object literal
// **************//
// const Hello = () => ({ msg: 'Hello World' });
// console.log(Hello());


// Single parameter does not need parentheses
// **************//
// const Hello = name => console.log(`Hello ${name}`);

// Hello('Darth');

// Multiple parameters need parentheses //
// **************//
// const Hello = (firstName,
//     lastName) => console.log(`Hello ${firstName} ${lastName}`);

// Hello('Darth', 'Vader');

//   //
// **************//
// const users = ['MARY', 'PATRICIA', 'LINDA', 'ELIZABETH', 'JENNIFER']

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// console.log(nameLengths);

// Arrow Function //
// **************//

// const users = ['MARY', 'PATRICIA', 'LINDA', 'ELIZABETH', 'JENNIFER']

// const nameLengths = users.map((name) => {
//     return name.length;
// });

// console.log(nameLengths);


//  //
// **************//

const users = ['MARY', 'PATRICIA', 'LINDA', 'ELIZABETH', 'JENNIFER']

const nameLengths = users.map(name => name.length);

console.log(nameLengths);