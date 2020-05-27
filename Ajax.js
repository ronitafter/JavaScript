// ways to work with Asynchronous code

/*

- Callbacks
-Promises
-Async/Await
*/


// What Is Ajax ? //

/*

- Asynchronous javascript & xml (JSON has replaced XML)
- a set of web technologies, used to send and receive data Asynchronously
- Does not interfere with the current page

*/

// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {
// Create an XHR object
// const xhr = new XMLHttpRequest();

// Open
// xhr.open('GET', 'data.txt', true);
// // console.log('READYSTATE', xhr.readyState); // 1

// // Optional - used for spinners/loaders //

// xhr.onprogress = function() {
//     console.log('READYSTATE', xhr.readyState); //4

// }


// xhr.onload = function() {
//     console.log('READYSTATE', xhr.readyState); //4
//     if (this.status === 200) {
//         // console.log(this.responseText)
//         document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
//     }
// }

// xhr.onreadystatechange = function() {
//     console.log('READYSTATE', xhr.readyState);
//     if (this.status === 200 && this.readyState === 4) {
//         console.log(this.responseText);

//     }
// }

//     xhr.onerror = function() {
//         console.log('request error');
//     }

//     xhr.send();
// }

/*
HTTP STATUSES
200 - Ok
403 - Forbidden
404 - Not Found
*/

/*

READY STATE VALUES

0 - request not initialized
1 - server connection established
2 - request received
3 - processing request
4 - request finished and response is ready


*/