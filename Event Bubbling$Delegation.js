// Event Bubbling //

// document.querySelector('.card-title').addEventListener('click', function() {
//     console.log('card-title');
// }); // task list


// document.querySelector('.card-content').addEventListener('click', function() {
//     console.log('card-content');

// });
// document.querySelector('.card').addEventListener('click', function() {
//     console.log('card');
// });


// document.querySelector('.col').addEventListener('click', function() {
//     console.log('col');
// }); 


// Event Delegation //

document.body.addEventListener('click', deletItem);

// function deletItem(e) {
//     // console.log(e.target);
//     if (e.target.className === 'fa fa-remove') {
//         console.log('delete item');
//     }
// }

// function deletItem(e) {
//     // console.log(e.target);
//     if (e.target.parentElement.className === 'delete-item secondary-content') {
//         console.log('delete item');
//     }
// }

// function deletItem(e) {
//     if (e.target.parentElement.classList.contains('delete-item')) {
//         console.log('delete item');
//     }
// }

function deletItem(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}