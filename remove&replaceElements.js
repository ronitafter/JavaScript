// REPLACE ELEMENTS //

// 1. Create Elements

const newHeading = document.createElement('h2'); // <h2></h2>

// 2. Add Id

newHeading.id = 'task-title'; // <h2 id = "task-title"></h2>

// 3.create text node and append

newHeading.appendChild(document.createTextNode('Task List')); // <h2 id = "task-title">My List</h2>

// 4.get the old heading

const oldHeading = document.getElementById('task-title');

// 5.parent

const cardAction = document.querySelector('.card-action');

// 6.replace child

cardAction.replaceChild(newHeading, oldHeading);

// remove element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item
lis[0].remove();


// remove child element

list.removeChild(lis[3]);

let val;


// classes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://www.google.com/');
val = link.hasAttribute('href');
link.setAttribute('title', 'google');
val = link.hasAttribute('title');
link.removeAttribute('title');

val = link;



console.log(val);