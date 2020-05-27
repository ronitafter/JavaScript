// Document.getElementsByClassName()

// returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node.

// Syntax 

// var elements = document.getElementsByClassName(names); // or:
// var elements = rootElement.getElementsByClassName(names);


// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName


// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// console.log(items[0]);
// items[0].style.color = 'pink';
// items[3].textContent = 'hello world';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// Document.getElementsByTagName()

// returns an HTMLCollection of elements with the given tag name. The complete document is searched, including the root node. The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call document.getElementsByTagName() again.

// Syntax

// var elements = document.getElementsByTagName(name);

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// convert html collection into array

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index) {
//     console.log(li.className);
//     // li.textContent = 'Hello World';
//     li.textContent = `${index}: Hello`;

// });

// console.log(lis);

// document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index) {
    item.textContent = `${index}: Hello World`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
    li.style.background = '#ccc';
});

//

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';

}


console.log(items);