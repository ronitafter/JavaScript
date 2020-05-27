// Style //

// ************* //

//background  
document.body.style.backgroundColor = "#6D6875";

// button
var bElements = document.getElementsByTagName("button");

for (var i = 0; i < bElements.length; i++) {
    bElements[i].style.backgroundColor = "#e6e6e6";
}

// h1 //

// var HElements = document.getElementsByTagName("h1");

// for (var i = 0; i < HElements.length; i++) {
//     HElements[i].style.color = "#e6e6e6";
// }

document.querySelector("h1").style.color = "#fff";

//output
document.getElementById("output").style.color = "#fff";

document.getElementById("output").style.fontSize = "20px";


// Function //

// ************* //

// button1 (Get local text file data)
document.getElementById('button1').addEventListener('click', getText);

//button2(Get local text JSON data)
document.getElementById('button2').addEventListener('click', getJson);

// button3 (Get from external API)
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
    fetch('test.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}

// Get local text JSON data
function getJson() {
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function(post) {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}


// Get from external API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function(user) {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}