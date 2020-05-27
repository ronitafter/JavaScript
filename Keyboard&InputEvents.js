const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');


// clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('cut', runEvent); // ctrl x
// taskInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);










function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);

    heading.innerText = e.target.value;


    // get input value
    // console.log(taskInput.value);


    // e.preventDefault();
}