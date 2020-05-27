const myHttp = new HTTP;

// get users
// const users = myHttp.get('https://jsonplaceholder.typicode.com/users');

// console.log(users);

// myHttp.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// User Data

const data = {
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
}

// Create User
// myHttp.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// // Update Post
// myHttp.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Delete User
myHttp.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));