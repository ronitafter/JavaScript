// style //

// background
document.body.style.backgroundColor = " #009999";

// button
var BElements = document.getElementsByClassName("get-jokes");

for (var i = 0; i < BElements.length; i++) {
    BElements[i].style.backgroundColor = "#e6e6e6";
}

// h2
var h2Elements = document.getElementsByTagName("h2");

for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = "#fff";
}

// label
var LElements = document.getElementsByTagName("label");

for (var i = 0; i < LElements.length; i++) {
    LElements[i].style.color = "#fff";
}

// jokes

var JElements = document.getElementsByClassName("jokes");

for (var i = 0; i < JElements.length; i++) {
    JElements[i].style.color = "#fff";
    JElements[i].style.fontSize = "20px";

}


//

document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.send();

    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            // console.log(response);

            let output = '';

            if (response.type === 'success') {
                response.value.forEach(function(joke) {
                    output += `<li>${joke.joke}</li>`;

                });

            } else {
                output += '<li>Something went wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;


        }
    }

    e.preventDefault();
}