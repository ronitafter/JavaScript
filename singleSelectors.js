// Document.getElementById()

// The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. If you need to get access to an element which doesn't have an ID, you can use querySelector() to find the element using any selector.

// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction


// console.log(document.getElementById("task-title"));

// get things from the element

// console.log(document.getElementById('task-title').id);

// const taskTitle = document.getElementById('task-title')

// Chane Style

// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change Content

// taskTitle.textContent = 'Task List';
// document.getElementById('task-title').innerText = 'my List';
// taskTitle.innerHTML = '<span style="color:green">Task List</span>';

// Document.querySelector()

// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(2)').style.color = 'pink';
document.querySelector('li:nth-child(4)').style.color = 'orange';


document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(1)').textContent = 'Hello World';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';