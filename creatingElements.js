// Adding A List Item To Task List //

// 1. create element

// Document.createElement() - creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.

// Syntax

// var element = document.createElement(tagName[, options]);

const li = document.createElement('li'); // <li></li>

// Add Class

li.className = 'collection-item'; // <li class = "collection-item"></li>

// // Add Id

li.id = 'new-item'; // <li class = "collection-item" id = "new-item"></li>

// // Add Attribute 

li.setAttribute('title', 'hello'); // <li class = "collection-item" id = "new-item" title = "hello"></li>

// create text node and append

li.appendChild(document.createTextNode('Hello World')); // <li class = "collection-item" id = "new-item" title = "hello">Hello World</li>

// append li as child

document.querySelector('ul.collection').appendChild(li);

// // Create new link element

const link = document.createElement('a')

// // create classes

link.className = 'elete-item secondary-content';

// // add icon html

link.innerHTML = '<li class="fa fa-remove"></li>';

// Append link into li
li.appendChild(link);

console.log(li);