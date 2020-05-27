// Set Local Storage Item //
// localStorage.setItem('name', 'Darth Vader');
// localStorage.setItem('age', '100');


// Set Session Storage Item //
// sessionStorage.setItem('name', 'Yoda');


// Remove Item from Local Storage //
// localStorage.removeItem('name');

// Get Item from Local Storage //

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear Local Storage //
// localStorage.clear();
// console.log(name, age);


// add task to local storage //
document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('task saved');
    e.preventDefault();
});